import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
const CvDetailsContext = createContext(null);
const CvDispatchContext = createContext(null);

class CvDetails {
  constructor(name, phone, email, website) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.website = website;
    this.education = [];
    this.experience = [];
    this.skills = [];
  }
}
class Education {
  constructor(course, college, field, dateStarted, dateEnded) {
    this.id = uuidv4();
    this.course = course;
    this.college = college;
    this.field = field;
    this.dateStarted = dateStarted;
    this.dateEnded = dateEnded;
  }
}
class Experience {
  constructor(company, role, description, dateStarted, dateEnded) {
    this.id = uuidv4();
    this.company = company;
    this.role = role;
    this.description = description;
    this.dateStarted = dateStarted;
    this.dateEnded = dateEnded;
  }
}
class Skill {
  constructor(text) {
    this.id;
    this.text = text;
  }
}

const initialState = {
  cvDetails: new CvDetails(),
  newEducation: new Education("", "", "", "", ""),
  newExperience: new Experience("", "", "", "", ""),
  skill: new Skill(""),
};

export function CvProvider({ children }) {
  const [cvState, dispatch] = useReducer(cvReducer, initialState);
  return (
    <CvDetailsContext.Provider value={cvState}>
      <CvDispatchContext.Provider value={dispatch}>
        {children}
      </CvDispatchContext.Provider>
    </CvDetailsContext.Provider>
  );
}

export function useCvState() {
  return useContext(CvDetailsContext);
}
export function useCvDispatch() {
  return useContext(CvDispatchContext);
}

export default function cvReducer(cvState, action) {
  switch (action.type) {
    case "set-personal-details": {
      return {
        ...cvState,
        cvDetails: {
          ...cvState.cvDetails,
          [action.prop]: action.value,
        },
      };
    }
    case "update-Education": {
      return {
        ...cvState,
        newEducation: { ...cvState.newEducation, [action.prop]: action.value },
      };
    }
    case "add-new-Education": {
      const id = cvState.newEducation.id;

      // Check if there's an existing education item with the same ID
      const existingIndex = cvState.cvDetails.education.findIndex(
        (ed) => ed.id === id
      );

      if (existingIndex !== -1) {
        // If exists, replace the item at the found index
        const updatedEducation = [...cvState.cvDetails.education];
        updatedEducation[existingIndex] = {
          ...cvState.newEducation,
        };

        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            education: updatedEducation,
          },
          newEducation: new Education("", "", "", "", ""),
        };
      } else {
        // If not exists, add a new education item
        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            education: [
              ...cvState.cvDetails.education,
              { ...cvState.newEducation, id: uuidv4() },
            ],
          },
          newEducation: new Education("", "", "", "", ""),
        };
      }
    }

    case "update-Experience": {
      return {
        ...cvState,
        newExperience: {
          ...cvState.newExperience,
          [action.prop]: action.value,
        },
      };
    }
    case "add-new-Experience": {
      const id = cvState.newExperience.id;

      // Check if there's an existing experience item with the same ID
      const existingIndex = cvState.cvDetails.experience.findIndex(
        (ex) => ex.id === id
      );
      if (existingIndex !== -1) {
        const updatedExperience = [...cvState.cvDetails.experience];
        updatedExperience[existingIndex] = {
          ...cvState.newExperience,
        };
        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            experience: updatedExperience,
          },
          newExperience: new Experience("", "", "", "", ""),
        };
      } else {
        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            experience: [
              ...cvState.cvDetails.experience,
              { ...cvState.newExperience, id: uuidv4() },
            ],
          },
          newExperience: new Experience("", "", "", "", ""),
        };
      }
    }
    case "delete-Education": {
      const educationIdToDelete = action.id;
      const updatedEducation = cvState.cvDetails.education.filter(
        (edu) => edu.id !== educationIdToDelete
      );

      return {
        ...cvState,
        cvDetails: {
          ...cvState.cvDetails,
          education: updatedEducation,
        },
        newEducation: new Education("", "", "", "", ""),
      };
    }
    case "delete-Experience": {
      const experienceIdToDelete = action.id;
      const updatedExperience = cvState.cvDetails.experience.filter(
        (exp) => exp.id !== experienceIdToDelete
      );
      return {
        ...cvState,
        cvDetails: {
          ...cvState.cvDetails,
          experience: updatedExperience,
        },
        newExperience: new Experience("", "", "", "", ""),
      };
    }
    case "update-Skill": {
      return {
        ...cvState,
        skill: {
          ...cvState.skill,
          [action.prop]: action.value,
        },
      };
    }
    case "add-new-Skill": {
      const id = cvState.skill.id;
      const existingIndex = cvState.cvDetails.skills.findIndex(
        (skill) => skill.id === id
      );
      if (existingIndex !== -1) {
        const updatedSkills = [...cvState.cvDetails.skills];
        updatedSkills[existingIndex] = { ...cvState.skill };
        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            skills: updatedSkills,
          },
          skill: new Skill(""),
        };
      } else {
        return {
          ...cvState,
          cvDetails: {
            ...cvState.cvDetails,
            skills: [
              ...cvState.cvDetails.skills,
              { ...cvState.skill, id: uuidv4() },
            ],
          },
          skill: new Skill(""),
        };
      }
    }
    case "delete-Skill": {
      const skillIdToDelete = action.id;
      const updatedSkills = cvState.cvDetails.skills.filter(
        (skill) => skill.id !== skillIdToDelete
      );
      return {
        ...cvState,
        cvDetails: {
          ...cvState.cvDetails,
          skills: updatedSkills,
        },
        skill: new Skill(""),
      };
    }
    case "edit": {
      const id = action.id;
      const property = action.property;
      const itemToEdit = cvState.cvDetails[property].find(
        (item) => item.id === id
      );

      return {
        ...cvState,
        [property === "skills"
          ? "skill"
          : `new${property.charAt(0).toUpperCase()}${property.slice(1)}`]: {
          ...itemToEdit,
        },
      };
    }
    default:
      return cvState;
  }
}
