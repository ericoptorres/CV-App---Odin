import '../App.css'
import { useState } from 'react'

export default function GeneralInfo ({getUserData}){

    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '' ,
            phone: '' 
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
                <legend>General Information</legend>
                <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                />
               <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
            </fieldset>

            <button onClick={handleSubmit}>Submit</button>
           


        </form>
    )
}


