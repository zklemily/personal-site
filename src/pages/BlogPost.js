import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import { data } from '../data/posts';
import Main from '../layouts/Main';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    import(`../../public/posts/${slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [slug]);

  const post = data.find((p) => p.slug === slug);
  const title = post ? post.title : 'Blog Post';

  const currentIndex = data.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? data[currentIndex - 1] : null;
  const nextPost = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;

  return (
    <Main title={title}>
      <Link to="/blog" className="button" style={{ marginTop: '20px', marginBottom: '20px' }}>All Blogs</Link>
      <article className="post markdown">
        <header>
          <div className="title">
            <h2>
              {title}
            </h2>
          </div>
        </header>
        <Markdown>{content}</Markdown>
      </article>
      <button
        type="button"
        className="button"
        style={{ marginRight: '10px' }}
        onClick={() => prevPost && navigate(`/blog/${prevPost.slug}`)}
        disabled={!prevPost}
      >
        Previous
      </button>
      <button
        type="button"
        className="button"
        style={{ float: 'right', marginLeft: '10px' }}
        onClick={() => nextPost && navigate(`/blog/${nextPost.slug}`)}
        disabled={!nextPost}
      >
        Next
      </button>
    </Main>
  );
};

export default BlogPost;
