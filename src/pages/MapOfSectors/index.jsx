import React from 'react';
import Header from '../../components/Header';
import Banner from './Banner';
import DetailsSectors from './DetailsSectors';
import Sectores from './Sectores';
import Footer from '../../components/Footer'

export default function MapOfSectors() {
  return (
    <>
      <Header/>
      <main>
         <Banner/>
         <Sectores/>
         <DetailsSectors/>
      </main>
      <Footer/>
    </>
  )
}

