import ImgIcone from '../../../assets/img/local_activity.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './styles.module.scss';
import Button from '../../../components/Ui/Button';
import Link from '../../../components/Ui/Link';
import Imagem from './Imagem';


export default function FestivalInformation() {
   return (
      <section>
         <article className={styles.container}>
            <Imagem/>
            <aside className={styles.texto}>
               <div className={styles.icones}>
                  <FaChevronLeft  className={styles.icone}/>
                  <h2>11 e 12 de Março</h2>
                  <FaChevronRight  className={styles.icone}/>
               </div>
               <h2>Aluródromo de São Paulo</h2>
               <p>
                  Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
               </p>
               <Button className={styles.button}>
                  <Link 
                     href='/ingresso'
                     className={styles.link}
                  >
                     Comprar ingresso!
                     <img src={ImgIcone} alt="imagem de um ingresso" />
                  </Link>
               </Button>
            </aside>
         </article>
      </section>
   )
}




