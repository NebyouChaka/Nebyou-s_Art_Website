import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ExhibitionList from '../components/Exhibition/ExhibitionList';

const Exhibitions = () => {
  return (
    <>
      <Helmet>
        <title>Exhibitions | Nebyou Chaka</title>
        <meta name="description" content="View past, current, and upcoming exhibitions featuring the artwork of Nebyou Chaka at galleries and museums worldwide." />
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
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Exhibitions</h1>
              <p className="text-primary-200 text-lg">
                Explore past, current, and upcoming exhibitions featuring my work at galleries and museums around the world.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Exhibitions List */}
        <div className="py-16 bg-white">
          <div className="container">
            <ExhibitionList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibitions;