import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/artworks/Untitled #1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative container h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Exploring Identity Through Art
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 mb-8">
            Contemporary expressions through painting, sculpture, and mixed media
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link 
              to="/gallery" 
              className="inline-block bg-white text-primary-900 px-6 py-3 border border-transparent rounded-md text-base font-medium hover:bg-primary-50 transition duration-300"
            >
              Explore Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;