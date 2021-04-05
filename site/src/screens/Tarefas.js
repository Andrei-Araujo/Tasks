import React from "react";
import { Cabecalho } from "../components/Cabecalho";
import { AgrupamentoTarefas } from "../components/tarefas/Agrupamento";

export class TarefaScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <Cabecalho
          titulo="Lista de tarefas"
          subtitulo="Lista com as tarefas geradas, e onde é possível criar novas tarefas"
        />
        <AgrupamentoTarefas />
      </div>
    );
  }
}
