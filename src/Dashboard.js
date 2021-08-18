import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Jack" };
  }

  handleChange = () => {
    this.setState({ name: "John" });
  };

  handleChange2 = () => {
    this.setState({ name: "prakash" });
  };

  render() {
    return (
      <div>
        this is my class component
        <h3>{this.state.name}</h3>
        <button onClick={this.handleChange}> change me </button>
        <button onClick={this.handleChange2}>for prakash</button>
      </div>
    );
  }
}

export default Dashboard;
