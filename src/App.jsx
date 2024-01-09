//import { useState } from 'react'
import Header from "./components/Header.jsx"
import AddTask from "./components/AddTask.jsx"
import TaskList from "./components/TaskList.jsx"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="border-8 p-6 my-8 mx-6">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
