import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Artwork } from '../../types';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="relative">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <Link 
            to={`/gallery/${artwork.id}`}
            className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-md text-primary-800 hover:text-accent-600 transition duration-300"
            aria-label="View details"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl text-primary-900 mb-2">{artwork.title}</h3>
        <p className="text-primary-600 text-sm mb-3">{artwork.medium}</p>
        <p className="font-medium text-primary-900">${artwork.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;