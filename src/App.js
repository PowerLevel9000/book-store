import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books';
import Catagories from './components/Catagories';
import NavigationBar from './components/NavigationBar';
import Default from './components/Default';
import Footer from './components/Footer';

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
