import React from "react";
//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
/*import {
  limparFormularioCurso,
  salvarCurso,
  setCursoCargaHoraria,
  setCursoCategoria,
  setCursoCodigo,
  setCursoDescricao,
  setCursoPreco,
} from "../../actions/cursos";
*/

export const FormularioUsuario = (props) => {
  const {
    nomeUsuario,
    isNomeUsuarioValido,
    setNomeUsuario,
    dataNasc,
    isDataNascValido,
    setDataNasc,
    email,
    isEmailValido,
    setEmail,
    senha,
    isSenhaValido,
    setSenha,
    cep,
    isCepValido,
    setCep,

    endereco,
    numero,
    isEnderecoValido,
    isNumeroValido,
    setEndereco,
    setNumero,
    isFormValido,
    cpf,
    isCpfValido,
    setCpf,
    salvar,
  } = props;

  return (
    <div className="border-right pl-3 pr-3">
      <h3 className="border-bottom">Formulario de cadastro de Usuario</h3>
      <form>
        <div
          className={`form-group ${
            !isNomeUsuarioValido ? "errorInput" : ""
          } row `}
        >
          <label htmlFor="nomeUsuario" className="col-sm-3 col-form-label">
            Nome Completo*:
          </label>
          <div className="col-sm-6">
            <input
              type="string"
              className={`form-control`}
              id="nomeUsuario"
              value={nomeUsuario}
              onChange={setNomeUsuario}
            />
          </div>
        </div>
        <div className={`form-group ${!isCpfValido ? "errorInput" : ""} row `}>
          <label htmlFor="cpfUsuario" className="col-sm-3 col-form-label">
            CPF:
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className={`form-control`}
              id="cpfUsuario"
              placeholder="12345678901"
              value={cpf}
              onChange={setCpf}
              //value={nomeUsuario}
              //onChange={setNomeUsuario}
            />
          </div>
        </div>
        <div
          className={`form-group ${!isDataNascValido ? "errorInput" : ""} row `}
        >
          <label htmlFor="nascimento" className="col-sm-3 col-form-label">
            Data de nascimento*:
          </label>
          <div className="col-sm-6">
            <input
              type="date"
              value={dataNasc}
              onChange={setDataNasc}
              id="dataNasc"
            />
          </div>
        </div>
        <div
          className={`form-group ${!isEmailValido ? "errorInput" : ""} row `}
        >
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email*:
          </label>
          <div className="col-sm-6">
            <input
              type="string"
              className={`form-control`}
              value={email}
              onChange={setEmail}
              id="email"
            />
          </div>
        </div>
        <div
          className={`form-group ${!isSenhaValido ? "errorInput" : ""} row `}
        >
          <label htmlFor="senha" className="col-sm-3 col-form-label">
            Senha*:
          </label>
          <div className="col-sm-6">
            <input
              type="password"
              className={`form-control`}
              value={senha}
              onChange={setSenha}
              id="senha"
            />
          </div>
        </div>
        <div className={`form-group ${!isCepValido ? "" : ""} row `}>
          <label htmlFor="cep" className="col-sm-3  col-form-label">
            CEP:
          </label>
          <div className="col-sm-6 mb-3">
            <input
              type="number"
              className={`form-control`}
              placeholder="12345678"
              value={cep}
              onChange={setCep}
              id="cep"
            />
          </div>
        </div>
        <div className={`form-group ${!isEnderecoValido ? "" : ""} row `}>
          <label htmlFor="logradouro" className="col-sm-3 col-form-label">
            Endereço:
          </label>
          <div className="col-sm-6">
            <input
              type="string"
              className={`form-control`}
              value={endereco}
              onChange={setEndereco}
              id="endereco"
            />
          </div>
        </div>
        <div className={`form-group ${!isNumeroValido ? "" : ""} row `}>
          <label htmlFor="numeroEndereco" className="col-sm-3 col-form-label">
            Número:
          </label>
          <div className="col-sm-6">
            <input
              type="string"
              className={`form-control`}
              value={numero}
              onChange={setNumero}
              id="numero"
            />
          </div>
        </div>
        <div className="form-group row">
          <button
            className="btn btn-primary ml-3 mb-3"
            disabled={!isFormValido}
            onClick={salvar}
          >
            Adicionar
          </button>
          <button className="btn btn-secondary ml-3 mb-3" type="button">
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};
