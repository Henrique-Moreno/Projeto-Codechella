import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner from './Banner';
import styles from './information.module.scss';
import Response from './Response';
import Arrow from './Image/arrow_drop_down.png'

export default function Information() {

   const [details, setDetails] = useState(false)

   const showDetails = () => setDetails(!details)

   return (
      <>
         <Header />
         <main>

            <Banner />
            <section className={styles.container}>
               <h1>Perguntas Frequentes:</h1>

               <div className={styles.containerQuestions}>
                  <div
                     className={styles.questions}
                     onClick={showDetails}
                  >
                     <h2>Quais serão as atrações?</h2>
                     <img src={Arrow} alt="" />
                  </div>
                  {details && <Response active={setDetails}/>}
               </div>

               <div className={styles.containerQuestions}>
                  <div
                     className={styles.questions}
                  >
                     <h2>Qual é a classificação etária?</h2>
                     <img src={Arrow} alt="" />
                  </div>
               </div>

               <div className={styles.containerQuestions}>
                  <div
                     className={styles.questions}
                  >
                     <h2>Quais são os setores disponíveis?</h2>
                     <img src={Arrow} alt="" />
                  </div>
               </div>

               <div className={styles.containerQuestions}>
                  <div
                     className={styles.questions}
                  >
                     <h2>Quais são os itens proibidos?</h2>
                     <img src={Arrow} alt="" />
                  </div>
               </div>

               <div className={styles.containerQuestions}>
                  <div
                     className={styles.questions}
                  >
                     <h2>Quais são os itens proibidos?</h2>
                     <img src={Arrow} alt="" />
                  </div>
               </div>

            </section>
         </main>

         <Footer />
      </>
   )
}
