import { useState, useEffect } from "react";
import {Route, Routes,} from 'react-router-dom'
import Sidebar from "../Sidebar/Sidebar";
import Total from "./Total";
import Categorias from "../Content/Categorias";
import ListadoProductos from "../Content/ListadoProductos";
import UltimoProducto from "../Content/UltimoProducto";
import "./content.css";

function Content() { 
    
  const [lastProduct, setlastProduct] = useState()

  useEffect( () => {
    fetch("http://localhost:3032/api/products/")
      .then((response) => response.json())
      .then((productosData) => {
        let productList = productosData.products.pop();
        setlastProduct(productList);
      
      })
      .catch((error) => console.log("Errores:" + error));
  }, []);
  
  useEffect(() => {console.log("Se Actualiza")}, [lastProduct]);
  

  
  return (
    <div className="content-contenido">
      <Sidebar lastProduct={lastProduct} />
      <Routes>
        <Route path="/totalProductos" element={<Total/>} />
        <Route path="/ultimoProducto/:id" element={<UltimoProducto/>} />
        <Route path="/totalProductosCategoria" element={<Categorias/>} />
        <Route path="/listadoProductos" element={<ListadoProductos/>} />
      </Routes>
    </div>
  );
}

export default Content;
