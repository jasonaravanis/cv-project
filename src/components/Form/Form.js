import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PersonalInformation from "./PersonalInformation";
import Experiences from "./Experience/Experiences";
import Educations from "./Education/Educations";
import Section from "../utilities/Section";
import Button from "../utilities/Button";

function Form(props) {
  return (
    <StyledForm>
      <Section appStyles={props.appStyles} title="Personal Information">
        <PersonalInformation
          appStyles={props.appStyles}
          handleChange={props.handleChange}
          stateSection="personalInfo"
          personalInfo={props.personalInfo}
        />
      </Section>
      <Section title="Experience" appStyles={props.appStyles}>
        <Experiences
          experiences={props.experience}
          appStyles={props.appStyles}
          handleChange={props.handleChange}
          stateSection="experience"
          deleteExperience={props.deleteExperience}
        />
        <Button
          color={props.appStyles.headerColor}
          fontColor={props.appStyles.backgroundColor}
          label="Add Experience"
          onClick={() => props.addExperience()}
          type="button"
        />
      </Section>
      <Section appStyles={props.appStyles} title="Education">
        <Educations
          educations={props.education}
          appStyles={props.appStyles}
          handleChange={props.handleChange}
          stateSection="education"
          deleteEducation={props.deleteEducation}
        />
        <Button
          color={props.appStyles.headerColor}
          fontColor={props.appStyles.backgroundColor}
          label="Add Education"
          onClick={() => props.addEducation()}
          type="button"
        />
      </Section>
      <Section appStyles={props.appStyles} title="">
        <Button
          color="green"
          fontColor={props.appStyles.backgroundColor}
          label="Generate"
          type="button"
          onClick={() => props.handlePrint()}
        />
        <Button
          color="orange"
          fontColor={props.appStyles.backgroundColor}
          label="Load Example"
          type="button"
          onClick={() => props.loadExample()}
        />
        <Button
          color="red"
          fontColor={props.appStyles.backgroundColor}
          label="Reset"
          type="button"
          onClick={() => props.resetForm()}
        />
      </Section>
    </StyledForm>
  );
}

Form.propTypes = {
  appStyles: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  personalInfo: PropTypes.object.isRequired,
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  addExperience: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  loadExample: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  handlePrint: PropTypes.func.isRequired,
};

export default Form;

const StyledForm = styled.form`
  @media (min-width: 801px) {
    max-width: 500px;
  }
`;
