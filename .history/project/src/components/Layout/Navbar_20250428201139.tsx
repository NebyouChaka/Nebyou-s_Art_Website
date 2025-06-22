import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const activeClass = "text-accent-700 font-medium";
  const navbarClass = isScrolled 
    ? "fixed w-full bg-white shadow-md transition-all duration-400 z-50" 
    : "fixed w-full bg-transparent transition-all duration-400 z-50";

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="font-serif text-2xl font-medium">Nebyou Chaka</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-800 hover:text-accent-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : "text-primary-600 hover:text-accent-700 transition duration-300"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : "text-primary-600 hover:text-accent-700 transition duration-300"}>
              About
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : "text-primary-600 hover:text-accent-700 transition duration-300"}>
              Gallery
            </NavLink>
            <NavLink to="/exhibitions" className={({ isActive }) => isActive ? activeClass : "text-primary-600 hover:text-accent-700 transition duration-300"}>
              Exhibitions
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : "text-primary-00 hover:text-accent-700 transition duration-300"}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden bg-white shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent-700' : 'text-primary-800 hover:text-accent-700'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent-700' : 'text-primary-800 hover:text-accent-700'}`
            }>
              About
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent-700' : 'text-primary-800 hover:text-accent-700'}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/exhibitions" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent-700' : 'text-primary-800 hover:text-accent-700'}`
            }>
              Exhibitions
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-accent-700' : 'text-primary-800 hover:text-accent-700'}`
            }>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;