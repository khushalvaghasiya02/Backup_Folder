import logo from './logo.svg';
import './App.css';
import { jsPDF } from "jspdf"; 
import PuppeteerComponent from './Puppeteer';
import TableToPDF from './pdfMake';
import GaugeChart from './Chart';
import CustomGaugeChart from './GaugeChart';
import Gauges from './Gauge';

function App() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 100, 100);
    doc.save("newFile.pdf");
  };

  return (
    <div className="App">
      {/* <div id="content">
        <h2 style={{ color: 'green' }}>
          PDF Generator Blog
        </h2>
        <h3>
          Generate PDF file using jsPDF library
        </h3>
        <div className="container">
          <input 
            type="button" 
            value="Create PDF" 
            onClick={generatePDF} 
          />
        </div>
      </div> */}
      {/* <PuppeteerComponent /> */}
      {/* <TableToPDF /> */}
      <GaugeChart percentage={61} />
      <CustomGaugeChart percentage={100}/>
      <Gauges percentage={55}/>
    </div>
  );
}

export default App;
