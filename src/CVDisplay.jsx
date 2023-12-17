import { useCvState } from "./CvContext";
export default function CVDisplay() {
  const cvState = useCvState();
  return (
    <>
      <div className="cvDisplayContainer">
        <div id="CVdisplay" className="cvDisplayDiv">
          <div className="personeldetails">
            <h2 className="personelDetailsName">{cvState.cvDetails.name}</h2>
            {cvState.cvDetails.phone !== undefined &&
              cvState.cvDetails.phone !== "" &&
              cvState.cvDetails.phone !== null && (
                <>
                  <div className="personelContactDiv">
                    <i className="bi bi-telephone"></i>
                    &nbsp;
                    <h3>{cvState.cvDetails.phone}</h3>
                  </div>
                </>
              )}
            {cvState.cvDetails.email !== undefined &&
              cvState.cvDetails.email !== "" &&
              cvState.cvDetails.email !== null && (
                <>
                  <div className="personelContactDiv">
                    <i className="bi bi-envelope-at"></i>
                    &nbsp;
                    <h3>{cvState.cvDetails.email}</h3>
                  </div>
                </>
              )}
            {cvState.cvDetails.website !== undefined &&
              cvState.cvDetails.website !== "" &&
              cvState.cvDetails.website !== null && (
                <>
                  <div className="personelContactDiv">
                    <i className="bi bi-person-lines-fill"></i>
                    &nbsp;
                    <h3>{cvState.cvDetails.website}</h3>
                  </div>
                </>
              )}
          </div>

          <Details
            heading={"EDUCATION"}
            details={cvState.cvDetails.education}
            mainProp={"field"}
            prop2={"course"}
            prop3={"college"}
          />
          <Details
            heading={"EXPERIENCE"}
            details={cvState.cvDetails.experience}
            mainProp={"company"}
            prop2={"role"}
            prop3={"description"}
          />
          <div className="skillsDiv">
            {cvState.cvDetails.skills.length > 0 && (
              <h2 className="displayHeading">SKILLS</h2>
            )}
            <div className="skillListContainer">
              {cvState.cvDetails.skills.map((skill) => {
                return (
                  <>
                    <div key={skill.id} className="skillListItem">
                      <p>{skill.text}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
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
              <div key={detail.id} className="individualGrid">
                <p className="mainProperty">{detail[mainProp]}</p>
                <p className="prop2">{detail[prop2]}</p>
                <p className="prop3">{detail[prop3]}</p>
                <p className="dates">
                  From{" "}
                  <b>
                    <em>{detail["dateStarted"]}</em> {/*Comment*/}
                  </b>{" "}
                  to{" "}
                  <b>
                    <em>{detail["dateEnded"]}</em>
                  </b>
                  .
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
