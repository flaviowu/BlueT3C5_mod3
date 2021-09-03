function model(filme) {
  if (
    filme.nome.length >= 1 &&
    filme.urlPoster !== "" &&
    filme.sinopse.length >= 10 &&
    filme.duracao.length >= 8
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  model,
};
