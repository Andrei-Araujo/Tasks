import { Link } from "react-router-dom";

export const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto navbar navbar-expand-lg navbar-light">
          <li className="nav-item">
            <Link className="nav-link" to="/cadastro">
              Cadastrar Usuario
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tarefas">
              Tarefas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
