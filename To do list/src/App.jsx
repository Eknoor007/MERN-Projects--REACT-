import React from 'react'
import Todolist from './Screens/Todolist'
import AddToDo from './Screens/AddToDo'


export default function App() {
  const todo = [
    {
        sno: '1',
        title: 'Shopping',
        desc: "Go to AlphaOne",
        remarks: "PS5 - 50k",
    },
    {
        title: 'Food',
        desc: "Order on Zomato",
        remarks: "Pizza",
    }
]
  return (
    <>
      <AddToDo />
      <Todolist todoitem={todo}/>
    </>
  )
}
