import '../App.css'

export default function Resume({experienceInfo}) {


    
    return (
        <div className='resume'>
            <h3>Work Experience</h3>
            <hr></hr>
            <div>            
                <span>{experienceInfo.years}</span>
                <span>{experienceInfo.company}</span>
            </div>


            <h3>Education</h3>
            <hr></hr>
            <div>
                <span>{experienceInfo.date}</span>
                <span>{experienceInfo.school}</span>
            </div>

        </div>
    )
}