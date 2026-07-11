import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
