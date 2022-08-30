import React from "react";
import iconoCarrito from "../assets/statics/carrito.png";
import iconoVolver from "../assets/statics/volver.png";
export default function Header() {
  return (
    <>
      <a href="carrito">
        <img src={iconoCarrito} alt="" className="carritou" />
      </a>
      <a href="/">
        <img src={iconoVolver} alt="" className="volver" />
      </a>

      <h1 className="titulo">
        Clefairy <br />
        Stickers Store
      </h1>
    </>
  );
}
