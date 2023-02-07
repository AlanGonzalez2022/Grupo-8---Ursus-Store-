import React from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {BrowserRouter} from 'react-router-dom'
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
