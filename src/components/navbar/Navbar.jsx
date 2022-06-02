import './navbar.scss'
import {FaSearch} from "react-icons/fa";
import {FaLanguage} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";
import {FaListUl} from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search here..'></input>
          <FaSearch></FaSearch>
        </div>
        <div className='items'>
          <div className='item'>
            <FaLanguage className='icon'></FaLanguage>
            English
          </div>
          <div className='item'>
            <FaMoon className='icon'></FaMoon>
            
          </div>
          <div className='item'>
            <FaListUl className='icon'></FaListUl> 
          </div>
          <div className='item'>
          
          <img src='photo.png' alt='' className='avatar'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar