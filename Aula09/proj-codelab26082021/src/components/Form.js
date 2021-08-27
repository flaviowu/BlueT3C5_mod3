import React from "react";
import "./Form.css";

export default function Form() {
  const handleSubmit = () => {
    return;
  };

  return (
    <div className="form-adm">
      <h3>Cadastro</h3>
      <form name="cad-adm">
        <input
          type="text"
          name="titulo"
          placeholder="Digite o Título do Jogo"
        />
        <input type="text" name="ano" placeholder="Digite o ano do Jogo" />
        <input
          type="text"
          name="img-url"
          placeholder="Digite a URL da imagem"
        />
        <button type="submit" onClick={handleSubmit}>
          Adicionar Jogo
        </button>
      </form>
    </div>
  );
}
