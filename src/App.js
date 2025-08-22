import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedSection from './components/AnimatedSection';
import CursorFollower from './components/CursorFollower';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components that are not immediately visible
const Services = React.lazy(() => import('./components/Services'));
const LatestProjects = React.lazy(() => import('./components/LatestProjects'));
const Team = React.lazy(() => import('./components/Team'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Footer = React.lazy(() => import('./components/Footer'));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8 sm:py-16 bg-slate-900 min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App bg-slate-900 min-h-screen">
        <CursorFollower />
        <Header />
        <Hero />
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedSection animation="fade-up">
              <div id="services">
                <Services />
              </div>
            </AnimatedSection>
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedSection animation="fade-up">
              <LatestProjects />
            </AnimatedSection>
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedSection animation="fade-up">
              <Team />
            </AnimatedSection>
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedSection animation="fade-up">
              <ContactForm />
            </AnimatedSection>
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

export default App;
