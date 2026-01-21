import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
