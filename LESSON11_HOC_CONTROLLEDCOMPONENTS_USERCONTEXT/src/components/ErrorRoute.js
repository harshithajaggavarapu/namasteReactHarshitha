import { useRouteError } from "react-router-dom";
const ErrorRoute = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> Oops!!!</h1>
      <h2> There's something wrong!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorRoute;
