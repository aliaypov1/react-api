import React,{useState} from "react";
import { NavLink, Link } from "react-router-dom"
import Footer from "./Footer";
import Modal from "./Modal";





const Header = () =>{ 
  const [openModal,setOpenModal] = useState(false)

    return ( 
   <div>
   
     <header className='header'>
        <Link to="/" className="header__logo">header</Link>
        <nav className="header__nav">
            <button ><NavLink  to="/"className="header__link" >Home</NavLink></button>
            <button><NavLink   to="/About" className="header__link">Users</NavLink></button>
            <button><NavLink to="/Api" className="header__link" >Products</NavLink></button>
        </nav>
        <button className="open-btn" onClick={()=> setOpenModal(true)}>Registr</button>
        <div class="burger">
				<input type="checkbox" id="burger" hidden/>
				<label for="burger" class="burger__btn"> </label>
				<nav class="burger__nav">
					<NavLink to="/" class="burger__link">Home</NavLink>
					<NavLink to="/About" class="burger__link">Users</NavLink>
					<NavLink to="/Api" class="burger__link">Products</NavLink>
					<NavLink onClick={()=> setOpenModal(true)} class="burger__link">Registr</NavLink>
          
				</nav>
			</div>
        
        
     </header>
     <Modal open={openModal}  onClose={() => setOpenModal(false)}/>
   
     
    
     
   
   </div>
  
      
    ); 
  }; 
 
export default Header;
