import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/posts';
import PostPreview from '../components/Blog/PostPreview';

const Blog = () => (
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
      <div className="blog-list">
        {data.map((post) => (
          <PostPreview key={post.slug} data={post} />
        ))}
      </div>
    </article>
  </Main>
);

export default Blog;
