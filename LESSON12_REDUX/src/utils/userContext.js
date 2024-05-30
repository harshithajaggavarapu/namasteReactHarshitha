import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "dummy data",
});

export default userContext;
