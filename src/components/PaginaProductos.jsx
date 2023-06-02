import "./Catalogo.css";
import "./Carrito.css";
import libro1 from '../../public/libro1.webp';
import libro2 from '../../public/libro2.jpeg';
import libro3 from '../../public/libro3.jpg';
import libro4 from '../../public/libro4.jpg';
import libro5 from '../../public/libro5.jpg';
import libro6 from '../../public/libro6.jpg';
import { useState } from "react";

export const PaginaProductos = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  

  const librosDisponibles = [
    {
      id: 1,
      imagen: libro1,
      titulo: "Caraval",
      autor: "Stephanie Garber",
      precio: 40000,
    },

    {
      id: 2,
      imagen: libro3,
      titulo: "Lupin",
      autor: "Maurice Leblanc",
      precio: 30000,
    },

    {
      id: 3,
      imagen: libro2,
      titulo: "Holmes",
      autor: "Artur Conan",
      precio: 45000,
    },

    {
      id: 4,
      imagen: libro4,
      titulo: "Valkirias",
      autor: "I. Biggi",
      precio: 60000,
    },

    {
      id: 5,
      imagen: libro5,
      titulo: "HappyPotter",
      autor: "J.K Rowling",
      precio: 50000,
    },

    {
      id: 6,
      imagen: libro6,
      titulo: "Moby Dick",
      autor: "Herman Melville",
      precio: 70000,
    },
  ];

  const agregarAlCarrito = (libro) => {
    const productoExistente = carrito.find((item) => item.id === libro.id);

    if (productoExistente) {
      const nuevosProductos = carrito.map((item) =>
        item.id === libro.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevosProductos);
    } else {
      setCarrito([...carrito, { ...libro, cantidad: 1 }]);
    }

    const nuevoTotal = total + libro.precio;
    setTotal(nuevoTotal);

    console.log("Producto agregado al carrito:", libro);
  };

  const eliminarDelCarrito = (libro) => {
    const nuevosProductos = carrito.filter((item) => item.id !== libro.id);
    setCarrito(nuevosProductos);

    const cantidad = libro.cantidad;
    const precioTotal = libro.precio * cantidad;
    const nuevoTotal = total - precioTotal;
    setTotal(nuevoTotal);
  };

  const restarCantidad = (libro) => {
    const productoExistente = carrito.find((item) => item.id === libro.id);

    if (productoExistente && productoExistente.cantidad > 1) {
      const nuevosProductos = carrito.map((item) =>
        item.id === libro.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setCarrito(nuevosProductos);

      const nuevoTotal = total - libro.precio;
      setTotal(nuevoTotal);
    } else {
      eliminarDelCarrito(libro);
    }
  };

  return (
    <>
      <div className="banner-shop"></div>
      <div>
        <h2>Catálogo de Libros</h2>
        <div className="catalogo">
          {librosDisponibles.map((libro) => (
            <div key={libro.id} className="libro">
              <h3>{libro.titulo}</h3>
              <img src={libro.imagen} alt={libro.titulo} />
              <p>Autor: {libro.autor}</p>
              <p>
                Precio:{" "}
                {libro.precio.toLocaleString("es-CO", {
                  minimumFractionDigits: 0,
                })}
              </p>
              <button onClick={() => agregarAlCarrito(libro)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
        <div className="banner-shop-card"></div>
        <div id="carritocompras" className="carrito">
          <h3>Carrito de compras</h3>
          {carrito.length > 0 ? (
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  <h4>{producto.titulo}</h4>
                  <img src={producto.imagen} alt={producto.titulo} />
                  <p>Autor: {producto.autor}</p>
                  <p>Precio: ${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <button onClick={() => restarCantidad(producto)}>-</button>
                  <button onClick={() => eliminarDelCarrito(producto)}>
                    Eliminar
                  </button>
                  <button onClick={() => agregarAlCarrito(producto)}>+</button>
                  <hr />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <p className="total">
            Total: ${" "}
            {total.toLocaleString("es-CO", { minimumFractionDigits: 0 })}
          </p>
          <button>Enviar pedido</button>

        </div>
      </div>
    </>
  );
};
