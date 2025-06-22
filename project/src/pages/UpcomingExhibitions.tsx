import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExhibitionCard from '../components/Exhibition/ExhibitionCard';
import { getUpcomingExhibitions } from '../data/exhibitions';

const UpcomingExhibitions = () => {
  const upcomingExhibitions = getUpcomingExhibitions();
  
  return (
    <>
      <Helmet>
        <title>Upcoming Exhibitions | Nebyou Chaka</title>
        <meta name="description" content="View upcoming exhibitions featuring the artwork of Nebyou Chaka at galleries and museums worldwide." />
      </Helmet>
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-primary-900 text-white py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Upcoming Exhibitions</h1>
              <p className="text-primary-200 text-lg">
                Find where you can see my newest work and upcoming shows.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Exhibitions List */}
        <div className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link 
                to="/exhibitions" 
                className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium transition duration-300"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to All Exhibitions
              </Link>
            </div>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {upcomingExhibitions.length > 0 ? (
                upcomingExhibitions.map((exhibition) => (
                  <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
                ))
              ) : (
                <div className="text-center py-12 bg-primary-50 rounded-lg">
                  <p className="text-primary-700 mb-2">There are no upcoming exhibitions scheduled at this time.</p>
                  <p className="text-primary-600">Please check back soon for updates or subscribe to my newsletter for announcements.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingExhibitions;