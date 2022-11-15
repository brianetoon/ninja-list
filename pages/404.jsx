import styles from '../styles/NotFound.module.css'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
   const router = useRouter()
   const [redirectTime, setRedirectTime] = useState(5)

   useEffect(() => {
      setTimeout(() => {

         if (redirectTime > 0) {
            setRedirectTime(redirectTime - 1)
         }

         if (redirectTime <= 0) {
            router.push('/')
         }

      }, 1000)
   }, [redirectTime])

   return (  
      <div className={styles["not-found"]}>
         <h2>Ooops...</h2>
         <p className="error">That page could not be found.</p>
         <p>Redirecting in { redirectTime } seconds...</p>
         <p>Go back <Link href="/">Home</Link> now.</p>
      </div>
   );
}
 
export default NotFound;