import { DownloadImage, DownloadPDF } from "./downloadFiles";
export default function TopNav() {
  return (
    <>
      <nav className="navBar">
        <div className="downloadBtns">
          <DownloadImage divId={"CVdisplay"} fileName={"CV Image"} />
          <DownloadPDF divId={"CVdisplay"} fileName={"CV Image"} />
        </div>
      </nav>
    </>
  );
}
