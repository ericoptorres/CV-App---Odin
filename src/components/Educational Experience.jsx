import '../App.css'
import {useState} from 'react'

export default function EducationalExp ({getUserData}){

    const [formData, setFormData] = useState(
        {
            school: '',
            degree: '',
            date: '' 
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        getUserData(formData)
    }


    return (
        <form>
            <fieldset>
                <legend>Education </legend>
                <input
                    type='text'
                    placeholder='School/University'
                    name='school'
                    value={formData.school}
                    onChange={handleChange}
                />
               <input
                    type='text'
                    placeholder='Degree'
                    name='degree'
                    value={formData.degree}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Date of study'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                />
            </fieldset>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}