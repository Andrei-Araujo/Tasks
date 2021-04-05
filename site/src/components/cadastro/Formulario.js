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
  return (
    <div className="border-right pl-3 pr-3">
      <h3 className="border-bottom">Formulario de cadastro de Usuario</h3>
      <form>
        {/*<div className={`form-group ${!isCodigoValido ? "errorInput" : ""} row `}>*/}
        <div className={`form-group  row `}>
          <label htmlFor="nomeUsuario" className="col-sm-3 col-form-label">
            Nome Completo:
          </label>
          <div className="col-sm-6">
            <input
              type="string"
              className={`form-control`}
              /*id="codigo"
              value={codigo}
              onChange={setCursoCodigo}*/
            />
          </div>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="nascimento" className="col-sm-3 col-form-label">
            Data de nascimento:
          </label>
          <div className="col-sm-6">
            <input
              type="date"
              name="birthdate"
              placeholder="select Birth date"
            />
          </div>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email:
          </label>
          <div className="col-sm-6">
            <input type="string" className={`form-control`} />
          </div>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="senha" className="col-sm-3 col-form-label">
            Senha:
          </label>
          <div className="col-sm-6">
            <input type="string" className={`form-control`} />
          </div>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="cep" className="col-sm-3  col-form-label">
            CEP:
          </label>
          <div className="col-sm-4 mb-3">
            <input type="number" className={`form-control`} />
          </div>
          <button className="btn btn-primary ml-3 mb-3">
            Procurar endereço
          </button>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="logradouro" className="col-sm-3 col-form-label">
            Endereço:
          </label>
          <div className="col-sm-6">
            <input type="string" className={`form-control`} />
          </div>
        </div>
        <div className={`form-group  row `}>
          <label htmlFor="numeroEndereco" className="col-sm-3 col-form-label">
            Número:
          </label>
          <div className="col-sm-6">
            <input type="string" className={`form-control`} />
          </div>
        </div>
        <div className="form-group row">
          <button className="btn btn-primary ml-3 mb-3">
            Atualizar ou Adicionar
          </button>
          <button className="btn btn-secondary ml-3 mb-3" type="button">
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};
