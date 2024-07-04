import React from 'react';
import PropTypes from 'prop-types';

// import CategoryButton from './Skills/CategoryButton';
// import SkillBar from './Skills/SkillBar';

const Skills = ({ data }) => (
  <div className="skills">
    <div className="title">
      <h3>Skills</h3>
    </div>
    <ul>
      <li>Technologies: {data.technologies}</li>
      <li>Languages:{data.languages}</li>
    </ul>
  </div>
);

Skills.propTypes = {
  data: PropTypes.shape({
    technologies: PropTypes.string,
    languages: PropTypes.string,
  }).isRequired,
};

export default Skills;
