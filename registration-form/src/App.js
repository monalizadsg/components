import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
