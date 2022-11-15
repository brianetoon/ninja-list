import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
   return ( 
      <>
         <Head>
            <title>Ninja List</title>
            <meta name="keywords" content="ninjas" />
            <link rel="icon" type="image/png" href="/favicon.png" />
         </Head>
         <div className="content">
            <Navbar />
            { children }
            <Footer />
         </div>
      </>
   );
}
 
export default Layout;