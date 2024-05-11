import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const URL = "http://sandbox.local/wp-json/wp/v2/posts";
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

export default App
