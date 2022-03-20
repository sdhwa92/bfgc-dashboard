import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">BFGC Dashboard!!!</h1>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default App;
