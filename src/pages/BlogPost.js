import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import { data } from '../data/posts';
import Main from '../layouts/Main';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

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

  return (
    <Main title={title}>
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
    </Main>
  );
};

export default BlogPost;
