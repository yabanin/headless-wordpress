import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PostList from './PostList';
import Post from './Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App
