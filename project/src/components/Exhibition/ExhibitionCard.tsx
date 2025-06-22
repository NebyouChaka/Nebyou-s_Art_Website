import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Exhibition } from '../../types';

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

const ExhibitionCard = ({ exhibition }: ExhibitionCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  
  const today = new Date();
  const startDate = new Date(exhibition.startDate);
  const endDate = new Date(exhibition.endDate);
  
  const isUpcoming = startDate > today;
  const isPast = endDate < today;
  const isCurrent = !isUpcoming && !isPast;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="md:w-1/3">
        <img 
          src={exhibition.imageUrl} 
          alt={exhibition.title} 
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      
      <div className="p-6 md:w-2/3">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            exhibition.type === 'solo' 
              ? 'bg-accent-100 text-accent-800' 
              : 'bg-primary-100 text-primary-800'
          }`}>
            {exhibition.type === 'solo' ? 'Solo Exhibition' : 'Group Exhibition'}
          </span>
          
          {isCurrent && (
            <span className="inline-block bg-success-50 text-success-700 px-3 py-1 rounded-full text-xs font-medium">
              Current
            </span>
          )}
          
          {isUpcoming && (
            <span className="inline-block bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
              Upcoming
            </span>
          )}
        </div>
        
        <h3 className="font-serif text-2xl text-primary-900 mb-2">{exhibition.title}</h3>
        
        <div className="flex flex-col sm:flex-row gap-4 text-primary-600 mb-3">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 flex-shrink-0" />
            <span className="text-sm">
              {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            <span className="text-sm">{exhibition.location}</span>
          </div>
        </div>
        
        <p className="text-primary-700 mb-4 leading-relaxed">
          {exhibition.description}
        </p>
        
        {exhibition.url && (
          <a 
            href={exhibition.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-200 transition duration-300"
          >
            Exhibition Details
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ExhibitionCard;