// server.js
const express = require('express');
const puppeteer = require('puppeteer');
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());
app.options("*", cors());
app.get('/generate-pdf', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pdfgeneratorapi.com', { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=output.pdf',
  });
  res.send(pdfBuffer);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
