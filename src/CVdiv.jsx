// CVDiv.jsx

import { CvProvider } from "./CvContext";
import CVForm from "./CVForm";
import CVDisplay from "./CVDisplay";

export default function CVDiv() {
  return (
    <div className="mainDiv">
      <CvProvider>
        <CVForm />
        <CVDisplay />
      </CvProvider>
    </div>
  );
}
