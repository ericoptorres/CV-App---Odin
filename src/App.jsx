//import { useState } from 'react'
import './App.css'
import EducationalExp from './components/Educational Experience'
import GeneralInfo from './components/General Info'
import PracticalExp from './components/Practical Experience'

function App() {
  

  return (
    <>
      <div className='all'>
        <div className='info'>
            <GeneralInfo />
            <EducationalExp />
            <PracticalExp />
        </div>

       <section>Main</section>
      </div>
    </>
  )
}

export default App
