import { useState } from "react";

import { Link, Navigate, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

import './Navbar.css';

const Navbar = () => {

    const [search, setSearch] = useState("");
    const navegate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search) return

        navegate(`/search?q=${search}`);
        setSearch("");
    }
  return (
    <div className="navbar-container">
         <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie />MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar