import React from "react";
import { LoginUsuario } from "../components/cadastro/Login";

export class LoginScreen extends React.Component {
  render() {
    return (
      <div className="container homeScreen">
        <LoginUsuario />
      </div>
    );
  }
}
