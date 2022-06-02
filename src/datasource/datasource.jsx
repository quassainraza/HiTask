export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Project Name', width: 130 },
    { field: 'type', headerName: 'Project Type', width: 130 },
    { field: 'description', headerName: 'Project Description',width: 190},
    { field: 'priority', headerName: 'Project Priority', width: 130 },
    { field: 'deadline', headerName: 'Project Deadline', width: 130 },
    { field: 'team', headerName: 'Project TeamMembers', width: 180 },
    { field: 'status', headerName: 'Project Status', width: 130,

     renderCell:(params)=>{
         return(

          <div className={`status ${params.row.status}`}>{params.row.status}</div>
         )
     }
    },
   
  ];
  
 export const rows = [
    { id: 1, type: 'Research', name: 'Apollo', description:'develop a thesis by doing some research',priority:'high',deadline:'21stMay2022',team:'ali,ahmed',status:'Ongoing' },
    { id: 2, type: 'Development', name: 'MettlePaw', description:'build mobile app in flutter',priority:'medium',deadline:'24thMay2022',team:'usman,ahsan',status:'Completed' },
    { id: 3, type: 'Research&Development', name: 'Sunergy', description:'do some research ,apply machine learning algos and build web app',priority:'high',deadline:'1stMay2022',team:'wasif,ahmed',status:'Upcoming' },
  
 
    
  ];

  export const teamsCols =[

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Team Name', width: 130 },
    { field: 'assigned', headerName: 'Project Assigned', width: 130 },


  ];

  export const teamRows =[

    {id:1,name: 'saad,Faraz,quassain',assigned:'Sunergy'},
    {id:2,name: 'adil,huriya,zaynab',assigned:'Apollo'},
    {id:3,name: 'Butt,omer,bazil',assigned:'Mettlepaw'},
  ];

  export const tasksCols=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Task Name', width: 200 },
    { field: 'priority', headerName: 'Task Priority', width: 130, 
    renderCell:(params)=>{
        return(

         <div className={`priority ${params.row.priority}`}>{params.row.priority}</div>
        )
    } },
    { field: 'deadline', headerName: 'Task Deadline', width: 130 },
    { field: 'time', headerName: 'Time Spent', type:'number', width: 90 },
    { field: 'overdue', headerName: 'Overdue', width: 100 },
    { field: 'status', headerName: 'Task Status', width: 130, 
    renderCell:(params)=>{
        return(

         <div className={`status ${params.row.status}`}>{params.row.status}</div>
        )
    } },
    { field: 'tname', headerName: 'Team Members', width: 130 },

  ];

  export const tasksRows=[
    {id:1,name: 'Design the solution',priority: 'High',deadline:'1st May 2022',time:5,overdue:'no',status:'Completed',tname:'faraz,quassain'},
    {id:2,name: 'Prepare for implementation',priority: 'low',deadline:'21st May 2022',time:6,overdue:'yes',status:'Ongoing',tname:'saad,ali'},
    {id:3,name: 'Prepare the test/QA environment',priority: 'medium',deadline:'11th May 2022',time:5,overdue:'no',status:'Completed',tname:'Sam,john'},

  ];