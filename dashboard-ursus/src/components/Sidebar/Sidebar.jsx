import React, { useEffect, useRef } from "react";
import "../Sidebar/sideBar.css";
import {Link} from 'react-router-dom'


function Sidebar({lastProduct}) {

  useEffect(() => {

  }, [lastProduct])
  
  
  const mySidenav = useRef();

  const openNav = () => {
    mySidenav.current.style.width = "250px";
  };

  const closeNav = () => {
    mySidenav.current.style.width = "0";
  };

  return (
    <>
      <p onClick={openNav} className="tresLineas">☰</p>
      <div ref={mySidenav} id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>
          X
        </a>
        <Link to="/totalProductos">Total</Link>
        <Link to={"/ultimoProducto/"+lastProduct?.id}>Último producto creado</Link>
        <Link to="/totalProductosCategoria">Total de productos por categoria</Link>
        <Link to="/listadoProductos">Listado de producto</Link>   
      </div>
    </>
  );
}

export default Sidebar;
