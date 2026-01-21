import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'King Mongkut\'s Institute of Technology Ladkrabang',
      location: 'Bangkok, Thailand',
      period: '2015 - 2019',
      description: 'Focused on software engineering, information systems, and application development.',
      achievements: [
        'GPA: 3.19/4.0',
      ],
    },
    {
      degree: 'High School Diploma',
      institution: 'English-Mathematics Program',
      location: 'Thailand',
      period: '2009 - 2015',
      description: 'Specialized in English and Mathematics.',
      achievements: [
        'GPA: 3.33/4.0',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 border-l-2 border-primary-600 dark:border-primary-400"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <HiAcademicCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {edu.description}
                </p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Key Achievements:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-slate-600 dark:text-slate-400"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
