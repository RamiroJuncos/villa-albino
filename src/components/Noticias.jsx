import React from 'react';

const Noticias = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Sección de Noticias/Actualizaciones</h2>
      {/* Aquí irán las noticias */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Últimas noticias:</h3>
        {/* Ejemplo de una noticia */}
        <div className="border-b border-gray-200 py-4">
          <h4 className="text-lg font-medium mb-2">Nuevo fichaje: Nombre del jugador</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tortor vel odio rhoncus, nec rutrum metus ultrices.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">Leer más</a>
        </div>
        {/* Otras noticias similares */}
      </div>
    </div>
  );
};

export default Noticias;
