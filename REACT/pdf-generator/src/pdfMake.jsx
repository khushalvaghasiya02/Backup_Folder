import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const TableToPDF = () => {
  const generatePDF = () => {
    const tableData = [];
    const rows = document.querySelectorAll('#my-table tr');
    
    rows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('th, td').forEach(cell => {
        rowData.push(cell.innerText);
      });
      tableData.push(rowData);
    });

    const docDefinition = {
      content: [
        {
          text: 'This is Your Employee Details',
          style: 'header'
        },
        {
          table: {
            widths: ['50%', '*', '*'],
            body: tableData
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('table.pdf');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>
        How to Download PDF File on Button Click using JavaScript
      </h1>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>
        You can add your content here...
      </p>

      <table id="my-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Age</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>John Doe</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>30</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>New York</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Jane Smith</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Los Angeles</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bob Johnson</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>40</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Chicago</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={generatePDF}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default TableToPDF;
