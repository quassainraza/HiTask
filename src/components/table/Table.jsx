import './table.scss'
const Table = () => {
  const data = [
        {
           taskid: "1243",
           priority: "Urgent",
           status: "Ongoing"
        },
        {
            taskid: "1343",
            priority: "High",
            status: "Completed"
         },
         {
            taskid: "1244",
            priority: "Urgent",
            status: "Ongoing"
         },
         {
            taskid: "4222",
            priority: "low",
            status: "Completed"
         },
         {
            taskid: "1223",
            priority: "High",
            status: "Completed"
         },
            
    ]





  return (
    
    <div className="table">
		<div className="table-header">
			<div className="header__item"><a id="name" className="filter__link" href="#">Taskid</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Priority</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Status</a></div>
		</div>
		<div className="table-content">	
        {data.map((row)=>(
  
             <div className="table-row" key={row.id}>		
				<div className="table-data">{row.taskid}</div>
				<div className="table-data">{row.priority}</div>
				<div className="table-data"><span className={`status ${row.status}`}>{row.status}</span></div>
				
			</div>

        ))}
			
		</div>	
	</div>
    
  )
}

export default Table