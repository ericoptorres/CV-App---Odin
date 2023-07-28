//import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import EducationalExp from './components/Educational Experience'
import GeneralInfo from './components/General Info'
import PracticalExp from './components/Practical Experience'
import Resume from './components/Resume'

function App() {
  

  return (
    <>
      <div className='all'>
        <div className='info'>
            <GeneralInfo />
            <EducationalExp />
            <PracticalExp />
        </div>

       <section className='main-content'>
        <Card />
        <Resume />
       </section>
      </div>
    </>
  )
}

export default App
