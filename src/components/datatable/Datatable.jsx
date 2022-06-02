import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {rows,columns} from '../../datasource/datasource'
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Datatable = () => {


    const [data,setData] = useState(rows)


    const handledelete=(id)=>{
        setData(data.filter((item)=>item.id!=id));
    };
        const actions=[
        {field:'action', headerName: 'Actions', width: 200 ,
    
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
        Add New Project
        <Link to="/projects/new" className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        rows={data}
        columns={columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable