function HomePage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-zinc-700 rounded-md">
      {/* Contenedor del contenido principal */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">
          Bienvenido a tu Agenda Virtual
        </h1>
        <p className="text-lg text-white mb-8 text-center">
          Organiza tu vida de manera eficiente con nuestra plataforma.
        </p>

        <div className="bg-zinc-600 rounded-lg shadow-lg p-8 mb-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Actividades Importantes</h2>
          <ul>
            <li className="mb-2">Completar presentación para el trabajo</li>
            <li className="mb-2">Comprar ingredientes para la cena</li>
            <li className="mb-2">Estudiar para el examen de matemáticas</li>
          </ul>
        </div>
        <div className="bg-zinc-600 rounded-lg shadow-lg p-8 mb-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Actividades para no olvidar</h2>
          <p>Realizar ejercicio</p>
          <p>Leer</p>
          <p>Comer sanamente</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
