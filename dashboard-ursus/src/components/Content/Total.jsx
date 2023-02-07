import { useState, useEffect } from "react";

function Total() {
  const [totalProductos, setTotalProductos] = useState([]);
  const [totalUsuarios, setTotalUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3032/api/products")
      .then((response) => response.json())
      .then((data) => {
        setTotalProductos(data);
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:3032/api/users")
      .then((response) => response.json())
      .then((data) => {
        setTotalUsuarios(data);
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);
  
  return (
    <>
    <h1>Total:</h1>
    <div className="content-TotalProductos">
      <h2>TOTAL PRODUCTOS: {totalProductos.total}</h2>
      <h2>TOTAL USUARIOS: {totalUsuarios.total}</h2>
      <h2>TOTAL CATEGORIAS: {totalProductos.totalCategorias}</h2>
    </div>
    </>
  );
}

export default Total;
