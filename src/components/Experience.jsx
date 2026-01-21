import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Engineer, iOS',
      company: 'LINE MAN Wongnai',
      location: 'Bangkok, Thailand',
      period: 'Aug 2024 - Present',
      description:
        'Developing and maintaining iOS applications for LINE MAN Wongnai food delivery and restaurant platform.',
      responsibilities: [
        'Building scalable iOS features for food delivery platform',
        'Implementing modern iOS architecture patterns',
        'Collaborating with cross-functional teams',
        'Optimizing app performance and user experience',
      ],
      technologies: ['Swift', 'iOS', 'UIKit', 'SwiftUI', 'RESTful API'],
    },
    {
      position: 'iOS Developer',
      company: 'Kiatnakin Phatra Financial Group',
      location: 'Bangkok, Thailand',
      period: 'Jun 2023 - Jul 2024',
      description:
        'Developed mobile banking and financial services applications for KKP Group.',
      responsibilities: [
        'Built and maintained iOS banking applications',
        'Implemented secure payment and transaction features',
        'Integrated biometric authentication and security features',
        'Conducted code reviews and mentored junior developers',
      ],
      technologies: ['Swift', 'iOS', 'UIKit', 'Core Data', 'Security Framework'],
    },
    {
      position: 'Software Engineer',
      company: 'SCB TechX',
      location: 'Bangkok, Thailand',
      period: 'Jul 2021 - Jun 2023',
      description:
        'Contributed to digital banking solutions and fintech innovations at SCB\'s technology division.',
      responsibilities: [
        'Developed iOS banking features and services',
        'Implemented secure authentication and authorization',
        'Worked on digital payment solutions',
        'Collaborated with product and design teams',
      ],
      technologies: ['Swift', 'iOS', 'Objective-C', 'RESTful API', 'Git'],
    },
    {
      position: 'iOS Developer',
      company: 'SCB (Siam Commercial Bank)',
      location: 'Bangkok, Thailand',
      period: 'Jun 2019 - Jun 2021',
      description:
        'Developed and maintained mobile banking applications for one of Thailand\'s leading banks.',
      responsibilities: [
        'Built core banking features for iOS platform',
        'Implemented secure transaction processing',
        'Fixed bugs and improved app stability',
        'Participated in agile development processes',
      ],
      technologies: ['Swift', 'Objective-C', 'iOS', 'UIKit', 'Core Data'],
    },
    {
      position: 'iOS Mobile Developer Intern',
      company: 'FireOneOne',
      location: 'Bangkok, Thailand',
      period: 'May 2018 - Jul 2018',
      description:
        'Internship focused on iOS mobile application development and learning industry best practices.',
      responsibilities: [
        'Assisted in developing iOS application features',
        'Learned Swift programming and iOS frameworks',
        'Participated in code reviews and team meetings',
        'Contributed to bug fixes and improvements',
      ],
      technologies: ['Swift', 'iOS', 'Xcode', 'Git'],
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
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My professional journey and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pr-8 md:pr-12 border-r-2 border-primary-600 dark:border-primary-400 ml-auto"
            >
              {/* Timeline dot */}
              <div className="absolute right-0 top-0 translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <HiBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <p className="font-semibold text-slate-900 dark:text-white mb-2">
                    Key Responsibilities:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-slate-600 dark:text-slate-400"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
