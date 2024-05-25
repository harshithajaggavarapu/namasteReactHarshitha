import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-box">
      <h1>Count ={count}</h1>
      <h1>Count2 ={count2}</h1>
      <h2> Name: {props.name} </h2>
      <h3> Location:{props.location}</h3>
      <h3> Email:{props.email}</h3>
    </div>
  );
};

export default User;
