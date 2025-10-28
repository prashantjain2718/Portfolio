import { useState } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="logo"><a href='#home'>PJ</a></h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
            <li className="Home"><a href='#home' onClick={toggleMenu}>Home</a></li>
            <li className="About"><a href='#about' onClick={toggleMenu}>About</a></li>
            <li className="Skills"><a href='#skills' onClick={toggleMenu}>Skills</a></li>
            <li className="Projects"><a href='#projects' onClick={toggleMenu}>Projects</a></li>
            <li className="Contact"><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
