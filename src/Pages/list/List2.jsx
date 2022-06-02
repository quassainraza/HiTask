import Datatable2 from '../../components/datatable/Datatable2'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List2 = () => {
  return (
    <div className='list'>
      <Sidebar>
      </Sidebar>
      <div className='listContainer'>
        <Navbar></Navbar>
        <Datatable2></Datatable2>
        
      </div>
    </div>
  )
}

export default List2