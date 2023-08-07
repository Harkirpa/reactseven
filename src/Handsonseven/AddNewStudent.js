import React, { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { AddStudent } from "../features/StudentSlice";
// import Student from "../Data";
import { useNavigate } from "react-router-dom";

const AddNewStudent=()=>{
   const studentList =useSelector((state)=>state.Student);
   const navigate=useNavigate();
   const dispatch=useDispatch();
    const[Name,setName]=useState('')
    const[Age,setAge]=useState('')
    const[Batch,setBatch]=useState('')
    const[Course,setCourse]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(AddStudent({
            id:studentList.length+1,
            Name,
            Age,
            Batch,
            Course
        }))
        setName('');
        setAge('');
        setBatch('');
        setCourse('');
    navigate('/student')

}
return (
    <>
<form  className='form' onSubmit={handlesubmit}>
<div className='lform'>
<input type="text"id='name' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div className='lform2'>
<input type="number" id='age' value={Age} onChange={(e)=>{setAge(e.target.value)}}/>
</div>
<div className='lform3'>
<input type="text" id='course'  value={Batch} onChange={(e)=>{setBatch(e.target.value)}}/>
</div>
<div className='lform4'>
<input type="text"id='batch' value={Course} onChange={(e)=>{setCourse(e.target.value)}}/>
</div>
<button className="submit">Submit</button>
<button className='btn2'>Cancel</button>
</form>
</>
)
}
export default AddNewStudent;