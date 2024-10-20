import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import ProductListPage from './pages/ProductListing';
import ThankYouPage from './pages/ThankYouPage';
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing/>} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
