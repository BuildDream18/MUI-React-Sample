import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TemplatePage from './components/TemplatePage';
import Header from './components/Header';
import Footer from './components/Footer';
import pages from './lib/data';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`.nav-links a[href="#${id}"]`).classList.add('active');
        } else {
          document.querySelector(`.nav-links a[href="#${id}"]`).classList.remove('active');
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          {pages.map((page, index) => (
            <Route key={index} path={page.path} element={<TemplatePage sections={page.sections}/>} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
