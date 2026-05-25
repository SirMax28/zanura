import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';

function App() {
  return (
    <Router basename="/zanura/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acerca-de" element={<AcercaDe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
