import axios from "axios";
import React from "react";
import { FormularioUsuario } from "./Formulario";

const URL = "http://localhost:3201/api/usuario/";
const URLcep = "viacep.com.br/ws/";

export class FuncoesFormUsuario extends React.Component {
  initialState = {
    cpf: "",
    isCpfValido: false,
    cep: "",
    isCepValido: false,
    endereco: "",
    isEnderecoValido: false,
    numero: null,
    isNumeroValido: false,
    _idUsuario: "",
    dataNasc: "",
    isDataNascValido: false,
    nomeUsuario: "",
    isNomeUsuarioValido: false,
    email: "",
    isEmailValido: false,
    senha: "",
    isSenhaValido: false,
  };

  state = {
    usuario: [],
    ...this.initialState,
  };

  setNomeUsuario(evento) {
    const value = evento?.target?.value;
    console.log(value);
    if (!value || value.length < 3) {
      console.log(value);
      this.setState({ isNomeUsuarioValido: false });
    } else {
      this.setState({ isNomeUsuarioValido: true });
    }

    this.setState({ nomeUsuario: value });
  }

  setDataNasc(evento) {
    const value = evento?.target?.value;
    console.log(value);
    const valueAno = parseInt(value.substring(0, 4));
    console.log(valueAno);
    const valueMes = parseInt(value.substring(5, 7));
    const valueDia = parseInt(value.substring(8, 10));

    const hoje = new Date();
    const hojeAno = hoje.getFullYear();
    console.log(hojeAno);
    const hojeMes = hoje.getMonth();
    const hojeDia = hoje.getDate();
    if (
      !value ||
      valueAno + 12 > hojeAno ||
      (valueAno + 12 == hojeAno && valueMes > hojeMes) ||
      (valueAno + 12 == hojeAno && valueMes == hojeMes && valueDia > hojeDia)
    ) {
      this.setState({ isDataNascValido: false });
    } else {
      this.setState({ isDataNascValido: true });
    }

    this.setState({ dataNasc: value });
  }

  setEmail(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 5) {
      console.log(value);
      this.setState({ isEmailValido: false });
    } else {
      this.setState({ isEmailValido: true });
    }

    this.setState({ email: value });
  }

  setSenha(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 5) {
      console.log(value);
      this.setState({ isSenhaValido: false });
    } else {
      this.setState({ isSenhaValido: true });
    }

    this.setState({ senha: value });
  }

  setCep(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 8 || value.length > 8) {
      this.setState({ isCepValido: false });
    } else {
      this.setState({ isCepValido: true });
    }

    this.setState({ cep: value });
    this.usaCep();
  }

  /*setCep(evento) {
    const getGiHubUserWithAxios = async () => {
      const response = await axios.get("viacep.com.br/ws/01311200/json/");
      //setUserData(response.data);
      console.log(response.data);
    };
  }*/

  usaCep() {
    const getGiHubUserWithAxios = async () => {
      console.log("a");
      const response = await axios.get("viacep.com.br/ws/01311200/json/");
      console.log("a");
      //setUserData(response.data);
      console.log(response.data);
    };
  }

  render() {
    const {
      nomeUsuario,
      isNomeUsuarioValido,
      usuario,
      cpf,
      isCpfValido,
      cep,
      isCepValido,
      endereco,
      isEnderecoValido,
      numero,
      isNumeroValido,
      _idUsuario,
      dataNasc,
      isDataNascValido,

      email,
      isEmailValido,
      senha,
      isSenhaValido,
    } = this.state;

    return (
      <div className="row border-bottom">
        <FormularioUsuario
          nomeUsuario={nomeUsuario}
          isNomeUsuarioValido={isNomeUsuarioValido}
          setNomeUsuario={this.setNomeUsuario.bind(this)}
          dataNasc={dataNasc}
          setDataNasc={this.setDataNasc.bind(this)}
          isDataNascValido={isDataNascValido}
          email={email}
          isEmailValido={isEmailValido}
          setEmail={this.setEmail.bind(this)}
          senha={senha}
          isSenhaValido={isSenhaValido}
          setSenha={this.setSenha.bind(this)}
          cep={cep}
          isCepValido={isCepValido}
          setCep={this.setCep.bind(this)}
          usaCep={this.usaCep(cep)}
          endereco={endereco}
          numero={numero}
        />
      </div>
    );
  }
}
