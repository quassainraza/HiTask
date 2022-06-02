import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import List1 from "./Pages/list/List1";
import List2 from "./Pages/list/List2";
import { projectInputs } from "./formsource";
import { teamInputs } from "./formsource";
import { TaskInputs } from "./formsource";
import {rows,columns} from './datasource/datasource';
import New from "./Pages/new/New";
import New1 from "./Pages/new/New1";
import New2 from "./Pages/new/New1";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

function App() {

   const [projectdata] = useState(rows);
    return (
      <div className="App">
        
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home></Home>}></Route>
        <Route path="projects">
          <Route index element={<List></List>}>
            
          </Route>
          <Route path="new">
            <Route index element={<New inputs={projectInputs}  title="Add New Project!"></New>}></Route>
          </Route>
        </Route>
        <Route path="teams">
          <Route index element={<List1></List1>}></Route>
          <Route path="new" element={<New1 inputs={teamInputs} title="Add New Team!"></New1>}></Route>
        </Route>
        <Route path="tasks">
          <Route index element={<List2></List2>}></Route>
          <Route path="new" element={<New2 inputs={TaskInputs} title="Add New Task!"></New2>}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
       
  </div>  
  );
  
}

export default App;
