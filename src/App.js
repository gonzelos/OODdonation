import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './layouts/Header';
import MainLandingPage from './Pages/MainLandingPage';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
