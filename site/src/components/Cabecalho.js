// nao está sendo utilizado mas é uma opcao para se implementar, conforme a necessidade

export const Cabecalho = (props) => (
  <header className="pb-2 mt-4 mb-2 border-bottom">
    <h2>
      <strong className="mr-2">{props.titulo}</strong>-
      <small className="ml-2">{props.subtitulo}</small>
    </h2>
  </header>
);
