// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
// import style from './CSS Module/RealTime.module.css'

// export default function App() {
//   const [count, increase] = useState(0);
//   const [power, calculate] = useState(1);

//   // useEffect(()=>{
//   //   let timer = setTimeout(()=>{
//   //   increase(count+1)
//   // },1000)});

//   useEffect(() => {
//     setTimeout(() => {
//       calculate(count * count)
//     })}, [count])


//     return (
//       <>

//         <center>
//           <h1>You clicked {count} times</h1>
//           <Button className={`${style.button}`} onClick={()=>{increase(count+1)}}>Click Here</Button>
//           <h2>The power of {count} is {power}</h2>

//         </center>

//       </>
//     )
//   }

import React from 'react'
import YouTube from './YouTube'

export default function App() {
  return (
    <YouTube/>
  )
}
