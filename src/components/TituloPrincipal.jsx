import React, { useState, useEffect } from "react";
import Foto1 from "../assets/Foto-Titulo-1.jpg";
import Foto2 from "../assets/Foto-Titulo-2.jpg";
import Foto3 from "../assets/Foto-Titulo-3.jpg";

const imagenes = [Foto1, Foto2, Foto3]; // Array con las URLs de las imágenes

const TituloPrincipal = () => {
  const [indiceImagen, setIndiceImagen] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avanzar al siguiente índice de imagen
      setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div className="hero min-h-screen border border-gray-300 shadow-md rounded-md p-4" style={{backgroundImage: `url(${imagenes[indiceImagen]})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Villa Albino</h1>
          <p className="mb-5">Club de Futbol oriundo de la ciudad de Ensenada</p>
          <button className="btn btn-primary">Más Información</button>
        </div>
      </div>
    </div>
  );
};

export default TituloPrincipal;
