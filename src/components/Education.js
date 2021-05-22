import React, { Component } from "react";
import { Input } from "./utilities/Input";
import Button from "./utilities/Button/Button";

export class Education extends Component {
  render() {
    return (
      <>
        <Input
          appStyles={this.props.appStyles}
          title="Institution"
          name="institution"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Degree"
          name="degree"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="Start Date"
          name="start"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
        />
        <Input
          appStyles={this.props.appStyles}
          title="End Date"
          name="end"
          onChange={this.props.onChange}
          stateSection={this.props.stateSection}
        />
        <Button
          color={this.props.appStyles.headerColor}
          fontColor={this.props.appStyles.backgroundColor}
          label="Add Education"
        />
      </>
    );
  }
}

export default Education;
