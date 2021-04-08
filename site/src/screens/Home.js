import React from "react";
import { FormularioUsuario } from "../components/cadastro/Formulario";

export class HomeScreen extends React.Component {
  render() {
    return (
      <div className="container homeScreen">
        <FormularioUsuario isPublic={true} />
      </div>
    );
  }
}
