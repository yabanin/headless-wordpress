import { useEffect, useState, useMemo, useCallback } from "react";
import "./App.css";
import axios from "axios";


function App() {
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
      {posts.map((item) => (
        <div>
          <h2>{item.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} /> 
        </div>
      ))}
    </div>
  );
}

export default App;