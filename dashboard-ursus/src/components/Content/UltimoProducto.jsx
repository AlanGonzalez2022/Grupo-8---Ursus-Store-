import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UltimoProducto() {
  const [lastProduct, setlastProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3032/api/products/" + id)
      .then((response) => response.json())
      .then((productoData) => {
        console.log(productoData);
        setlastProduct(productoData);
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);

  console.log(lastProduct);

  useEffect(() => {
    console.log("Se actualiza componente");
  }, [lastProduct]);

  useEffect(() => {
    return console.log("Se desarma componente");
  }, []);

  return (
  <>
    <h1>Ultimo Producto:</h1>
    <div className="content-UltimoProducto">
      <img src={lastProduct?.imagen} alt="" width={"200px"} />
      <h2>{lastProduct?.nombre}</h2>
      <div className="content-info">
        <h4>Categoria: {lastProduct?.categoria} </h4>
        <h4>Talle: {lastProduct?.talle}</h4>
        <h4>Genero: {lastProduct?.genero}</h4>
        <h4>Precio: {lastProduct?.precio}</h4>
      </div>
    </div>
  </>
  );
}

export default UltimoProducto;
