import '../App.css'

export default function GeneralInfo (){



    return (
        <form>
            <fieldset>
                <legend>General Information</legend>
                <input
                    type='text'
                    placeholder='First Name'
                />
               <input
                    type='text'
                    placeholder='Last Name'
                />
                <input
                    type='text'
                    placeholder='email'
                />
                <input
                    type='text'
                    placeholder='phone'
                />
            </fieldset>
        </form>
    )
}