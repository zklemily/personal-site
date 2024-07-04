import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { data, categories } from '../data/posts';
import PostPreview from '../components/Blog/PostPreview';

import CategoryButton from '../components/Resume/Skills/CategoryButton';

const Blog = () => {
  const initialButtons = Object.fromEntries([['All', false]].concat(categories.map((category) => [category, false])));

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    const newButtons = Object.keys(buttons).reduce((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});
    newButtons.All = !Object.keys(newButtons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getFilteredPosts = () => {
    const activeCategory = Object.keys(buttons).reduce((cat, key) => (
      buttons[key] ? key : cat
    ), 'All');

    return data.filter((post) => (activeCategory === 'All' || post.categories.includes(activeCategory)))
      .map((post) => (
        <PostPreview key={post.slug} data={post} />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    >
      {key}
    </CategoryButton>
  ));

  return (
    <Main title="Blog" description="What's on my mind">
      <article className="post" id="blogs">
        <header>
          <div className="title">
            <h2>
              <Link to="/blog">Blog</Link>
            </h2>
            <p>What&apos;s on my mind</p>
          </div>
        </header>
        <div className="skill-button-container">
          {getButtons()}
        </div>
        <div className="blog-list">
          {getFilteredPosts()}
        </div>
      </article>
    </Main>
  );
};

export default Blog;
