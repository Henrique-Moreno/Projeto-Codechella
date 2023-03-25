import { useState, useEffect, useContext } from 'react';
import styles from './ticket.module.scss'
import api from '../../services/api';
import Header from '../../components/Header';
import Banner from './Banner';
import Button from '../../components/Ui/Button';
import ImgIcone from './Image/local_activity.png';
import Footer from '../../components/Footer';

import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/Auth';

export default function Ticket() {
   const navigate = useNavigate()
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [date_of_birth, setDateOfBirth] = useState('');

   const [ingresso, setIngresso] = useState([]);
   const [ingressoSelecionado, setIngressoSelecionado] = useState(0);

   const {signUp, yuirTickes} = useContext(AuthContext);

   useEffect(() => {
      async function loadIngresso() {

         const response = await api.get('/ingressos')
         setIngresso(response.data)
      }
      loadIngresso();

   }, [])

   function handleIngresso(event) {
      setIngressoSelecionado(event.target.value)
   }

   const handleRegister = async (e) => {
      e.preventDefault()

      if (name === '' || email === '' || date_of_birth === '') {
         alert("Preencha todos os campos")
         return;
      }

      await signUp(name, email, date_of_birth, ingresso[ingressoSelecionado].id)
      
      yuirTickes( ingresso[ingressoSelecionado].name)

      navigate('/seuingresso')
   }

   return (
      <>
         <Header />
         <main>
            <Banner />
            <section className={styles.Container}>
               <h1>Preencha o formulário a seguir:</h1>

               <form className={styles.Form} onSubmit={handleRegister}>
                     <label>Nome Completo:</label>
                     <input
                        className={styles.inputText}
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                     />
                     <label>Email:</label>
                     <input
                        className={styles.inputText}
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                     />

                  <div className={styles.containerInput}>
                     <div className={styles.Select}>
                        <label>Tipo de ingresso</label>
                        <select
                           className={styles.inputDate}
                           value={ingressoSelecionado}
                           onChange={handleIngresso}
                        >
                           {ingresso.map((item, index) => {
                              return (
                                 <option key={item.id} 
                                    value={index}
                                 >
                                    {item.name}
                                 </option>
                              )
                           })}
                        </select>
                     </div>

                     <div className={styles.inputDate}>
                        <label>Data de nascimento:</label>
                        <input
                           type='date'
                           value={date_of_birth}
                           onChange={e => setDateOfBirth(e.target.value)}
                        />
                     </div>
                  </div>

                  <Button
                     className={styles.button}
                     type='submit'
                  >
                     Avançar!
                     <img src={ImgIcone} alt="" />
                  </Button>
               </form>
            </section>
         </main>
         <Footer />
      </>
   )
}