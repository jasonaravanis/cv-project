import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function RightPanel(props) {
  return (
    <RightPanelWrapper>
      <Container>
        <h3>Address</h3>
        <StyledParagraph>{props.personalInfo.address}</StyledParagraph>
        <h3>Phone</h3>
        <StyledParagraph>{props.personalInfo.phoneNumber}</StyledParagraph>
        <h3>Email</h3>
        <StyledParagraph>{props.personalInfo.email}</StyledParagraph>
      </Container>
    </RightPanelWrapper>
  );
}

const RightPanelWrapper = styled.div`
  grid-area: rightPanel;
  background: #e0dfd5;
`;

const Container = styled.section`
  margin: 1rem;
`;

const StyledParagraph = styled.p`
  padding: 0.5rem 0 0.5rem 0;
  line-height: 1.2;
`;

RightPanel.propTypes = {
  personalInfo: PropTypes.object.isRequired,
};

export default RightPanel;

// import React, { Component } from "react";
// import styled from "styled-components";

// const RightPanelWrapper = styled.div`
//   grid-area: rightPanel;
//   background: #e0dfd5;
// `;

// const Container = styled.section`
//   margin: 1rem;
// `;

// const StyledParagraph = styled.p`
//   padding: 0.5rem 0 0.5rem 0;
//   line-height: 1.2;
// `;

// export class RightPanel extends Component {
//   render() {
//     const { personalInfo } = this.props;
//     return (
//       <RightPanelWrapper>
//         <Container>
//           <h3>Address</h3>
//           <StyledParagraph>{personalInfo.address}</StyledParagraph>
//           <h3>Phone</h3>
//           <StyledParagraph>{personalInfo.phoneNumber}</StyledParagraph>
//           <h3>Email</h3>
//           <StyledParagraph>{personalInfo.email}</StyledParagraph>
//         </Container>
//       </RightPanelWrapper>
//     );
//   }
// }

// export default RightPanel;
