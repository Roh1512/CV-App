import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function downloadPDF(myDiv, fileName) {
    const backgroundColor = window.getComputedStyle(
      document.getElementById(myDiv)
    ).backgroundColor;

    // Set the background color explicitly during capture
    html2canvas(document.getElementById(myDiv), {
      scale: 4,
      backgroundColor,
    }).then(function (canvas) {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");

      // Calculate width and height based on the printable area of the page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, "", "FAST");
      pdf.save(`${fileName}.pdf`);
    });
  }

  function downloadImage(myDiv, fileName) {
    const backgroundColor = window.getComputedStyle(
      document.getElementById(myDiv)
    ).backgroundColor;

    // Set the background color explicitly during capture
    html2canvas(document.getElementById(myDiv), {
      scale: 4,
      backgroundColor,
    }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${fileName}.png`;
      link.click();
    });
  }

  return (
    <>
      <div id="card">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count iss {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <button
          onClick={() => {
            downloadPDF("card", "resume");
          }}
        >
          Download PDF
        </button>
        <button
          onClick={() => {
            downloadImage("card", "resume");
          }}
        >
          Download Image
        </button>
      </div>
    </>
  );
}

export default App;
