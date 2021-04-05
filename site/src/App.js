import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import { CadastroScreen } from "./screens/CadastroUsuario";
import { HomeScreen } from "./screens/Home";
import { TarefaScreen } from "./screens/Tarefas";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Switch>
          <Route path="/cadastro" component={CadastroScreen} />
          <Route path="/tarefas" component={TarefaScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    );
  }
}
