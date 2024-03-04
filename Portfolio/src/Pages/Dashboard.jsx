import React from 'react'
import Desc from './Desc'
import Qualification from './Qualification'
import Projects from './Projects'


export default function Dashboard() {
  return (
    <div className='container'>
      <Desc/>
      <Qualification/>
      <Projects/>
    </div>
  )
}
