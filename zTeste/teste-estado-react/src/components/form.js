import React, { useState, useEffect } from "react";

export default function Formulario(props) {
  const [palavra, setPalavra] = useState("");
  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    setPalavra("")
  }, [contador]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setContador(contador + 1);
    props.onSubmit(palavra);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="digite algo"
        defaultValue={palavra}
        onChange={(e) => setPalavra(e.target.value)}
      />
      <button type="submit">TESTAR {contador}</button>
    </form>
  );
}
