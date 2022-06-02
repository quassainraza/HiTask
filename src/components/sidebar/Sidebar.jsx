import './sidebar.scss'
import { FaHouseUser } from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";
import {FaUsers} from "react-icons/fa";
import {FaTasks} from "react-icons/fa";
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (

    
    <div className='sidebar'>

    <div className='top'>
      <Link to="/" style={{textDecoration:"none"}}>
      <span className="logo">QuassainRaza</span>

      </Link>
        
    </div>
    <hr></hr>
    <div className='center'>

        <ul>

           <p className="title">MAIN</p>
           <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <FaHouseUser className='icon'></FaHouseUser>
            <span>Dashboard
            </span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/projects" style={{textDecoration:"none"}}>
            <li>
              <FaProjectDiagram className='icon'></FaProjectDiagram>
            <span>Projects
            </span>
            </li>
            </Link>
            <Link to="/teams" style={{textDecoration:"none"}}>
            <li>
            <FaUsers className='icon'></FaUsers>
            <span>Teams
            </span>
            </li>
            </Link>
            <Link to="/tasks" style={{textDecoration:"none"}}>
            <li>
              <FaTasks className='icon'></FaTasks>
            <span>Tasks
            </span>
            </li>
            </Link>
        </ul>
        
         </div>
    <div className='bottom'>
      <div className='colorOption'></div>
      <div className='colorOption'></div>
      
    </div>



    </div>
  )
}

export default Sidebar