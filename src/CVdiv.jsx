import { useState } from "react";
import CVForm from "./CVForm";
import CVDisplay from "./CVDisplay";
import { v4 as uuidv4 } from "uuid";

class CvDetails {
  constructor(name, phone, email, website) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.website = website;
    this.education = [];
    this.experience = [];
  }
}

class Education {
  constructor(course, college, field) {
    this.id = uuidv4();
    this.course = course;
    this.college = college;
    this.field = field;
  }
}

class Experience {
  constructor(company, role, years) {
    this.id = uuidv4();
    this.company = company;
    this.role = role;
    this.years = years;
  }
}

function CVDiv() {
  const [cvDetails, setCvDetails] = useState(new CvDetails());
  const [newEducation, setNewEducation] = useState(new Education("", "", ""));
  const [newExperience, setNewExperience] = useState(
    new Experience("", "", "")
  );

  function addPersonelDetails(e, prop) {
    setCvDetails({
      ...cvDetails,
      [prop]: e.target.value,
    });
  }

  function updateNewEducation(e, prop) {
    setNewEducation({
      ...newEducation,
      [prop]: e.target.value,
    });
  }
  function addEducation() {
    setCvDetails({
      ...cvDetails,
      education: [...cvDetails.education, { ...newEducation, id: uuidv4() }],
    });
    // Reset the newEducation state after adding it
    setNewEducation(new Education("", "", ""));
  }
  function deleteEducation(educationId) {
    const updatedEducation = cvDetails.education.filter(
      (edu) => edu.id !== educationId
    );

    setCvDetails({
      ...cvDetails,
      education: updatedEducation,
    });
  }

  function updateNewExperience(e, prop) {
    setNewExperience({
      ...newExperience,
      [prop]: e.target.value,
    });
  }
  function addExperience() {
    setCvDetails({
      ...cvDetails,
      experience: [...cvDetails.experience, { ...newExperience, id: uuidv4() }],
    });
    // Reset the newExperience state after adding it
    setNewExperience(new Experience("", "", ""));
  }
  function deleteExperience(experienceId) {
    const updatedExperience = cvDetails.experience.filter(
      (ex) => ex.id !== experienceId
    );

    setCvDetails({
      ...cvDetails,
      experience: updatedExperience,
    });
  }

  return (
    <>
      <div className="mainDiv">
        <CVForm
          cvDetails={cvDetails}
          addPersonelDetails={addPersonelDetails}
          newEducation={newEducation}
          updateNewEducation={updateNewEducation}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
          newExperience={newExperience}
          updateNewExperience={updateNewExperience}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
        <CVDisplay cvDetails={cvDetails} />
      </div>
    </>
  );
}

export { CVDiv };
