import React from 'react';
import Header from '../../components/Header';
import Banner from './Banner';
import InclusionSection from './InclusionSection';
import SustainabilitySection from './SustainabilitySection';
import AttractionsSection from './AttractionsSection';
import Footer from '../../components/Footer';

export default function Experience() {
  return (
   <>
      <Header/>
      <main>
         <Banner/>
         <InclusionSection/>
         <SustainabilitySection/>
         <AttractionsSection/>
      </main>
      <Footer/>
   </>
  )
}
