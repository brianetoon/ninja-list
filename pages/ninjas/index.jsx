import styles from '../../styles/Ninjas.module.css';
import Head from "next/head";
import Link from 'next/link';

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   return {
      props: { ninjas: data }
   }
}

const Ninjas = ({ ninjas }) => {
   return ( 
      <>
         <Head>
            <title>Ninja List | Ninjas</title>
         </Head>
         <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
               <Link className={styles.single} 
                  key={ninja.id} href={`/ninjas/${ninja.id}`}>
                  <h3>{ ninja.name }</h3>
               </Link>
            ))}
         </div>
      </>
   );
}
 
export default Ninjas;