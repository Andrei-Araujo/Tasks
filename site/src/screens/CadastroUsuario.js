import React from "react";
import { Cabecalho } from "../components/Cabecalho";
import { FormularioUsuario } from "../components/cadastro/Formulario";

export class CadastroScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <Cabecalho
          titulo="Cadastro de Usuário"
          subtitulo="Campos marcados com * são obrigatórios"
        />
        <FormularioUsuario />
      </div>
    );
  }
}
