import '../App.css'
import {useState} from 'react'
import picture from '../assets/test.jpg'

export default function Card (){

    const [selectedImage, setSelectedImage] = useState(null)


    return (
        <div className='card'>
            <img src={selectedImage ? selectedImage : picture} alt="not found" className='icon'/>
            <h4>Full Name</h4>
            <hr></hr>
            <p>Software Developer</p>
            <h5>Contact</h5>
            <hr></hr>
            <p>phone </p>
            <p>email</p>
         </div>
    )
}