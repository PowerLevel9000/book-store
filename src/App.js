import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Catagories from './components/Catagories';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Default from './components/Default';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
