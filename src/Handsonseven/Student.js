import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router-dom'

const Student = () => {
    const navigate=useNavigate();
  return (
   <>
   <h1 className='home'>Student Details</h1>
   <button className='newstu' onClick={()=>navigate('/addnewstudent')}>Add New Student</button>
   <StudentData/>
   </>
  )
}

export default Student
