import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About = () => {
//   return (
//     <div>
//       <h1> About us page</h1>
//       <h2> Hi this is a food delivering app.</h2>
//       {/* <User
//         name={"Harshitha reddy"}
//         location={"functional component"}
//         email={"h@gmail.com"}
//       /> */}
//       <UserClass
//         name={"Harshitha reddy"}
//         location={"class component"}
//         email={"h@gmail.com"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "dummy",
      },
    };
    //console.log("Parent Constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/harshithajaggavarapu"
    );
    const json = await data.json();
    this.setState({
      userData: json,
    });
    //console.log("Parent component mounted");
  }
  render() {
    //console.log("parent render");
    const { login, location, html_url, avatar_url } = this.state.userData;
    return (
      <div>
        <h1> About us page</h1>
        <h2> Hi this is a food delivering app.</h2>
        <UserClass
          name={login}
          location={location}
          email={html_url}
          image={avatar_url}
        />
      </div>
    );
  }
}
export default About;
