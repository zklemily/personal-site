import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const PostPreview = ({ data }) => (
    <div className="blog-post-preview">
        <a href={data.link} className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title}/>
        </a>
        <div className="content">
            <h2>
                <Link to={`/blog/${data.slug}`}>{data.title}</Link>
            </h2>
            <p className="snippet">{data.snippet}</p>
            {dayjs(data.date).format('MMMM, YYYY')}
        </div>
    </div>
);

PostPreview.propTypes = {
    data: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      snippet: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
};

export default PostPreview;