import React from 'react';

interface PurposeSectionProps {
  id: string;
}

export default function PurposeSection({ id }: PurposeSectionProps) {
  return (
    <div id={id} className="flex flex-col items-center px-4 md:px-8 gap-4 md:gap-8 py-24 lg:py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">Nuestro Propósito</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-800">Informar y Educar</h3>
          <p className="text-lg text-gray-700 mb-4">Proporcionar información accesible y actualizada sobre temas ambientales como el cambio climático, la biodiversidad, la contaminación y la conservación de recursos.</p>
          <p className="text-lg text-gray-700">Ofrecer artículos, videos, infografías y recursos educativos que expliquen conceptos clave y soluciones prácticas para problemas ambientales.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-800">Promover Acciones Sostenibles</h3>
          <p className="text-lg text-gray-700 mb-4">Compartir consejos prácticos y guías sobre cómo las personas pueden reducir su huella ecológica en su vida diaria, como el reciclaje, la reducción del uso de plásticos, el ahorro de energía y el consumo responsable.</p>
          <p className="text-lg text-gray-700">Presentar historias de éxito y ejemplos de comunidades, empresas e individuos que estén implementando prácticas sostenibles.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-800">Facilitar la Participación Comunitaria</h3>
          <p className="text-lg text-gray-700">Crear una plataforma donde los usuarios puedan unirse a iniciativas y proyectos locales de conservación y sostenibilidad.</p>
        </div>
      </div>
    </div>
  );
};

