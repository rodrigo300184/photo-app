import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/'>Home</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/search'> Search</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/favorites'> Favorites</NavLink>
        </nav>
    )
}