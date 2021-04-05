import React from "react";
import { Cabecalho } from "../components/Cabecalho";

export class HomeScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <Cabecalho titulo="Home" subtitulo="Seja bem vindo" />
      </div>
    );
  }
}
