import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredArtworks } from '../../data/artworks';

const FeaturedWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">Featured Works</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            A selection of recent artworks that showcase my exploration of heritage, identity, and the human experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/gallery/${artwork.id}`} className="block overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={artwork.imageUrl} 
                    alt={artwork.title} 
                    className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-primary-900">{artwork.title}</h3>
                  <p className="text-primary-600 text-sm">{artwork.medium}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
          >
            View All Works
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;