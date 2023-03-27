import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books';
import Catagories from './components/Catagories';
import NavigationBar from './components/NavigationBar';
import Default from './components/Default';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
