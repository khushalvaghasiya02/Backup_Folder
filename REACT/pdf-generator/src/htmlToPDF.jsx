import React from 'react'
const html2pdf = require('html2pdf.js');
const HtmlToPDF = () => {
    window.onload = function () {
        const element = document.getElementById('content');
        const options = {
            margin: 1,
            filename: 'my-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    }
    return (
        <div><div id="content">
            <h1>HTML to PDF Document Test</h1>
        </div></div>
    )
}

export default HtmlToPDF