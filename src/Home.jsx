import {Link} from "react-router-dom";

function Home() {
  const reyes = [
    {
      nombre: "atanagildo",
    },
    {
      nombre: "ervigio",
    },
    {
      nombre: "ataulfo",
    },
    {
      nombre: "leogivildo",
    },
    {
      nombre: "recesvinto",
    },
    {
      nombre: "sisebuto",
    },
  ];
 

  return (
    <div className="contenedor-reyes">
    {
    reyes.map(rey=>{
       // const captitalizado = rey.nombre.substring(0,1).toUpperCase() + rey.nombre.substring(1)
        return(
            <div key={rey.nombre}>
                <Link to={`/${rey.nombre}`}>
                <img src={`https://www.html6.es/img/rey_${rey.nombre}.png`} alt={rey.nombre}/>
               {/* { <p>{captitalizado}</p>} */}
                </Link>
            </div>
        )
    })
    }
    </div>
  )
}

export default Home;
