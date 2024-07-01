/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tech For Good Inc.',
    position: 'Software Engineer Intern',
    startDate: '2023-05-29',
    endDate: '2023-08-12',
    highlights: [
      'Led the end-to-end development of the Applicant Tracking System web application, overseeing the creation of high-\n'
      + 'level and low-level design documentation, and creating detailed flowcharts to guide the development process.',
      'Spearheaded the setup and configuration of the Django project framework, proactively assisting the team in the\n'
      + 'adoption process by conducting multiple meetings to address questions and concerns effectively.',
      'Collaborated with frontend developers to design and implement robust RESTful APIs, providing well-defined\n'
      + 'protocols for frontend-server interactions and ensuring smooth data transfer.',
      'Designed, implemented and maintained a PostgreSQL database, ensuring efficient data storage and retrieval.',
    ],
  },
  {
    name: 'Energy Ogre',
    position: 'Business Analyst',
    startDate: '2020-07-20',
    endDate: '2021-09-30',
    highlights: [
      'Mentored an intern to develop a targeted marketing strategy utilizing statistical tools such as regression and clustering.\n'
      + 'Created a map using Python to guide effective ad targeting, resulting in a ~30% increase in membership growth.',
      'Led the communication, demand analysis, and MSSQL development for extracting three years of historical data,\n'
      + 'resulting in notable improvements in member communication strategy recognized by Customer Service.',
    ],
  },
];

export default work;
