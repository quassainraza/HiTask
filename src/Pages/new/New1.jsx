import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import {nanoid} from 'nanoid';

const New1 = ({inputs,title}) => {

  

  return (
    <div className='new'>
      <Sidebar>
      </Sidebar>
      <div className='newContainer'>

        <Navbar></Navbar>
         
        <div className='topseg'>
          <h1>{title}</h1>
          {/* <div >{inputs}</div> */}
        </div>
        <div className='bottomseg'>
          <form>
            {inputs.map((input)=>(
            <div className='formInput' key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} name={input.name} placeholder={input.placeholder}></input>
            </div>
            
            ))
            }
            <button type='submit'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default New1