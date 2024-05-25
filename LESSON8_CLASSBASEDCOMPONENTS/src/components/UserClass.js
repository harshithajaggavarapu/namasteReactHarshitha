import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child constructor");
  }
  componentDidMount() {
    console.log("Child component mounted");
  }
  render() {
    console.log("Child render");
    const { count, count2 } = this.state;
    return (
      <div className="user-box">
        <div className="counter">
          <h2>count ={count}</h2>
          <button
            className="btn-counter"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment count
          </button>
        </div>
        <img className="profile-image" src={this.props.image}></img>
        <h2> Name: {this.props.name} </h2>
        <h3> Location:{this.props.location}</h3>
        <h3> Email:{this.props.email}</h3>
      </div>
    );
  }
}

export default UserClass;
