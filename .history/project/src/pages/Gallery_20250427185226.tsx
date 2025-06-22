import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ArtworkGrid from '../components/Gallery/ArtworkGrid';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Nebyou Chaka</title>
        <meta name="description" content="Explore Nebyou Chaka's gallery of contemporary artworks, including paintings, sculptures, and mixed media pieces." />
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
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Artwork Gallery</h1>
              <p className="text-primary-200 text-lg">
                Browse through a collection of paintings, sculptures, and mixed media works that explore themes of heritage, identity, and human experience.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="py-16 bg-white">
          <div className="container">
            <ArtworkGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;