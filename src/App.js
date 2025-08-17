import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LatestProjects from './components/LatestProjects';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="App">
      <Header />
        <Hero />
      <AnimatedSection animation="fade-up">
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <LatestProjects />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Team />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <ContactForm />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default App;
