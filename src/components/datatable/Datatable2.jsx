import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {tasksRows,tasksCols} from '../../datasource/datasource'
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Datatable = () => {


    const [data,setData] = useState(tasksRows)


    const handledelete=(id)=>{
        setData(data.filter((item)=>item.id!=id));
    };
        const actions=[
        {field:'action', headerName: 'Actions', width: 150 ,
    
         renderCell: (params)=>{
             return(

                <div className='cellAction'>                   
                    <div className='deletebutton' onClick={()=>handledelete(params.row.id)} >Delete</div>
                </div>
             )
         }
    
    
        }
    ];

  return (
    <div className='datatable'>
      
      <div className='datatableTitle'>
        Add New Task
        <Link to="/tasks/new"  className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        rows={data}
        columns={tasksCols.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable