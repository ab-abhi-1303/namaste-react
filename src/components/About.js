import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor of parent");
  }

  componentDidMount() {
    console.log("componentDidMount of parent");
  }
  render() {
    console.log("render of parent");
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page.</p>
        {/* <User name={"Abhishek"} /> */}
        <UserClass name={"Abhishek"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is the about page.</p>
//       <User name={'Abhishek'}/>
//       <UserClass name={'Abhishek'}/>
//     </div>
//   );
// };

export default AboutClass;
