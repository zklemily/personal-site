import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../posts/${slug}.md`)
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(text => setContent(text));
            })
            .catch(err => console.error(err));
    }, [slug]);

    return (
        <Main>
            <Markdown>{content}</Markdown>
        </Main>
    );
};

export default BlogPost;