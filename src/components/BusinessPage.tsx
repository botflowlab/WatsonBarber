import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';
import TeamExperts from './TeamExperts';
import StunningServices from './StunningServices';
import Contact from './Contact';
import BusinessNameClosing from './BusinessNameClosing';
import Footer from './Footer';

const BusinessPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Update document title
  useEffect(() => {
    document.title = 'Steven Tabach - Premium Barbershop';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <TeamExperts />
      <StunningServices />
      <Contact />
      <BusinessNameClosing />
      <Footer />
    </div>
  );
};

export default BusinessPage;