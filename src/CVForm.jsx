/* eslint-disable react/prop-types */
// CVForm.jsx
import { useState } from "react";
import { useCvDispatch, useCvState } from "./CvContext";
export default function CVForm() {
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const cvState = useCvState();
  const dispatch = useCvDispatch();

  function addPersonelDetails(e, prop) {
    dispatch({
      type: "set-personal-details",
      prop,
      value: e.target.value,
    });
    console.log(cvState);
  }
  function updateEducation(e, prop) {
    dispatch({
      type: "update-Education",
      prop,
      value: e.target.value,
    });
  }
  function addEducation() {
    dispatch({
      type: "add-new-Education",
    });
  }
  function updateExperience(e, prop) {
    dispatch({
      type: "update-Experience",
      prop,
      value: e.target.value,
    });
  }
  function addExperience() {
    dispatch({
      type: "add-new-Experience",
    });
  }

  function deleteEducation(educationId) {
    dispatch({
      type: "delete-Education",
      id: educationId,
    });
  }
  function deleteExperience(experienceId) {
    dispatch({
      type: "delete-Experience",
      id: experienceId,
    });
  }

  function updateSkill(e, prop) {
    dispatch({ type: "update-Skill", prop, value: e.target.value });
  }
  function addSkill() {
    dispatch({
      type: "add-new-Skill",
    });
  }
  function deleteSkill(skillId) {
    dispatch({ type: "delete-Skill", id: skillId });
  }

  return (
    <div className="cvFormDiv">
      <div className="formDiv">
        <form action="" className="CVForm" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <h2>Personel Details</h2>
            <Input
              handleChange={addPersonelDetails}
              prop={"name"}
              type={"text"}
              placeHolder={"Enter Your Name"}
              value={cvState.cvDetails.name}
            />
            <Input
              handleChange={addPersonelDetails}
              prop={"phone"}
              type={"text"}
              placeHolder={"Enter Phone number"}
              value={cvState.cvDetails.phone}
            />
            <Input
              handleChange={addPersonelDetails}
              prop={"email"}
              type={"text"}
              placeHolder={"Enter email address"}
              value={cvState.cvDetails.email}
            />
            <Input
              handleChange={addPersonelDetails}
              prop={"website"}
              type={"text"}
              placeHolder={"Personal Website"}
              value={cvState.cvDetails.website}
            />
          </fieldset>
        </form>
      </div>
      <div className="formDiv">
        <form
          className="CVForm"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addEducation();
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Education</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => setShowEducationForm(!showEducationForm)}
              >
                {showEducationForm ? (
                  <i className="bi bi-arrow-up-circle-fill"></i>
                ) : (
                  <i className="bi bi-arrow-down-circle-fill"></i>
                )}
              </button>
            </div>
            {showEducationForm && (
              <>
                <Input
                  handleChange={updateEducation}
                  prop={"course"}
                  type={"text"}
                  placeHolder={"Degree/PHD/Diploma"}
                  value={cvState.newEducation.course}
                />
                <Input
                  handleChange={updateEducation}
                  prop={"college"}
                  type={"text"}
                  placeHolder={"Name of Institution"}
                  value={cvState.newEducation.college}
                />
                <Input
                  handleChange={updateEducation}
                  prop={"field"}
                  type={"text"}
                  placeHolder={"Field of Education"}
                  value={cvState.newEducation.field}
                />
                <Input
                  handleChange={updateEducation}
                  prop={"dateStarted"}
                  type={"date"}
                  placeHolder={"Date Started"}
                  value={cvState.newEducation.dateStarted}
                />
                <Input
                  handleChange={updateEducation}
                  prop={"dateEnded"}
                  type={"date"}
                  placeHolder={"Date of graduation"}
                  value={cvState.newEducation.dateEnded}
                />
                <button type="submit" className="btn btn-primary">
                  Add Education
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showEducationForm && (
          <ListDiv
            details={cvState.cvDetails.education}
            onClick={deleteEducation}
            displayProp={"course"}
          />
        )}
      </div>
      <div className="formDiv">
        <form
          className="CVForm"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addExperience();
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Experience</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => setShowExperienceForm(!showExperienceForm)}
              >
                {showExperienceForm ? (
                  <i className="bi bi-arrow-up-circle-fill"></i>
                ) : (
                  <i className="bi bi-arrow-down-circle-fill"></i>
                )}
              </button>
            </div>
            {showExperienceForm && (
              <>
                <Input
                  handleChange={updateExperience}
                  prop={"company"}
                  type={"text"}
                  placeHolder={"Company Name"}
                  value={cvState.newExperience.company}
                />
                <Input
                  handleChange={updateExperience}
                  prop={"role"}
                  type={"text"}
                  placeHolder={"Job Title"}
                  value={cvState.newExperience.role}
                />
                <TextArea
                  handleChange={updateExperience}
                  prop={"description"}
                  placeHolder={"Job Description"}
                  value={cvState.newExperience.description}
                />
                <Input
                  handleChange={updateExperience}
                  prop={"dateStarted"}
                  type={"date"}
                  placeHolder={"Date Joined"}
                  value={cvState.newExperience.dateStarted}
                />
                <Input
                  handleChange={updateExperience}
                  prop={"dateEnded"}
                  type={"date"}
                  placeHolder={"Date Resigned"}
                  value={cvState.newExperience.dateEnded}
                />
                <button type="submit" className="btn btn-primary">
                  Add Experience
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showExperienceForm && (
          <ListDiv
            details={cvState.cvDetails.experience}
            onClick={deleteExperience}
            displayProp={"company"}
          />
        )}
      </div>
      <div className="formDiv">
        <form
          className="CVForm"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addSkill();
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Skills</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => setShowSkillForm(!showSkillForm)}
              >
                {showSkillForm ? (
                  <i className="bi bi-arrow-up-circle-fill"></i>
                ) : (
                  <i className="bi bi-arrow-down-circle-fill"></i>
                )}
              </button>
            </div>
            {showSkillForm && (
              <>
                <Input
                  prop={"text"}
                  value={cvState.skill.text}
                  type={"text"}
                  handleChange={updateSkill}
                  placeHolder={"Add a skill"}
                />
                <button type="submit" className="btn btn-primary">
                  Add Skill
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showSkillForm && (
          <ListDiv
            details={cvState.cvDetails.skills}
            onClick={deleteSkill}
            displayProp={"text"}
          />
        )}
      </div>
    </div>
  );
}

function Input({ handleChange, prop, type, placeHolder, pattern, value }) {
  return (
    <>
      <div className="form-floating">
        <input
          className="form-control"
          id="floatingInput"
          type={type}
          name={prop}
          placeholder={placeHolder}
          pattern={pattern}
          value={value}
          required
          onChange={(e) => handleChange(e, prop)}
        />
        <label htmlFor="floatingInput">{` ${placeHolder}`}</label>
      </div>
    </>
  );
}

function TextArea({ handleChange, prop, placeHolder, pattern, value }) {
  return (
    <>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder={placeHolder}
          id="floatingTextarea2"
          style={{ height: "100px" }}
          pattern={pattern}
          value={value}
          onChange={(e) => handleChange(e, prop)}
          name={prop}
          required
        ></textarea>
        <label htmlFor="floatingTextarea2">{placeHolder}</label>
      </div>
    </>
  );
}
function ListDiv({ details, onClick, displayProp }) {
  return (
    <>
      {details.map((detail) => (
        <div key={detail.id} className="detailsBtn">
          <h4>{detail[displayProp]}</h4>
          <button onClick={() => onClick(detail.id)} className="btn btn-danger">
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
      ))}
    </>
  );
}
