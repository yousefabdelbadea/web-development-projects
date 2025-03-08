
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Showtask from "./Components/Showtask/Showtask";
import Addtask from "./Components/Addtask/Addtask";


function App() {
  const [tasklist, setTasklist] = useState((JSON.parse(localStorage.getItem("tasklist"))) || []);
  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist));
  },[tasklist])

  return (
    <div className="App">
      <Header />
      <Addtask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <Showtask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;