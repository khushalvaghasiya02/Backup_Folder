import jsPDF from "jspdf";
import React, { useRef } from "react";

function PdfGenerate() {
  const pdfContentRef = useRef();

  const printDocument = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 10;
    const startX = margin;
    const startY = 20;
    let lineHeight = 10;
    
    const content = pdfContentRef.current.innerText;
    const lines = pdf.splitTextToSize(content, pdf.internal.pageSize.width - margin * 2);
    
    lines.forEach((line, index) => {
      pdf.text(startX, startY + index * lineHeight, line);
    });

    pdf.save("download.pdf");
  };

  return (
    <div>
      <div className="mb5">
        <button onClick={printDocument}>Print PDF</button>
      </div>
      <div
        id="divToPrint"
        ref={pdfContentRef}
        style={{
          backgroundColor: "#f5f5f5",
          width: "210mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <h2>PDF Content Title</h2>
        <p>Note: The dimensions of the div are the same as A4. This text will be selectable in the generated PDF.</p>
        <p>You can add any text content here, and it will appear as selectable text in the PDF file.</p>
      </div>
    </div>
  );
}

export default PdfGenerate;