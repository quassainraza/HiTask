import './widget.scss'
import {FaArrowUp} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";
import {FaUsers} from "react-icons/fa";
import {FaTasks} from "react-icons/fa";

const Widget = ({type}) => {
  let data;
 const amount=100;
 const percent=20;
  switch(type){
      case "projects":
          data={
              title: 'Projects',
              link: 'See all Projects',
              icon: 
                  <FaProjectDiagram className='icon' style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.2)", 
                }}></FaProjectDiagram>,
              
          };
          break;
      case "teams":
            data={
                title: 'Teams',
                link: 'See all Teams',
                icon: <FaUsers className='icon' style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218,165,32,0.2)", 
                  }}></FaUsers>,
            };
            break;
      case "tasks":
          data={
              title: 'Tasks',
              link: 'See all Tasks',
              icon: <FaTasks className='icon' style={{
                color: "green",
                backgroundColor: "rgba(0,128,0,0.2)", 
              }}></FaTasks>,
          };
          break;
          default:
           break;   
  }
  return (
    <div className='widget'>
       <div className='left'>
           <span className='title'>{data.title}</span>
           <span className='counter'>{amount}</span>
           <span className='link'>{data.link}</span>


       </div>
       <div className='right'>
           <div className='percentage positive'>
               <FaArrowUp></FaArrowUp>
               {percent} %
           </div>
            {data.icon}
       </div>
    </div>
  )
}

export default Widget