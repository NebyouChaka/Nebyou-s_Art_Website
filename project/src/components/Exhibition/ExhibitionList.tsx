import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExhibitionCard from './ExhibitionCard';
import { exhibitions } from '../../data/exhibitions';

type ExhibitionType = 'all' | 'solo' | 'group';

const ExhibitionList = () => {
  const [activeType, setActiveType] = useState<ExhibitionType>('all');
  
  const filteredExhibitions = activeType === 'all' 
    ? exhibitions 
    : exhibitions.filter(exhibition => exhibition.type === activeType);
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveType('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${
              activeType === 'all' 
                ? 'bg-accent-600 text-white' 
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            All Exhibitions
          </button>
          <button
            onClick={() => setActiveType('solo')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${
              activeType === 'solo' 
                ? 'bg-accent-600 text-white' 
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Solo Shows
          </button>
          <button
            onClick={() => setActiveType('group')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${
              activeType === 'group' 
                ? 'bg-accent-600 text-white' 
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Group Shows
          </button>
        </div>
        
        <Link 
          to="/exhibitions/upcoming"
          className="inline-block bg-primary-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-800 transition duration-300"
        >
          Upcoming Exhibitions
        </Link>
      </div>
      
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredExhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </motion.div>
      
      {filteredExhibitions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-primary-600">No exhibitions found.</p>
        </div>
      )}
    </div>
  );
};

export default ExhibitionList;