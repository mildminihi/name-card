import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
            Made with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <HiHeart className="text-red-500" />
            </motion.span>
            by Supanat Wanroj
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
