// CVForm.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { useCvDispatch, useCvState } from "./CvContext";
export default function CVForm() {
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [edit, setEdit] = useState(false);
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
  function editItem(id, property) {
    dispatch({
      type: "edit",
      id: id,
      property: property,
    });
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
            setEdit(false);
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Education</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => {
                  setShowEducationForm(!showEducationForm);
                  setShowExperienceForm(false);
                  setShowSkillForm(false);
                }}
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
                  type={"month"}
                  placeHolder={"Year Started"}
                  value={
                    cvState.newEducation.dateStarted !== "" &&
                    cvState.newEducation.dateStarted !== null &&
                    cvState.newEducation.dateStarted !== undefined
                      ? cvState.newEducation.dateStarted
                      : "2018-08"
                  }
                />
                <Input
                  handleChange={updateEducation}
                  prop={"dateEnded"}
                  type={"month"}
                  placeHolder={"Year of graduation"}
                  value={
                    (cvState.newEducation.dateEnded !== "") &
                      (cvState.newEducation.dateEnded !== null) &&
                    cvState.newEducation.dateEnded !== undefined
                      ? cvState.newEducation.dateEnded
                      : "2020-03"
                  }
                />
                <button
                  type="submit"
                  className={!edit ? "btn btn-primary" : "btn btn-success"}
                >
                  {!edit ? "Add Education" : "Save changes"}
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showEducationForm && (
          <ListDiv
            details={cvState.cvDetails.education}
            onClick={deleteEducation}
            onEdit={(id) => editItem(id, "education")}
            displayProp={"course"}
            setEdit={setEdit}
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
            setEdit(false);
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Experience</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => {
                  setShowExperienceForm(!showExperienceForm);
                  setShowEducationForm(false);
                  setShowSkillForm(false);
                }}
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
                  type={"month"}
                  placeHolder={"Year Joined"}
                  value={
                    cvState.newExperience.dateStarted !== "" &&
                    cvState.newExperience.dateStarted !== null &&
                    cvState.newExperience.dateStarted !== undefined
                      ? cvState.newExperience.dateStarted
                      : "2015-07"
                  }
                />
                <Input
                  handleChange={updateExperience}
                  prop={"dateEnded"}
                  type={"month"}
                  placeHolder={"Year Resigned"}
                  value={
                    cvState.newExperience.dateEnded !== "" &&
                    cvState.newExperience.dateEnded !== null &&
                    cvState.newExperience.dateEnded !== undefined
                      ? cvState.newExperience.dateEnded
                      : "2018-05"
                  }
                />
                <button
                  type="submit"
                  className={!edit ? "btn btn-primary" : "btn btn-success"}
                >
                  {!edit ? "Add Experience" : "Save changes"}
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showExperienceForm && (
          <ListDiv
            details={cvState.cvDetails.experience}
            onClick={deleteExperience}
            onEdit={(id) => editItem(id, "experience")}
            displayProp={"company"}
            setEdit={setEdit}
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
            setEdit(false);
          }}
        >
          <fieldset>
            <div className="headingForm">
              <h2>Skills</h2>
              <button
                type="button"
                className="formExpandBtn"
                onClick={() => {
                  setShowSkillForm(!showSkillForm);
                  setShowEducationForm(false);
                  setShowExperienceForm(false);
                }}
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
                <button
                  type="submit"
                  className={!edit ? "btn btn-primary" : "btn btn-success"}
                >
                  {!edit ? "Add Skill" : "Save changes"}
                </button>
              </>
            )}
          </fieldset>
        </form>
        {showSkillForm && (
          <ListDiv
            details={cvState.cvDetails.skills}
            onClick={deleteSkill}
            onEdit={(id) => editItem(id, "skills")}
            displayProp={"text"}
            setEdit={setEdit}
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
Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  prop: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  pattern: PropTypes.string, // Add if pattern is used
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

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

TextArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  prop: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  pattern: PropTypes.string, // Add if pattern is used
  value: PropTypes.string.isRequired,
};

function ListDiv({ details, onClick, displayProp, onEdit, setEdit }) {
  return (
    <>
      {details.map((detail) => (
        <div key={detail.id} className={"detailsBtn"}>
          <h4 className="listDisplayText">{detail[displayProp]}</h4>
          <div className="listButtons">
            <button
              onClick={() => {
                onEdit(detail.id);
                setEdit(true);
              }}
              className="listBtn"
            >
              <i className="bi bi-pen"></i>
            </button>
            <button
              onClick={() => {
                onClick(detail.id);
                setEdit(false);
              }}
              className="listBtn"
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
ListDiv.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  displayProp: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
};
