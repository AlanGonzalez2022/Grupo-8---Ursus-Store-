import React from "react";
import { useState, useEffect } from "react";

function Categorias() {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    fetch("http://localhost:3032/api/products/")
      .then((response) => response.json())
      .then((categoriaList) => {
        setCategorias(categoriaList.countByCategory);
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);

  useEffect(() => {
    console.log("Se Actualiza");
  }, [categorias]);

  console.log(categorias);

  return (
  <>
    <h1>Total de Categorias:</h1>
    <div className="content-categorias">
      <h2>Remeras:{categorias?.remeras}</h2>
      <h2>Shorts:{categorias?.shorts}</h2>
      <h2>Calzados:{categorias?.calzados}</h2>
      <h2>Vestidos:{categorias?.vestidos}</h2>
      <h2>Camisas:{categorias?.camisas}</h2>
      <h2>Pantalones:{categorias?.pantalones}</h2>
    </div>
  </>
  );
}

export default Categorias;
