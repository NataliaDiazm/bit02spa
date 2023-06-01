import PropTypes from 'prop-types';

const LibroCard = ({ imagen, nombre }) => {
  return (
    <div className="libro-card">
      <img src={imagen} alt={nombre} className="libro-imagen" />
      <p className="libro-nombre">{nombre}</p>
    </div>
  );
};

LibroCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default LibroCard;

