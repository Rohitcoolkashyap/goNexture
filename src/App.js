import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PopularServices from './components/PopularServices';
// import LatestProjects from './components/LatestProjects';
import SuccessStories from './components/SuccessStories';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <PopularServices />
      {/* <LatestProjects /> */}
      <SuccessStories />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
