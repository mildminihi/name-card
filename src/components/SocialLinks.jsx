import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: FaTwitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: FaInstagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'Email',
      url: 'mailto:supanat.wanroj@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-primary-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            Find me on these platforms or send me an email
          </p>

          <motion.div
            variants={containerVariants}
            className="flex justify-center items-center gap-6 flex-wrap"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-all duration-300 ${social.color} shadow-md hover:shadow-xl`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
