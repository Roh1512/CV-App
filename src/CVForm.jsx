export default function CVForm({
  cvDetails,
  addPersonelDetails,
  newEducation,
  updateNewEducation,
  addEducation,
  deleteEducation,
  newExperience,
  updateNewExperience,
  addExperience,
  deleteExperience,
}) {
  return (
    <>
      <div className="cvFormDiv">
        <form action="" className="CVForm" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <h2>Personel Details</h2>
            <Input
              stateDetails={cvDetails}
              prop={"name"}
              type={"text"}
              labelValue={"Name"}
              placeHolder={"Enter your Name!"}
              handleChange={addPersonelDetails}
            />
            <Input
              stateDetails={cvDetails}
              prop={"phone"}
              type={"text"}
              labelValue={"Phone"}
              placeHolder={"Enter your phone number"}
              pattern={"[0-9]{10}"}
              handleChange={addPersonelDetails}
            />
            <Input
              stateDetails={cvDetails}
              prop={"email"}
              type={"email"}
              labelValue={"Email"}
              placeHolder={"Enter your email id!"}
              handleChange={addPersonelDetails}
            />
            <Input
              stateDetails={cvDetails}
              prop={"website"}
              type={"text"}
              labelValue={"Website"}
              placeHolder={"Enter your personel website"}
              handleChange={addPersonelDetails}
            />
          </fieldset>
        </form>

        <form
          className="CVForm"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addEducation();
          }}
        >
          <fieldset>
            <h2>Education</h2>
            <Input
              stateDetails={newEducation}
              prop={"course"}
              type={"text"}
              labelValue={"Course"}
              placeHolder={"Degree/PG/Diploma"}
              handleChange={updateNewEducation}
            />
            <Input
              stateDetails={newEducation}
              prop={"college"}
              type={"text"}
              labelValue={"College"}
              placeHolder={"Name of College!"}
              handleChange={updateNewEducation}
            />
            <Input
              stateDetails={newEducation}
              prop={"field"}
              type={"text"}
              labelValue={"Field"}
              placeHolder={"Specialization of course"}
              handleChange={updateNewEducation}
            />
            <button type="submit" className="btn btn-primary">
              Add Education
            </button>
          </fieldset>
        </form>
        {cvDetails.education.map((edu) => {
          return (
            <div key={edu.id} className="detailsBtn">
              <h4>
                {edu.course} in {edu.field}
              </h4>
              <button
                onClick={() => deleteEducation(edu.id)}
                className="btn btn-danger"
              >
                <i class="bi bi-x-circle"></i>
              </button>
            </div>
          );
        })}

        <form
          action=""
          className="CVForm"
          onSubmit={(e) => {
            e.preventDefault();
            addExperience();
          }}
        >
          <fieldset>
            <h2>Experience</h2>
            <Input
              stateDetails={newExperience}
              prop={"company"}
              type={"text"}
              labelValue={"Company"}
              placeHolder={"Name of Company!"}
              handleChange={updateNewExperience}
            />
            <Input
              stateDetails={newExperience}
              prop={"role"}
              type={"text"}
              labelValue={"Job Titile"}
              placeHolder={"Enter Your Job title!"}
              handleChange={updateNewExperience}
            />
            <Input
              stateDetails={newExperience}
              prop={"years"}
              type={"number"}
              labelValue={"Years Worked"}
              placeHolder={"Years of Experience"}
              handleChange={updateNewExperience}
            />
            <button type="submit" className="btn btn-primary">
              Add Experience
            </button>
          </fieldset>
        </form>
        {cvDetails.experience.map((exp) => {
          return (
            <div key={exp.id} className="detailsBtn">
              <h4>
                {exp.role} at {exp.company}
              </h4>
              <button
                onClick={() => deleteExperience(exp.id)}
                className="btn btn-danger"
              >
                <i class="bi bi-x-circle"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Input({
  stateDetails,
  handleChange,
  prop,
  type,
  labelValue,
  placeHolder,
  pattern,
}) {
  return (
    <>
      <label htmlFor={prop}>
        {labelValue + ": "}
        <input
          type={type}
          name={prop}
          placeholder={placeHolder}
          pattern={pattern}
          value={stateDetails[prop]}
          required
          onChange={(e) => handleChange(e, prop)}
        />
      </label>
    </>
  );
}
