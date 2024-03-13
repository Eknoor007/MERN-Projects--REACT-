import React, { useEffect, useState } from 'react'
import Todolist from './Screens/Todolist'
import AddToDo from './Screens/AddToDo'


export default function App() {
  const [todo, addtodo] = useState([]);
  
  const childcall = (e) => {
    console.log(e.title)
    console.log(e.desc)
    console.log(e.remark)
    addtodo([...todo,e])
};
//   const todo = [
//     {
//         sno: '1',
//         title: 'Shopping',
//         desc: "Go to AlphaOne",
//         remarks: "PS5 - 50k",
//     },
//     {
//         title: 'Food',
//         desc: "Order on Zomato",
//         remarks: "Pizza",
//     }
// ]
return (
  <>
    <AddToDo f={childcall}/>
    <Todolist todoitem={todo} />
  </>
)
}
