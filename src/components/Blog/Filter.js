import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ categories, onCategoryChange, buttons }) => (
  <div className="filter">
    <div className="filter-buttons">
      {['All', ...categories].map((category) => (
        <button
          key={category}
          type="button"
          className={buttons[category] ? 'selected' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  buttons: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default Filter;
