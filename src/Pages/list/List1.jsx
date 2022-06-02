import Datatable1 from '../../components/datatable/Datatable1'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List1 = () => {
  return (
    <div className='list'>
      <Sidebar>
      </Sidebar>
      <div className='listContainer'>
        <Navbar></Navbar>
        <Datatable1></Datatable1>
        
      </div>
    </div>
  )
}

export default List1