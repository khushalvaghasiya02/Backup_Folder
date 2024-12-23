import React, { useState } from 'react'

const BgRemove = () => {
   const [img, setImg] = useState(null);
  const [processedImg, setProcessedImg] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
  };

  const removeBackground = () => {
    // if (!img) return;

    // const image = new Image();
    // image.crossOrigin = "Anonymous";
    // image.src = img;

    // image.onload = ({target}) => {
    //   const w = image.width;
    //   const h = image.height;

    //   const canvas = document.createElement("canvas");
    //   canvas.width = w;
    //   canvas.height = h;
    //   const ctx = canvas.getContext("2d");
    //   ctx.drawImage(target, 0, 0, target.width , target.height,  0, 0,w, h, )

    //   const canvasImageData = ctx.getImageData(0, 0, w, h);

    //   for (let i = 0; i < canvasImageData.data.length; i += 4) {
    //     const r = canvasImageData.data[i];
    //     const g = canvasImageData.data[i + 1];
    //     const b = canvasImageData.data[i + 2];
    //     if ([r, g, b].every((item)=> item > 230)) canvasImageData.data[i + 3] = 0;
    //   }

    //   ctx.putImageData(canvasImageData, 0, 0);
    //   const newImg = canvas.toDataURL();
    //   setProcessedImg(newImg);
    // };

    // image.onerror = (error) => {
    //   console.error("Image failed to load:", error);
    // };
    if (!img) return;
 
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = img;
     
    image.onload = ({ target }) => {
      const w = image.width;
      const h = image.height;
     
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(target, 0, 0, target.width, target.height, 0, 0, w, h);
     
      const canvasImageData = ctx.getImageData(0, 0, w, h);
      const data = canvasImageData.data;
     
      // Function to find the most common color
      function findMostCommonColor(data) {
        const colorCount = {};
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const color = `${r},${g},${b}`;
     
          if (!colorCount[color]) {
            colorCount[color] = 0;
          }
          colorCount[color]++;
        }
     
        let mostCommonColor = null;
        let maxCount = 0;
        for (const color in colorCount) {
          if (colorCount[color] > maxCount) {
            maxCount = colorCount[color];
            mostCommonColor = color;
          }
        }
     
        return mostCommonColor ? mostCommonColor.split(',').map(Number) : [0, 0, 0];
      }
     
      const backgroundColor = findMostCommonColor(data);

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
     
        if (
          Math.abs(r - backgroundColor[0]) < 10 &&
          Math.abs(g - backgroundColor[1]) < 10 &&
          Math.abs(b - backgroundColor[2]) < 10
        ) {
          data[i + 3] = 0;
        }
      }
     
      ctx.putImageData(canvasImageData, 0, 0);
      const newImg = canvas.toDataURL();
      setProcessedImg(newImg);
    };
     
    image.onerror = (error) => {
      console.error("Image failed to load:", error);
    };
    
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

export default BgRemove