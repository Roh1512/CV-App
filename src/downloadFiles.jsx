import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function DownloadPDF({ divId, fileName }) {
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
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => downloadPDF(divId, fileName)}
    >
      Download PDF
    </button>
  );
}

function DownloadImage({ divId, fileName }) {
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
    <button
      className="btn btn-success"
      onClick={() => downloadImage(divId, fileName)}
    >
      Download Image
    </button>
  );
}

export { DownloadImage, DownloadPDF };
