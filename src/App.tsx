import React from 'react';
import './styles/main.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import { ProjectPage } from './pages/ProjectPage';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectPage />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
