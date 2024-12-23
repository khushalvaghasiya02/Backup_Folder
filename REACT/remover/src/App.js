// import React, { useState } from "react";
// import BgRemove from "./BgRemove";

// const App = () => {
//   const [img, setImg] = useState(null);
//   const [file, setFile] = useState(null);
//   const [processedImg, setProcessedImg] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     setImg(URL.createObjectURL(selectedFile));
//   };

//   const removeBackground = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await fetch("http://localhost:3000/remove-background", {
//         method: "POST",
//         body: formData,
//       });

//       const blob = await response.blob();
//       const imageURL = URL.createObjectURL(blob);

//       setProcessedImg(imageURL);
//       console.log(response);
      
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={removeBackground}>Remove Background</button>

//       {img && (
//         <img
//           src={img}
//           alt="Original"
//           style={{ width: "300px", height: "auto", marginTop: "10px" }}
//         />
//       )}

//       {processedImg && (
//         <img
//           src={processedImg}
//           alt="Processed"
//           style={{ width: "300px", height: "auto", marginTop: "10px" }}
//         />
//       )}
//       <BgRemove />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {
  const [img, setImg] = useState(null);
  const [file, setFile] = useState(null);
  const [processedImg, setProcessedImg] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImg(URL.createObjectURL(selectedFile));
  };

  const removeBackground = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Step 1: Upload the file
      const uploadResponse = await fetch("http://localhost:5000/uploadremovebackground", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadResponse.json();
      const filePath = uploadData.path;

      // Step 2: Remove background
      const removeResponse = await fetch("http://localhost:5000/removebackground", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: filePath }),
      });

      const removeData = await removeResponse.json();
      const imageURL = `http://localhost:5000/${removeData.path}`;

      setProcessedImg(imageURL);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={removeBackground}>Remove Background</button>

      {img && (
        <img
          src={img}
          alt="Original"
          style={{ width: "300px", height: "auto", marginTop: "10px" }}
        />
      )}

      {processedImg && (
        <img
          src={processedImg}
          alt="Processed"
          style={{ width: "300px", height: "auto", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default App;
