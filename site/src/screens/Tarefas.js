import React from "react";
import { AgrupamentoTarefas } from "../components/tarefas/Agrupamento";

export class TarefaScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <AgrupamentoTarefas />
      </div>
    );
  }
}
