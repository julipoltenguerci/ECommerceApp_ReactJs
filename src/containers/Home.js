import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import Item from "../components/Item";
import Contexto from "../context/Contexto";
export default function Home() {
  useEffect(() => {
    getProductos();
  }, []); //se corre una sola vez
  //lo que usamos desde useContext
  const { getProductos, productos } = useContext(Contexto);
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {productos.map((item) => (
              <Item {...item} key={item.id}></Item> //usar key para item para q no se repitan
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
