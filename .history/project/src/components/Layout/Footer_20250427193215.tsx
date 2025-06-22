import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Nebyou Chaka</h3>
            <p className="text-primary-200 mb-4 max-w-xs">
              Contemporary visual artist exploring the intersection of heritage, identity, and human experience through various mediums.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nebyoutesfaye/" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="mailto:nebyouchaka.com" className="text-primary-200 hover:text-white transition duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-200 hover:text-white transition duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-primary-200 hover:text-white transition duration-300">Exhibitions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <address className="not-italic text-primary-200">
              <p></p>
              <p>Dacula, GA 30019</p>
              <p className="mt-2">Tel: (323) 441-5191</p>
              <p>Email:nebyouchaka@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-400">
          <p>&copy; {currentYear} Nebyou Chaka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;