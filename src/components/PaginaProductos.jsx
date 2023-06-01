import './Catalogo.css';


export const PaginaProductos = () => {
  const librosDisponibles = [
    {
      id: 1,
      imagen: '/public/images/Libro1.webp',
      titulo: 'Libro 1',
      autor: 'Nombre autor',
      precio: 10.000
    },
    {
      id: 2,
      imagen: '/public/images/Libro3.jpg',
      titulo: 'Libro 2',
      autor: 'Nombre autor',
      precio: 10.000
    },

    {
      id: 2,
      imagen: '/public/images/Libro3.jpg',
      titulo: 'Libro 2',
      autor: 'Nombre autor',
      precio: 10.000
    },

    {
      id: 2,
      imagen: '/public/images/Libro3.jpg',
      titulo: 'Libro 2',
      autor: 'Nombre autor',
      precio: 10.000
    },

    {
      id: 2,
      imagen: '/public/images/Libro3.jpg',
      titulo: 'Libro 2',
      autor: 'Nombre autor',
      precio: 10.000
    },

    {
      id: 2,
      imagen: '/public/images/Libro3.jpg',
      titulo: 'Libro 2',
      autor: 'Nombre autor',
      precio: 10.000
    },
    
  ];

  return (
    <div>
      <h2>Catálogo de Libros</h2>
      <div className="catalogo">
        {librosDisponibles.map(libro => (
          <div key={libro.id} className="libro">
            <h3>{libro.titulo}</h3>
            <img src={libro.imagen} alt={libro.titulo} />
            <p>Autor: {libro.autor}</p>
            <p>Precio: ${libro.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};
















