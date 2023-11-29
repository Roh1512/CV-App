import gmailIcon from "./assets/gmail.svg";
import phoneIcon from "./assets/telephone.svg";
import websiteIcon from "./assets/website.svg";
export default function CVDisplay({ cvDetails }) {
  return (
    <>
      <div id="CVdisplay" className="cvDisplayDiv">
        <div className="personeldetails">
          <h2 className="personelDetailsName">{cvDetails.name}</h2>
          {cvDetails.phone !== undefined && cvDetails.phone !== "" && (
            <>
              <div className="personelContactDiv">
                <img src={phoneIcon} alt="Phone Icon" />
                &nbsp;
                <h3>{cvDetails.phone}</h3>
              </div>
            </>
          )}
          {cvDetails.email !== undefined && cvDetails.email !== "" && (
            <>
              <div className="personelContactDiv">
                <img src={gmailIcon} alt="Mail Icon" />
                &nbsp;
                <h3>{cvDetails.email}</h3>
              </div>
            </>
          )}
          {cvDetails.website !== undefined && cvDetails.website !== "" && (
            <div className="personelContactDiv">
              <img src={websiteIcon} alt="Website Icon" />
              &nbsp;
              <h3>{cvDetails.website}</h3>
            </div>
          )}
        </div>
        <div className="educationDetails">
          {cvDetails.education.length > 0 && (
            <>
              <h2>EDUCATION</h2>
            </>
          )}
          {cvDetails.education.map((edu) => {
            return (
              <div key={edu.id}>
                <p>{edu.course}</p>
                <p>{edu.college}</p>
                <p>{edu.field}</p>
              </div>
            );
          })}
        </div>
        <div className="experienceDetails">
          {cvDetails.experience.length > 0 && (
            <>
              <h2>EXPERIENCE</h2>
            </>
          )}
          {cvDetails.experience.map((exp) => {
            return (
              <div key={exp.id}>
                <p>{exp.company}</p>
                <p>{exp.role}</p>
                <p>{exp.years}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
