// import React, { useEffect, useState } from "react";
// import { Dropbox } from "dropbox";
// import "./App.css";

// const CLIENT_ID = "42zjexze6mfpf7x";

// const App = () => {
//   const [accessToken, setAccessToken] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [fileToUpload, setFileToUpload] = useState(null);
//   const [uploadResults, setUploadResults] = useState("");

//   // Parse access token from URL hash
//   const getAccessTokenFromUrl = () => {
//     const hashParams = new URLSearchParams(window.location.hash.substr(1));
//     return hashParams.get("access_token");
//   };

//   useEffect(() => {
//     const token = getAccessTokenFromUrl();
//     if (token) {
//       setAccessToken(token);
//       setIsAuthenticated(true);
//     }
//   }, []);


//   useEffect(() => {
//     const token = localStorage.getItem("dropboxAccessToken") || getAccessTokenFromUrl();
//     if (token) {
//       setAccessToken(token);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // Fetch files in root directory after authentication
//   useEffect(() => {
//     if (accessToken) {
//       const dbx = new Dropbox({ accessToken });
//       dbx.filesListFolder({ path: "" })
//         .then((response) => setFiles(response.result.entries))
//         .catch((error) => console.error(error));
//     }
//   }, [accessToken]);
//   const handleAuthentication = () => {
//     const dbx = new Dropbox({ clientId: CLIENT_ID });
//     const authWindow = window.open("", "DropboxAuth", "width=800,height=600");

//     dbx.auth
//       .getAuthenticationUrl(window.location.href)
//       .then((authUrl) => {
//         authWindow.location.href = authUrl;

//         const authInterval = setInterval(() => {
//           try {
//             if (authWindow.location.hash) {
//               const token = new URLSearchParams(authWindow.location.hash.substr(1)).get("access_token");

//               // if (token) {
//               //   // Get the current URL
//               //   const url = new URL(window.location.href);
//               //   // Set the token in the query parameters
//               //   url.searchParams.set("access_token", token);

//               //   // Update the browser's address bar without reloading the page
//               //   window.history.replaceState(null, '', url.toString());

//               //   console.log("Token set in URL:", url.toString());
//               // }
//               // const token = new URLSearchParams(authWindow.location.hash.substr(1)).get("access_token");

//               if (token) {
//                 // Set the token in cookies with an expiration date (e.g., 7 days)
//                 const expirationDays = 7;
//                 const date = new Date();
//                 date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // 7 days from now
//                 const expires = `expires=${date.toUTCString()}`;
              
//                 // Set the cookie with the token
//                 document.cookie = `access_token=${token}; ${expires}; path=/`;
              
//                 console.log("Token set in cookies:", token);
//               }
              

//               if (token) {
//                 setAccessToken(token);
//                 setIsAuthenticated(true);

//                 // Store token in localStorage
//                 localStorage.setItem("dropboxAccessToken", token);

//                 authWindow.close();
//                 clearInterval(authInterval);


//                 // const dropboxUrl = "https://www.dropbox.com/home";
//                 // window.open(dropboxUrl, '_blank', 'width=800,height=600');
//                 // Redirect to Dropbox homepage
//                 setTimeout(() => {
//                   window.location.href = "https://www.dropbox.com/home";
//                 }, 100);
//                 window.location.href = "http://localhost:5173/";
//               }
//             }
//           } catch (error) {
//             // Ignore cross-origin errors until we have the access token
//           }
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error(error);
//         authWindow.close();
//       });
//   };

//   const openBox = () =>{
//     const dropboxUrl = "https://www.dropbox.com/home";
//     window.open(dropboxUrl, '_blank', 'width=800,height=600');
//   }
//   const handleLogout = () => {
//     localStorage.removeItem("dropboxAccessToken");
//     setAccessToken("");
//     setIsAuthenticated(false);
//   };

//   const handleFileUpload = (e) => {
//     e.preventDefault();
//     if (!fileToUpload || !accessToken) return;

//     const dbx = new Dropbox({ accessToken });
//     const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;

//     if (fileToUpload.size < UPLOAD_FILE_SIZE_LIMIT) {
//       dbx.filesUpload({ path: `/${fileToUpload.name}`, contents: fileToUpload })
//         .then(() => setUploadResults("File uploaded!"))
//         .catch((error) => console.error(error));
//     } else {
//       handleLargeFileUpload(dbx, fileToUpload);
//     }
//   };

//   const handleLargeFileUpload = (dbx, file) => {
//     const maxBlob = 12 * 1024 * 1024;
//     const workItems = [];
//     let offset = 0;

//     while (offset < file.size) {
//       const chunkSize = Math.min(maxBlob, file.size - offset);
//       workItems.push(file.slice(offset, offset + chunkSize));
//       offset += chunkSize;
//     }

//     workItems.reduce((acc, blob, idx, items) => {
//       if (idx === 0) {
//         return acc.then(() =>
//           dbx
//             .filesUploadSessionStart({ close: false, contents: blob })
//             .then((res) => res.result.session_id)
//         );
//       } else if (idx < items.length - 1) {
//         return acc.then((sessionId) => {
//           const cursor = { session_id: sessionId, offset: idx * maxBlob };
//           return dbx
//             .filesUploadSessionAppendV2({ cursor, close: false, contents: blob })
//             .then(() => sessionId);
//         });
//       } else {
//         return acc.then((sessionId) => {
//           const cursor = { session_id: sessionId, offset: idx * maxBlob };
//           const commit = { path: `/${file.name}`, mode: "add", autorename: true, mute: false };
//           return dbx.filesUploadSessionFinish({
//             cursor,
//             commit,
//             contents: blob,
//           });
//         });
//       }
//     }, Promise.resolve())
//       .then(() => setUploadResults("File uploaded!"))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className="App">
//       <header className="page-header">
//         <div className="container">
//           <nav>
//             <h1>
//               <img
//                 src="https://cfl.dropboxstatic.com/static/images/brand/logotype_white-vflRG5Zd8.svg"
//                 className="logo"
//                 alt="Dropbox Logo"
//               />
//               JavaScript SDK Examples
//             </h1>
//           </nav>
//         </div>
//       </header>

//       <main className="container main">
//         {!isAuthenticated ? (
//           <div id="pre-auth-section">
//             <p>
//               This example takes the user through Dropbox's API OAuth flow using{" "}
//               <code>Dropbox.getAuthenticationUrl()</code> method and then uses
//               the generated access token to list the contents of their root
//               directory.
//             </p>
//             <button onClick={handleAuthentication}>Authenticate</button>
//             <p className="info">
//               Once authenticated, it will use the access token to list the files
//               in your root directory.
//             </p>
//           </div>
//         ) : (
//           <div id="authed-section">
//             <h2>Files in your root directory:</h2>
//             <ul id="files">
//               {files.map((file) => (
//                 <li key={file.id}>{file.name}</li>
//               ))}
//             </ul>

//             <button onClick={handleLogout}>Logout</button>
//             {/* <form onSubmit={handleFileUpload}>
//               <input
//                 type="file"
//                 onChange={(e) => setFileToUpload(e.target.files[0])}
//               />
//               <button type="submit">Upload File</button>
//             </form> */}
//               <button type="submit" onClick={openBox}>Upload File</button>
//             <h2 id="results">{uploadResults}</h2>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default App;

