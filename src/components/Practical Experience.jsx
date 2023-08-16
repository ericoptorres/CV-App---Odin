import '../App.css'
import {useState} from 'react'

export default function PracticalExp ({getUserData}){

    const [formData, setFormData] = useState(
        {
            company: '',
            position: '',
            years: '' ,
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
                <legend>Work Experience</legend>
                <input
                    type='text'
                    placeholder='Company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                />
               <input
                    type='text'
                    placeholder='Position'
                    name='position'
                    value={formData.position}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Years'
                    name='years'
                    value={formData.years}
                    onChange={handleChange}
                />
            </fieldset>
            <button onClick={handleSubmit}>Submit</button>

        </form>
    )
}