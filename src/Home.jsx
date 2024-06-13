import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
  const { lang } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://yabanin.com/headless_test/${lang}/wp-json/wp/v2/posts`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the posts:', error);
      });
  }, [lang]);

  return (
    <div>
      <h1>WordPress Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link to={`/${lang}/post/${post.id}`}>Read more</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
