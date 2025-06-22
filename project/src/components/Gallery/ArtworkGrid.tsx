import { useState } from 'react';
import { motion } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import { artworks } from '../../data/artworks';

// Define categories based on unique mediums in artworks
const getCategories = () => {
  const mediums = artworks.map(artwork => artwork.medium);
  const uniqueMediums = [...new Set(mediums)];
  return ['All', ...uniqueMediums];
};

const ArtworkGrid = () => {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.medium === activeCategory);
  
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              activeCategory === category 
                ? 'bg-accent-600 text-white' 
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </motion.div>
      
      {filteredArtworks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-primary-600">No artworks found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ArtworkGrid;