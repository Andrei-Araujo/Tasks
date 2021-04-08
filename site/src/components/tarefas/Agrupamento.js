import React from "react";
import { FormularioTarefas } from "./Formulario";
import { ListagemTarefas } from "./Listagem";

export class AgrupamentoTarefas extends React.Component {
  render() {
    return (
      <div className="row border-bottom">
        <div className="col-md-4">
          <FormularioTarefas />
        </div>
        <div className="col-md-8">
          <ListagemTarefas />
        </div>
      </div>
    );
  }
}
