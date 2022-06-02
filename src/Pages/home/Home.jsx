import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'
const Home = () => {
  return (

    <div className="home">
    <Sidebar></Sidebar>
    <div className='homeContainer'>
      <Navbar></Navbar>
      <div className='widgets'>
        <Widget type='projects'></Widget>
        <Widget type='teams'></Widget>
        <Widget type='tasks'></Widget>
      </div>
      <div className='listContainer'>
        <div className='listTitle'> Onging latest tasks</div>
        <Table></Table>
      </div>
      </div>
    </div>
    
  )
}

export default Home