import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { EditedStudent } from '../features/StudentSlice';
const EditStudent = () => {
    const navigate=useNavigate();
   const dispatch=useDispatch();
   const data=useLocation();
   const studentId=data.state;
   console.log(studentId)
   const stdData=useSelector((state)=>state.Student.filter((item)=>item.id===studentId));
   const {Name,Age,Batch,Course}=stdData[0];

   const[newName,setName]=useState(Name)
    const[newAge,setAge]=useState(Age)
    const[newBatch,setBatch]=useState(Batch)
    const[newCourse,setCourse]=useState(Course)
          
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(EditedStudent({
            id:studentId,
           newName,
            newAge,
            newBatch,
            newCourse
        }))
       navigate('/student')
    }

  return (
    <>
    <form onSubmit={handlesubmit}>
<input type="text" value={newName} onChange={(e)=>{setName(e.target.value)}}/>
<input type="number" value={newAge} onChange={(e)=>{setAge(e.target.value)}}/>
<input type="text" value={newBatch} onChange={(e)=>{setBatch(e.target.value)}}/>
<input type="text" value={newCourse} onChange={(e)=>{setCourse(e.target.value)}}/>
<button className='btn'>Update</button>

<button className='btn2'>Cancel</button>
</form>
    </>
  )
}

export default EditStudent
