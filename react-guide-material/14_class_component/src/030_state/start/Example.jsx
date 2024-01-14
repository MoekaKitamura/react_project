import { Component } from "react";

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true,
      label: "on",
    };
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  changeSwitch() {
    console.log(this);
    this.setState((prevState) => {
      return {
        switchOn: !prevState.switchOn,
        label: !prevState.switchOn ? "on" : "off",
      };
    });
  }

  render() {
    const { label } = this.state;
    return <button onClick={this.changeSwitch}>{this.state.label}</button>;
  }
}

const Example = () => {
  return (
    <>
      <SwitchButton />
    </>
  );
};

export default Example;
