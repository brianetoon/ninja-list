// next will know how many html pages to generate based on this 
export const getStaticPaths = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   const paths = data.map(ninja => {
      return {
         params: { id: ninja.id.toString() }
      }
   })

   return {
      paths,
      fallback: false
   }
}

// next will run this for every ninja details page it needs to generate
export const getStaticProps = async (context) => {
   const id = context.params.id;
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   const data = await res.json();

   return {
      props: { ninja: data }
   }
}

const NinjaDetails = ({ ninja }) => {
   return ( 
      <div className="ninja-details">
         <h2>{ ninja.name }</h2>
         <p>{ ninja.address.city}</p>
         <p>{ ninja.email }</p>
         <p>{ ninja.website }</p>
      </div>
   );
}
 
export default NinjaDetails;