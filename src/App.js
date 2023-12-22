
import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const HomePage = lazy(() => import('./Components/HomePage/HomePage.jsx'));
const Collaboration = lazy(() => import('./Components/Collaboration/Collaboration.jsx'));
const Concern = lazy(() => import('./Components/Concern/Concern.jsx'));
const ContactUs = lazy(() => import('./Components/ContactUs/ContactUs.jsx'));
const Initiative = lazy(() => import('./Components/Initiative/Initiative.jsx'));
const SwachBharat = lazy(() => import('./Components/SwachBharat/SwachBharat.jsx'));
const Canvas = lazy(() => import('./Components/Canvas/Canvas.jsx'));
const Hooks = lazy(() => import('./Components/Hooks/Hooks.jsx'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulating a delay of 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={isLoading ? <div>Loading...</div> : null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/collaboration' element={<Collaboration />} />
            <Route path='/concern' element={<Concern />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/initiative' element={<Initiative />} />
            <Route path='/swachbharat' element={<SwachBharat />} />
            <Route path='/canvas' element={<Canvas />} />
            <Route path='/hooks' element={<Hooks />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



