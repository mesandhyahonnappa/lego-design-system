import React, { useState } from "react";
import "@sandhyahonnappa/lego-design-system/css/variables.css";
import {
  LegoButton,
  LegoTextfield,
} from "@sandhyahonnappa/lego-design-system-react";
import "./App.css";
import { LegoTextfieldCustomEvent } from "@sandhyahonnappa/lego-design-system";
import { InputChangeEventDetail } from "@sandhyahonnappa/lego-design-system/dist/types/components/lego-textfield/lego-textfield-interface";

function App() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChange = (
    event: LegoTextfieldCustomEvent<InputChangeEventDetail>
  ) => {
    console.log(event);
    setFirstName(event.detail.value || "");
  };

  const onLogin = () => {
    alert(`User Name: ${firstName}, Password: ${password}`);
  };

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <h3>Login</h3>
        </div>
        <div className="row">
          <LegoTextfield
            onLegoBlur={() => console.log("Textfield Blurred")}
            onLegoInput={(event) => console.log(event)}
            onLegoChange={onFirstNameChange}
            value={firstName}
            placeholder="User Name"
          ></LegoTextfield>
        </div>
        <div className="row">
          <LegoTextfield
            placeholder="Password"
            type="password"
            onLegoChange={(event: any) => setPassword(event.detail.value)}
            value={password}
          ></LegoTextfield>
        </div>
        <div className="row align-right row-action ">
          <LegoButton onClick={onLogin}>Log In</LegoButton>
        </div>
        <div className="row">
          First Name : <strong>{firstName}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
