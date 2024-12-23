import React from 'react';

const PuppeteerComponent = () => {
  const generatePDF = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate-pdf');
      if (!response.ok) throw new Error('Failed to generate PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'output.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <h2>Puppeteer PDF Generation</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo alias, sed delectus quaerat vel rem, nulla officia quas aliquid voluptatum modi recusandae. Inventore nemo maxime tempora sit? Illo, sapiente.</p>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PuppeteerComponent;
