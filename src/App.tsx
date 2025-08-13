import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PopularServices from './components/PopularServices';
import HowItWorks from './components/HowItWorks';
import LatestProjects from './components/LatestProjects';
import TalentPool from './components/TalentPool';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <PopularServices />
      <HowItWorks />
      <LatestProjects />
      <TalentPool />
      <SuccessStories />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
