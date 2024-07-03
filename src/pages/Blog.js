import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { data, categories } from '../data/posts';
import PostPreview from '../components/Blog/PostPreview';
import Filter from '../components/Blog/Filter';

const Blog = () => {
  const initialButtons = Object.fromEntries(
    [['All', false]].concat(categories.map((name) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);

  const handleCategoryChange = (label) => {
    const newButtons = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {},
    );
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const selectedCategories = Object.keys(buttons).filter(
    (key) => buttons[key] && key !== 'All',
  );

  const filteredPosts = selectedCategories.length
    ? data.filter((post) => post.categories.some((cat) => selectedCategories.includes(cat)))
    : data;

  return (
    <Main title="Blog" description="What&apos;s on my mind">
      <article className="post" id="blogs">
        <header>
          <div className="title">
            <h2>
              <Link to="/blog">Blog</Link>
            </h2>
            <p>What&apos;s on my mind</p>
          </div>
        </header>
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          buttons={buttons}
        />
        <div className="blog-list">
          {filteredPosts.map((post) => (
            <PostPreview key={post.slug} data={post} />
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Blog;
