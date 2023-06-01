import "./Catalogo.css";
import "./Carrito.css";
import "./modalStyles.css";
import { useState } from "react";
import Modal from "react-modal";

export const PaginaProductos = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  /* VENTANA MODAL AL PAGAR */

  const [modalOpen, setModalOpen] = useState(false);

  const handlePagarClick = () => {
    // Realizar acciones necesarias antes de mostrar el modal
    setModalOpen(true);
  };

  const closeModal = () => {
    // Cerrar el modal
    setModalOpen(false);
    window.location.reload();
  };

  const librosDisponibles = [
    {
      id: 1,
      imagen: "./images/Libro1.webp",
      titulo: "Caraval",
      autor: "Stephanie Garber",
      precio: 40000,
    },

    {
      id: 2,
      imagen: "./images/Libro3.jpg",
      titulo: "Lupin",
      autor: "Maurice Leblanc",
      precio: 30000,
    },

    {
      id: 3,
      imagen: "./images/Libro2.jpeg",
      titulo: "Holmes",
      autor: "Artur Conan",
      precio: 45000,
    },

    {
      id: 4,
      imagen: "./images/Libro4.jpg",
      titulo: "Valkirias",
      autor: "I. Biggi",
      precio: 60000,
    },

    {
      id: 5,
      imagen: "./images/Libro5.jpg",
      titulo: "HappyPotter",
      autor: "J.K Rowling",
      precio: 50000,
    },

    {
      id: 6,
      imagen: "./images/Libro6.jpg",
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
          <button onClick={handlePagarClick}>Enviar pedido</button>

          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Pedido recibido"
            className="modal-content" // Aplica la clase CSS al contenido de la ventana modal
            overlayClassName="modal-overlay"
          >
            <h2>Pedido recibido con éxito</h2>
            <p>
              Tu pedido ha sido recibido correctamente. <br /> Te enviaremos la
              confimacion para realizar el pago via email
            </p>
            <button className="cerrar" onClick={closeModal}>Cerrar</button>
          </Modal>
        </div>
      </div>
    </>
  );
};
