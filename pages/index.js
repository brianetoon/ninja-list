import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <div>
         <h1>Homepage</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem alias obcaecati rerum dolorum ab aliquid culpa hic, optio, fugit debitis velit ipsam. Architecto at commodi recusandae earum repudiandae modi?</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, harum deleniti magni quo sequi consequuntur dolorem voluptatum. Porro, temporibus magnam voluptatum, eligendi dignissimos sed quis omnis modi quia distinctio optio.</p>
         <Link href="/ninjas">See Ninja Listing</Link>
      </div>
   )
}
