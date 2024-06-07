import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const URL = "https://yabanin.com/headless_test/wp-json/wp/v2/posts";
    axios.get(URL).then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);
  

  return (
    <div>
      <Link to={'/en'}>English</Link>
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : 
      posts.map((item) => (
        <div>
          <h2>{item.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} /> 
          <Link to={`/post/${item.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;