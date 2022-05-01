import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Add } from './redux/counter/action'
import { useDispatch, useSelector } from 'react-redux'
import {TodoList} from './redux/Todo/components/todoInput.jsx'






function App() {
  
  const dispatch = useDispatch()
  const val = useSelector(state => state.count.count)

// const [count, setCount] = useState(0)

  return (
    <div className="App">


      {/* const val = useSelector(state => state.count.ocunt) */}



      <h1><i><u>Redux Combinator Count with Todo</u> </i></h1>
      <h1>Counter : {val}</h1>
      <button onClick={() => dispatch(Add(1))}>Add</button>
      <br></br>
      <br></br>
      <TodoList/>



    </div>
  )
}

export default App
