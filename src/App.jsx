//import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import EducationalExp from './components/Educational Experience'
import GeneralInfo from './components/General Info'
import PracticalExp from './components/Practical Experience'
import Resume from './components/Resume'
import { useState, useEffect } from 'react'

function App() {

  const selectedImage = null

  const [data, setData] = useState({})

  const childToParent = (childData) => {
    return setData(oldData => {
      return {
                ...oldData, 
                ...childData
              }})
  }
 
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <div className='all'>
        <div className='info'>
            <GeneralInfo getUserData={childToParent}/>
            <EducationalExp getUserData={childToParent}/>
            <PracticalExp getUserData={childToParent}/>
        </div>

       <section className='main-content'>
        <Card url={selectedImage} personalInfo={data} />
        <Resume experienceInfo={data}/>
       </section>
      </div>
    </>
  )
}

export default App
