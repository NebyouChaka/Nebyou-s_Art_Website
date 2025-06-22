import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ArtworkDetail from './pages/ArtworkDetail';
import Exhibitions from './pages/Exhibitions';
import UpcomingExhibitions from './pages/UpcomingExhibitions';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ArtworkDetail />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibitions/upcoming" element={<UpcomingExhibitions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;