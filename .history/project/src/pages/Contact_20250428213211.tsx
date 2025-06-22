import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Nebyou Chaka</title>
        <meta name="description" content="Get in touch with visual artist Nebyou Chaka for inquiries about artworks, exhibitions, or collaborations." />
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
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Get in Touch</h1>
              <p className="text-primary-200 text-lg">
                Interested in my artwork or have questions about exhibitions and commissions? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-primary-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-primary-900 mb-1">Studio Address</h3>
                      <p className="text-primary-700">
                        123 Art Studio Lane<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-primary-900 mb-1">Email</h3>
                      <p className="text-primary-700">
                        <a href="mailto:info@nebyouchaka.com" className="hover:text-accent-700 transition duration-300">
                          nebyouchaka@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-primary-900 mb-1">Phone</h3>
                      <p className="text-primary-700">
                        <a href="tel:+15551234567" className="hover:text-accent-700 transition duration-300">
                          (323) 441-4567
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-accent-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-primary-900 mb-1">Studio Hours</h3>
                      <p className="text-primary-700">
                        Tuesday - Friday: 10am - 6pm<br />
                        Saturday: 11am - 4pm<br />
                        Sunday & Monday: Closed
                      </p>
                      <p className="text-primary-600 mt-1 text-sm italic">
                        Studio visits by appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-primary-50 rounded-lg">
                  <h3 className="font-medium text-primary-900 mb-3">Artwork Inquiries</h3>
                  <p className="text-primary-700 mb-4">
                    For specific inquiries about purchasing artwork or commissioning new pieces, please include details about the artwork you're interested in or your commission requirements.
                  </p>
                  <p className="text-primary-700">
                    For gallery and exhibition inquiries, please contact my representative at <a href="mailto:gallery@nebyouchaka.com" className="text-accent-700 hover:text-accent-800 transition duration-300">gallery@nebyouchaka.com</a>.
                  </p>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl text-primary-900 mb-8">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;