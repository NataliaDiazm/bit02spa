import LibroCard from "./LibroCard";
import './Inicio.css';

export const PaginaInicio = () => {
  const libros = [
    { id: 1, nombre: "Caraval", imagen: "/libro2.jpeg" },
    { id: 2, nombre: "Holmes", imagen: "/Libro2.jpeg" },
    { id: 3, nombre: "Lupin", imagen: "/Libro3.jpg" },
  ];

  return (
    <>
      <div className="banner-home"></div>
      <div className="container-main">
        <div className="content-main">
          <h1>Bienvenidos a nuestra librería en línea</h1>
          <p>&quot; El lugar perfecto para los amantes de los libros &quot;</p>
        </div>
      </div>
      
      <div className="info-container">
      <h3>Títulos más vendidos del mes</h3>
        <div className="info-content">
          {libros.map((libro) => (
            <LibroCard
              key={libro.id}
              imagen={libro.imagen}
              nombre={libro.nombre}
            />
          ))}
        </div>
      </div>
      <div className="about-container">
        <h2>¿Por qué elegirnos?</h2>
        <div className="about-content">
          <p>
            Nos enorgullece ofrecer una experiencia de compra que combina tu
            pasión por la lectura con un compromiso con el medio ambiente. Cada
            libro que adquieres en nuestra plataforma contribuye a iniciativas
            sostenibles. Trabajamos de la mano con editoriales y proveedores
            comprometidos con la conservación y el uso responsable de los
            recursos naturales. Únete a nosotros y descubre cómo tus lecturas
            favoritas pueden ayudar a construir un mundo más verde. ¡Explora,
            inspira y protege el planeta mientras disfrutas de la magia de la
            lectura!
          </p>
        </div>
      </div>
      <div className="llamado-container">
        <h2>Te envitamos a conocer nuestra sección de productos</h2>
      </div>
    </>
  );
};
