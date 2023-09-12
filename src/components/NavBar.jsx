import { NavLink} from "react-router-dom";
import { getFavLength } from "../features/favorites/favoritesSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function NavBar(){
    const favPhotosLength = useSelector(getFavLength);
    const [favPhotosQty,setFavPhotosQty] = useState(favPhotosLength);
    useEffect(() =>{
        setFavPhotosQty(favPhotosLength);
    },[favPhotosLength]);
    useEffect(() =>{
        ;
    },[]);
    return(
        <nav>
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/'>Home</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/search'> Search</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'NavBar active' : 'NavBar')} to='/favorites'>{favPhotosQty>0? `Favorites(${favPhotosQty})`: 'Favorites'} </NavLink>
        </nav>
    )
}