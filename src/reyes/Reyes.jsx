import {useParams} from 'react-router-dom'

function Reyes() {
  const {rey} = useParams()

  const captitalizado = rey.substring(0,1).toUpperCase() + rey.substring(1)
    return (
      <>
          <img src={`https://www.html6.es/img/rey_${rey}.png`} />
          <h1>{captitalizado}</h1>
      </>
    )
}

export default Reyes