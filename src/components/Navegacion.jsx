import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navegacion = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navegacion ${expanded ? '' : 'transparent'}`}>
      <button className="toggle-button" onClick={toggleExpanded}>
        {expanded ? <FaTimes /> : <FaBars />}
      </button>
      {expanded && (
        <div className='links-container'>
          <Link className='links' to='/' onClick={toggleExpanded}>Inicio</Link>
          <Link className='links' to='/productos' onClick={toggleExpanded}>Productos</Link>
          <Link className='links' to='/compras' onClick={toggleExpanded}>Carrito de compras</Link>
        </div>
      )}
    </nav>
  );
};

