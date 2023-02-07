import React from "react";
import { useState, useEffect } from "react";

function ListadoProductos() {
  const [listProduct, setlistProduct] = useState();

  useEffect(() => {
    fetch("http://localhost:3032/api/products/")
      .then((response) => response.json())
      .then((productosData) => {
        setlistProduct(productosData.products);
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);

  useEffect(() => {
    console.log("Se Actualiza");
  }, [listProduct]);

  console.log(listProduct);

  return (
    <div className="content-listadoProductos">
      <h1>Listado de Productos:</h1>
      <ul className="">
        {listProduct?.map((product, i) => (
          <li key={i} className="listadoProductos">
            Nombre: {product.name}
            <p>Talles: {product.talles+""}</p>
            <p>Categoria: {product.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoProductos;
