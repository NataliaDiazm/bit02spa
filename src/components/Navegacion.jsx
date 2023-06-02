import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

export const Navegacion = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const scrollToCarritoCompras = () => {
    const carritoComprasSection = document.getElementById('carritocompras');
    if (carritoComprasSection) {
      carritoComprasSection.scrollIntoView({ behavior: 'smooth' });
    }
    toggleExpanded();
  };

  return (
    <nav className={`navegacion ${expanded ? '' : 'transparent'}`}>
      <button className="toggle-button" onClick={toggleExpanded}>
        {expanded ? <FaTimes /> : <FaBars />}
      </button>
      {expanded && (
        <div className='links-container'>
          <Link className='links' to='/bit02spa' >Inicio</Link>
          <Link className='links' to='/bit02spa/productos' onClick={toggleExpanded}>Productos</Link>
          <button className="links" onClick={scrollToCarritoCompras}>
            <FaShoppingCart />
          </button>
        </div>
      )}
    </nav>
  );
};

