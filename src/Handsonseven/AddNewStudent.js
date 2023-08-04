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
            Id:studentList.length,
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
<form onSubmit={handlesubmit}>
<input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
<input type="number" value={Age} onChange={(e)=>{setAge(e.target.value)}}/>
<input type="text" value={Batch} onChange={(e)=>{setBatch(e.target.value)}}/>
<input type="text" value={Course} onChange={(e)=>{setCourse(e.target.value)}}/>
<button className="submit">Submit</button>
<button className='btn2'>Cancel</button>
</form>
</>
)
}
export default AddNewStudent;