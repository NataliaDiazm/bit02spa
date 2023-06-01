import PropTypes from 'prop-types';

const CarritoCompras = ({ carrito }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.map((libro) => (
        <p key={libro.id}>{libro.titulo}</p>
      ))}
    </div>
  );
};

CarritoCompras.propTypes = {
  carrito: PropTypes.array.isRequired,
};





export default CarritoCompras;  









