// const express = require("express");
// const multer = require("multer");
// const { Rembg } = require("rembg-node");
// const sharp = require("sharp");
// const fs = require("fs");
// const { log } = require("console");
// const { BodyPix } = require("@tensorflow-models/body-pix");
// const { loadImage, createCanvas } = require("canvas");
// // const cv = require('opencv4nodejs');

// const app = express();
// const port = 3000;

// const upload = multer({ dest: "uploads/" });

// app.post("/remove-background", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }
//     const inputPath = req.file.path;

//     const net = await BodyPix.load();
//     // Load the image
//     const image = await loadImage(inputPath);
//     const canvas = createCanvas(image.width, image.height);
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(image, 0, 0);

//     const segmentation = await net.segmentPerson(canvas);

//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;

//     for (let i = 0; i < segmentation.data.length; i++) {
//         if (segmentation.data[i] === 0) {
//             data[i * 4 + 3] = 0;
//                 }
//     }

//     ctx.putImageData(imageData, 0, 0);

//     // Save the image
//     const buffer = canvas.toBuffer('image/png');
//     fs.writeFileSync('http://localhost:3001/public', buffer);
//     console.log('Background removed successfully!');
//     // const input = sharp(inputPath)

//     // console.log(input);

//     // const rembg = new Rembg({ logging: true });
//     // const output = await rembg.remove(input);

//     // const outputBuffer = await output.webp().toBuffer();

//     // fs.unlinkSync(inputPath);

//     // res.set("Content-Type", "image/webp");

//     // return res.send(outputBuffer);
//   } catch (error) {
//     console.error("Error processing image:", error);
//     return res.status(500).json({ error: "Error processing image" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // async function removeBackground(inputPath, outputPath) {
// //     // Load the pre-trained BodyPix model

// // }

// // // Usage example
// // removeBackground('input-image.jpg', 'output-image.png')
// //     .catch(err => console.error('Error:', err));

// const express = require("express");
// const multer = require("multer");
// const sharp = require("sharp");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// const upload = multer({ dest: "uploads/" });

// app.post("/remove-background", upload.single("image"), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     // console.log(filePath);
//     // fs.promises
//     //   .readFile(filePath)
//     //   .then((data) => {
//     //     console.log("Image read successfully:", data.length, "bytes");
//     //   })
//     //   .catch((err) => {
//     //     console.error("Error reading image:", err);
//     //   });

//     async function processImage() {
//       try {
//         const image = sharp(filePath);
//         await image
//           .resize({
//             width: 800,
//           })
//           .toFile('uploads/');
//         console.log("Processing complete.");
//       } catch (error) {
//         console.error("Error processing image:", error);
//       }
//     }
//     processImage();
// const outputFilePath = path.join(
//   __dirname,
//   "output",
//   `${Date.now()}-no-bg.png`
// );

// const backgroundColor = { r: 255, g: 255, b: 255 };
// const threshold = 200;

// // Load the image
// const image = sharp(filePath);
// const { data, info } = await image
//   .raw()
//   .toBuffer({ resolveWithObject: true });

// // Create a new buffer for the processed image with alpha channel
// const processedData = Buffer.alloc(data.length);

// // Iterate through the buffer to apply transparency based on the background color
// for (let i = 0; i < data.length; i += 4) {
//   processedData[i] = data[i]; // Red
//   processedData[i + 1] = data[i + 1]; // Green
//   processedData[i + 2] = data[i + 2]; // Blue
//   if (
//     Math.abs(data[i] - backgroundColor.r) < threshold &&
//     Math.abs(data[i + 1] - backgroundColor.g) < threshold &&
//     Math.abs(data[i + 2] - backgroundColor.b) < threshold
//   ) {
//     processedData[i + 3] = 0; // Set alpha to 0 for transparency
//   } else {
//     processedData[i + 3] = 255; // Set alpha to 255 for opaque
//   }
// }

// // Save the processed image with alpha channel
// await sharp(processedData, {
//   raw: { width: info.width, height: info.height, channels: 4 },
// }).toFile(outputFilePath);

// // Send the processed image file as the response
// res.sendFile(outputFilePath, (err) => {
//   if (err) {
//     console.error("Error sending file:", err);
//     res.status(500).send("Error sending processed image");
//   }
// });
//   } catch (error) {
//     console.error("Error removing background:", error);
//     res.status(500).send("Error removing background from image");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const multer = require("multer");
// const sharp = require("sharp");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // Configure multer for file uploads
// const upload = multer({ dest: "uploads/" });

// // Ensure the output directory exists
// const outputDir = path.join(__dirname, 'output');
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// app.post("/remove-background", upload.single("image"), async (req, res) => {
//     try {
//       const filePath = req.file.path;
//       const outputFilePath = path.join(outputDir, `${Date.now()}-processed.png`);

//       // Process the image
//       async function processImage() {

//           await sharp(filePath)
//             .resize({ width: 800 }) // Resize as an example, adjust as needed
//             .toFile(outputFilePath); // Save to a file

//           console.log("Processing complete.");
//           const backgroundColor = { r: 255, g: 255, b: 255 };
//           const threshold = 200;

//           // Load the image
//           const image = sharp(outputFilePath);
//           const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

//           // Create a new buffer for the processed image with alpha channel
//           const processedData = Buffer.alloc(info.width * info.height * 4); // 4 channels: RGBA

//           // Iterate through the buffer to apply transparency based on the background color
//           for (let i = 0; i < data.length; i += 3) {
//             const r = data[i];
//             const g = data[i + 1];
//             const b = data[i + 2];

//             processedData[i] = r; // Red
//             processedData[i + 1] = g; // Green
//             processedData[i + 2] = b; // Blue

//             if (
//               Math.abs(r - backgroundColor.r) < threshold &&
//               Math.abs(g - backgroundColor.g) < threshold &&
//               Math.abs(b - backgroundColor.b) < threshold
//             ) {
//               processedData[i + 3] = 0; // Set alpha to 0 for transparency
//             } else {
//               processedData[i + 3] = 255; // Set alpha to 255 for opaque
//             }
//           }

//           // Save the processed image with alpha channel
//           await sharp(processedData, {
//             raw: { width: info.width, height: info.height, channels: 4 },
//           }).toFile(outputFilePath);

//           // Send the processed image file as the response
//         //   res.sendFile(outputFilePath, (err) => {
//         //     if (err) {
//         //       console.error("Error sending file:", err);
//         //       res.status(500).send("Error sending processed image");
//         //     }
//         //   });

//       }
//       processImage();
//     } catch (error) {
//       console.error('Error handling request:', error);
//       res.status(500).send('Error handling request');
//     }
//   });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const cors = require('cors');
const sharp = require("sharp");
const app = express();

const uploadDir = path.join(__dirname, "public/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)); 
  },
});

var upload = multer({ storage: storage }).single("image");

// Upload route
app.post("/uploadremovebackground", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      res.status(500).send("Error uploading file");
    } else {
      res.json({
        path: req.file.path, 
        message: "File uploaded successfully",
      });
    }
  });
});

// Remove background route
app.post("/removebackground", (req, res) => {
  const filePath = req.body.path;
  const inputFilePath = path.resolve(filePath);
  const resizedFilePath = path.join(uploadDir, `resized-${path.basename(filePath)}`);

  // Resize image using sharp
  sharp(inputFilePath)
    .resize({ width: 800 })
    .toFile(resizedFilePath, (err, info) => {
      if (err) {
        console.error("Error resizing image:", err);
        return res.status(500).send("Error resizing image");
      }

      console.log("Resized image info:", info);

      const outputPath = path.join(uploadDir, `${Date.now()}output.jpg`);
      const command = `backgroundremover -i ${resizedFilePath} -o ${outputPath}`

      exec(command, (err, stdout, stderr) => {
        console.log('Output Path:', outputPath);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);

        if (err) {
          console.error("Error removing background:", err);
          return res.status(500).send("Background removal failed");
        } else {
          res.json({
            path: outputPath,
            message: "Background removed successfully",
          });
        }
      });
    });
});
// Download route
app.get("/download", (req, res) => {
  const pathoutput = req.query.path;
  const fullpath = path.join(__dirname, pathoutput);
  res.download(fullpath, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Download failed");
    }
    fs.unlinkSync(fullpath);
  });
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
