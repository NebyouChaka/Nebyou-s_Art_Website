import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 md:p-8"
    >
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle size={48} className="mx-auto text-success-500 mb-4" />
          <h3 className="text-xl font-medium text-primary-900 mb-2">Message Sent!</h3>
          <p className="text-primary-600">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition duration-300 ${
                errors.name
                  ? 'border-error-500 focus:ring-error-50'
                  : 'border-primary-300 focus:ring-accent-100 focus:border-accent-500'
              }`}
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition duration-300 ${
                errors.email
                  ? 'border-error-500 focus:ring-error-50'
                  : 'border-primary-300 focus:ring-accent-100 focus:border-accent-500'
              }`}
              placeholder="Your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition duration-300 ${
                errors.subject
                  ? 'border-error-500 focus:ring-error-50'
                  : 'border-primary-300 focus:ring-accent-100 focus:border-accent-500'
              }`}
              placeholder="Message subject"
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition duration-300 ${
                errors.message
                  ? 'border-error-500 focus:ring-error-50'
                  : 'border-primary-300 focus:ring-accent-100 focus:border-accent-500'
              }`}
              placeholder="Your message"
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  value: 20,
                  message: 'Message must be at least 20 characters'
                }
              })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
            )}
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-md transition duration-300 ${
                isSubmitting
                  ? 'bg-primary-400 cursor-not-allowed'
                  : 'bg-accent-600 hover:bg-accent-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;