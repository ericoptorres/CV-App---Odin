import '../App.css'
import picture from '../assets/test.jpg'


export default function Card (props){
    //let url = props.url ? props.url : picture
    
    return (
        <div className='card'>

            <img src={picture} className='icon'></img>
            <h4>{props.personalInfo.firstName}</h4>
            <h4>{props.personalInfo.lastName}</h4>
            <hr></hr>

            {props.personalInfo.degree || <p>Software Developer</p>}
            <h5>Contact</h5>
            <hr></hr>
            <p>{props.personalInfo.phone}</p>
            <p>{props.personalInfo.email}</p>
         </div>
    )
}