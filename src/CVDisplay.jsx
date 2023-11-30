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
                <i class="bi bi-telephone"></i>
                &nbsp;
                <h3>{cvDetails.phone}</h3>
              </div>
            </>
          )}
          {cvDetails.email !== undefined && cvDetails.email !== "" && (
            <>
              <div className="personelContactDiv">
                <i class="bi bi-envelope-at"></i>
                &nbsp;
                <h3>{cvDetails.email}</h3>
              </div>
            </>
          )}
          {cvDetails.website !== undefined && cvDetails.website !== "" && (
            <div className="personelContactDiv">
              <i class="bi bi-person-lines-fill"></i>
              &nbsp;
              <h3>{cvDetails.website}</h3>
            </div>
          )}
        </div>
        <Details
          details={cvDetails.education}
          heading={"EDUCATION"}
          mainProp={"field"}
          prop2={"course"}
          prop3={"college"}
        />
        <Details
          details={cvDetails.experience}
          heading={"EXPERIENCE"}
          mainProp={"company"}
          prop2={"role"}
          prop3={"years"}
        />
      </div>
    </>
  );
}

function Details({ details, heading, mainProp, prop2, prop3 }) {
  return (
    <>
      <div className="details">
        {details.length > 0 && (
          <>
            <h2 className="displayHeading">{heading}</h2>
          </>
        )}
        {details.map((detail) => {
          return (
            <>
              <div key={detail.id} className="displayGrid">
                <h2 className="displayGridLeft">{detail[mainProp]}</h2>
                <h5>
                  {prop2.toUpperCase() + ": "}
                  {detail[prop2]}
                </h5>
                <h6>
                  {prop3.toUpperCase() + ": "}
                  {detail[prop3]}
                </h6>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
