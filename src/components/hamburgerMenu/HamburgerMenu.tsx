import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './HamburgerMenu.scss'

const HamburgerMenu = () => {
 const [visible, setVisible] = React.useState(false);
 const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
    setOpen(!open);
  }
 

  return (
    <div className='containerHamburgerMenu'>
      <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
    <ul className={visible ? 'visible hamburgerMenu' : 'notVisible'}>
        <li><button>campeggio</button></li>
        <li><button>bungalow</button></li>
        <li><button>piazzole</button></li>
        <li><button>servizi</button></li>
        <li><button>prezzi</button></li>
        <li><button>livorno</button></li>
        <li><button>contattaci</button></li>
        <div className='endLine'></div>
      </ul>
      </div>

  )
}

export default HamburgerMenu