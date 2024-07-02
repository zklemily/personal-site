import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const PostPreview = ({ data }) => (
  <div className="post-container">
    <div className="post-preview">
      <div className="content">
        <h2>
          <Link to={`/blog/${data.slug}`}>{data.title}</Link>
        </h2>
        <p className="description">{data.snippet}</p>
        <time className="published">
          {dayjs(data.date).format('MMMM D, YYYY')}
        </time>
      </div>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </div>
    </div>
  </div>
);

PostPreview.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPreview;
