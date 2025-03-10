import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Delhi",
      },
    };
    console.log("constructor of child");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ab-abhi-1303");
    const userData = await data.json();
    this.setState({ userInfo: (userData) });
    console.log("componentDidMount of child" + JSON.stringify(userData));
  }
  render() {
    const {name, location} = this.state.userInfo;
    console.log("render of child");
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          CLick Me to add
        </button>
        <h1>User Profile</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <p>This is the end of UserProfile component.</p>
      </div>
    );
  }
}

export default UserClass;
