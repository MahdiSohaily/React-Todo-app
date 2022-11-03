import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<TodoContainer />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
