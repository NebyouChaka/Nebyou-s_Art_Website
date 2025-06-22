import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Award, Book } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Nebyou Chaka</title>
        <meta name="description" content="Learn about visual artist Nebyou Chaka, his background, artistic philosophy, and creative process." />
      </Helmet>
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-primary-900 text-white py-16 md:py-24">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-center"
            >
              About Nebyou Chaka
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto text-center text-primary-200"
            >
              Contemporary artist exploring the boundaries between heritage, identity, and expression
            </motion.p>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Nebyou Chaka portrait" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-serif text-3xl text-primary-900 mb-6">Biography</h2>
                <div className="prose prose-lg text-primary-700 max-w-none">
                  <p>
                    Born in Addis Ababa, Ethiopia and raised between East Africa and North America, Nebyou Chaka's work reflects the cultural dualities of his upbringing. After earning his MFA from the Rhode Island School of Design in 2015, he established his studio practice in San Francisco.
                  </p>
                  <p>
                    Chaka's work explores the intersection of cultural identity and personal narrative, often incorporating traditional patterns and symbols with contemporary abstract elements. His paintings and mixed media works invite viewers to contemplate the complex layers of identity formation in an increasingly globalized world.
                  </p>
                  <p>
                    His artwork has been exhibited internationally, with solo exhibitions in San Francisco, New York, and Addis Ababa. His work is held in several private and public collections, including the San Francisco Museum of Modern Art and the National Museum of Ethiopia.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-accent-600 mr-2" />
                    <span className="text-primary-700">Practicing since 2001</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={20} className="text-accent-600 mr-2" />
                    <span className="text-primary-700">12+ International Awards</span>
                  </div>
                  <div className="flex items-center">
                    <Book size={20} className="text-accent-600 mr-2" />
                    <span className="text-primary-700">B, Rhode Island School of Design</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Artist Statement */}
        <div className="py-16 md:py-24 bg-primary-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-8">Artist Statement</h2>
              <div className="prose prose-lg mx-auto text-primary-700">
                <p>
                  "My work investigates the complex interplay between heritage, migration, and identity formation. Through my paintings and mixed media pieces, I explore the spaces between cultures—where tradition meets modernity, where memories intersect with present realities, and where personal narratives connect with collective histories.
                </p>
                <p>
                  I draw inspiration from the rich visual language of Ethiopian artistic traditions, incorporating patterns, symbols, and color palettes that speak to my cultural roots. These elements are then reimagined through contemporary abstract frameworks, creating visual conversations about belonging, displacement, and the universal search for meaning.
                </p>
                <p>
                  By layering materials and techniques, I create works that mirror the multifaceted nature of identity itself—never static, always evolving, and formed at the intersection of multiple influences. Through this process, I invite viewers to consider their own cultural positioning and the invisible threads that connect us across geographic and cultural boundaries."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;