import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/posts';

const Blog = () => (
    <Main title="Blog" description="Read about Kaili's ideas, reflection, and random thoughts.">
        <article className="post" id="blogs">
            <header>
                <div className="title">
                    <h2>
                        <Link to="/blog">Blog</Link>
                    </h2>
                    <p>Read about Kaili's ideas, reflection, and random thoughts.</p>
                </div>
            </header>
            <ul>
                {data.map(post => (
                    <li key={data.slug}>
                        <Link to={`/blog/${data.slug}`}>{data.title}</Link>
                        <p>{data.date}</p>
                    </li>
                ))}
            </ul>
        </article>
    </Main>
);

export default Blog;