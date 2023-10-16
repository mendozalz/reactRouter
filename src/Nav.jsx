import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <NavLink to="/" className={({isActive})=>isActive? "activo":null}>Home</NavLink>
        <NavLink to="/atanagildo" className={({isActive})=>isActive? "activo":null}>Atanagildo</NavLink>
        <NavLink to="/ataulfo" className={({isActive})=>isActive? "activo":null}>Ataulfo</NavLink>
        <NavLink to="/ervigio" className={({isActive})=>isActive? "activo":null}>Ervigio</NavLink>
        <NavLink to="/leogivildo" className={({isActive})=>isActive? "activo":null}>Leogivildo</NavLink>
        <NavLink to="/recesvinto" className={({isActive})=>isActive? "activo":null}>Recesvinto</NavLink>
        <NavLink to="/sisebuto" className={({isActive})=>isActive? "activo":null}>Sisebuto</NavLink>
    </nav>
  )
}

export default Nav