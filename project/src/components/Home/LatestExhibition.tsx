import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { exhibitions } from '../../data/exhibitions';

const LatestExhibition = () => {
  // Get the most recent exhibition
  const latestExhibition = [...exhibitions].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )[0];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={latestExhibition.imageUrl} 
              alt={latestExhibition.title} 
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Current Exhibition
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">{latestExhibition.title}</h2>
            <div className="flex items-center text-primary-600 mb-6">
              <Calendar size={18} className="mr-2" />
              <span>
                {formatDate(latestExhibition.startDate)} - {formatDate(latestExhibition.endDate)}
              </span>
            </div>
            <p className="text-primary-700 mb-6 leading-relaxed">
              {latestExhibition.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/exhibitions" 
                className="inline-block bg-accent-600 text-white px-6 py-3 rounded-md font-medium hover:bg-accent-700 transition duration-300"
              >
                Learn More
              </Link>
              <Link 
                to="/exhibitions/upcoming" 
                className="inline-block bg-transparent border border-primary-300 text-primary-800 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition duration-300"
              >
                Upcoming Exhibitions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestExhibition;