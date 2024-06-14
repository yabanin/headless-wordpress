import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import EnPostList from './EnPostList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route path="/en" element={<EnPostList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App
