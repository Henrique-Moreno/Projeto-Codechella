import React from 'react'
import Header from '../../components/Header';
import Banner from './Banner'
import FestivalAbout from './FestivalAbout';
import FestivalDays from './FestivalDays';
import Footer from '../../components/Footer';

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <Banner />
            <FestivalAbout/>
            <FestivalDays/>
         </main>
         <Footer/>
      </>
   )
}
