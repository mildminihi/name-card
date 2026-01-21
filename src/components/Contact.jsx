import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMail, HiUser, HiPencil } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-2"
              >
                <HiUser className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 text-slate-900 dark:text-white transition-all"
                placeholder="Supanat Wanroj"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-2"
              >
                <HiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 text-slate-900 dark:text-white transition-all"
                placeholder="supanat.wanroj@gmail.com"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium mb-2"
              >
                <HiPencil className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 text-slate-900 dark:text-white transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/30'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
              >
                Oops! Something went wrong. Please try again.
              </motion.div>
            )}
          </form>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Or reach out directly at
            </p>
            <a
              href="mailto:supanat.wanroj@gmail.com"
              className="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              supanat.wanroj@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
