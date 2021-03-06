import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button(props) {
  return (
    <StyledButton
      color={props.color}
      fontColor={props.fontColor}
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 0;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.color};
  color: ${(props) => props.fontColor};
`;

Button.propTypes = {
  color: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
