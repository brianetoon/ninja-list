import styles from '../styles/NotFound.module.css'
import Link from "next/link";

const NotFound = () => {
    return (  
        <div className={styles["not-found"]}>
            <h2>Ooops...</h2>
            <p className="error">That page could not be found.</p>
            <p>Go back <Link href="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;