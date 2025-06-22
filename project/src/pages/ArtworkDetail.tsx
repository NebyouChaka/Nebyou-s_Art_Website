import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Send, CheckCircle } from 'lucide-react';
import { artworks } from '../data/artworks';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showingForm, setShowingForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
  // Find the artwork by ID
  const artwork = artworks.find(artwork => artwork.id === id);
  
  if (!artwork) {
    return (
      <div className="container py-24 text-center">
        <h2 className="text-2xl font-serif mb-4">Artwork not found</h2>
        <p className="mb-6">The artwork you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/gallery" 
          className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return to Gallery
        </Link>
      </div>
    );
  }
  
  const handlePurchaseRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate API call
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setShowingForm(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>{artwork.title} | Nebyou Chaka</title>
        <meta name="description" content={`View details of "${artwork.title}", a ${artwork.medium} artwork by Nebyou Chaka. ${artwork.description.substring(0, 100)}...`} />
      </Helmet>
      
      <div className="pt-20">
        {/* Artwork Detail */}
        <div className="container py-12">
          <div className="mb-8">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-24">
                <img 
                  src={artwork.imageUrl} 
                  alt={artwork.title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
                {artwork.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <Calendar size={18} className="text-primary-600 mr-2" />
                <span className="text-primary-600">{artwork.year}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-primary-500 mb-1">Medium</h3>
                  <p className="text-primary-900">{artwork.medium}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-500 mb-1">Dimensions</h3>
                  <p className="text-primary-900">{artwork.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-500 mb-1">Status</h3>
                  <p className="text-primary-900">
                    {artwork.isSold ? (
                      <span className="text-error-700">Sold</span>
                    ) : (
                      <span className="text-success-700">Available</span>
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-500 mb-1">Price</h3>
                  <p className="text-primary-900">${artwork.price.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary-900 mb-3">About this Artwork</h3>
                <p className="text-primary-700 leading-relaxed mb-4">
                  {artwork.description}
                </p>
              </div>
              
              {!artwork.isSold && (
                <div className="mb-8">
                  {!showingForm && !submitted && (
                    <button
                      onClick={() => setShowingForm(true)}
                      className="inline-block bg-accent-600 text-white px-6 py-3 rounded-md font-medium hover:bg-accent-700 transition duration-300"
                    >
                      Request Purchase Information
                    </button>
                  )}
                  
                  {showingForm && !submitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="bg-primary-50 p-6 rounded-lg"
                    >
                      <h3 className="text-lg font-medium text-primary-900 mb-4">Request Purchase Information</h3>
                      <form onSubmit={handlePurchaseRequest} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition border-primary-300 focus:ring-accent-100 focus:border-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition border-primary-300 focus:ring-accent-100 focus:border-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition border-primary-300 focus:ring-accent-100 focus:border-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                            Additional Information (Optional)
                          </label>
                          <textarea
                            id="message"
                            rows={3}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition border-primary-300 focus:ring-accent-100 focus:border-accent-500"
                            placeholder="Any questions about the artwork or shipping options?"
                          ></textarea>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={() => setShowingForm(false)}
                            className="text-primary-700 hover:text-primary-900 font-medium"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={sending}
                            className={`flex items-center justify-center px-6 py-2 text-white font-medium rounded-md transition duration-300 ${
                              sending
                                ? 'bg-primary-400 cursor-not-allowed'
                                : 'bg-accent-600 hover:bg-accent-700'
                            }`}
                          >
                            {sending ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                Submit Request <Send size={16} className="ml-2" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                  
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-success-50 p-6 rounded-lg text-center"
                    >
                      <CheckCircle size={48} className="mx-auto text-success-500 mb-4" />
                      <h3 className="text-xl font-medium text-primary-900 mb-2">Request Sent!</h3>
                      <p className="text-primary-700">
                        Thank you for your interest in this artwork. We'll contact you shortly with purchase information.
                      </p>
                    </motion.div>
                  )}
                </div>
              )}
              
              <div className="border-t border-primary-200 pt-8">
                <h3 className="text-lg font-medium text-primary-900 mb-3">Shipping & Framing</h3>
                <p className="text-primary-700 mb-4">
                  All artwork is professionally packaged to ensure safe delivery. International shipping is available. For specific shipping quotes, please contact us.
                </p>
                <p className="text-primary-700">
                  Framing options are available upon request. We work with professional framers to complement each artwork with the perfect frame.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetail;