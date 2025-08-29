import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessInfo } from '../hooks/useBusinessInfo';
import Hero from './Hero';
import TeamExperts from './TeamExperts';
import StunningServices from './StunningServices';
import Contact from './Contact';
import BusinessNameClosing from './BusinessNameClosing';
import Footer from './Footer';

const BusinessPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { businessInfo, loading } = useBusinessInfo(slug);

  // Update document title when business info loads
  useEffect(() => {
    if (!loading && businessInfo) {
      document.title = `${businessInfo.name} - Premium Barbershop`;
    }
  }, [businessInfo, loading]);

  return (
    <div className="min-h-screen">
      <Hero slug={slug} />
      <TeamExperts slug={slug} />
      <StunningServices />
      <Contact slug={slug} />
      <BusinessNameClosing slug={slug} />
      <Footer slug={slug} />
    </div>
  );
};

export default BusinessPage;