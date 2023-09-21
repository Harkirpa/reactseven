import {createSlice} from "@reduxjs/toolkit";
const initialState=[
    {
        "id": 1,
        "Name": "John",
        "Age": "24",
        "Course": "MERN",
        "Batch": "October"
    },
    {
        "id": 2,
        "Name": "Doe",
        "Age": "25",
        "Course": "MERN",
        "Batch": "November"
    },
    {
        "id": 3,
        "Name": "Biden",
        "Age": "26",
        "Course": "MERN",
        "Batch": "September"
    },
    {
        "id": 4,
        "Name": "Barar",
        "Age": "22",
        "Course": "MERN",
        "Batch": "September"
    },
    {
        "id": 5,
        "Name": "Christ",
        "Age": 23,
        "Course": "MERN",
        "Batch": "October"
    },
    {
        "id": 6,
        "Name": "Elent",
        "Age": 24,
        "Course": "MERN",
        "Batch": "November"
    },
]

const StudentSlice=createSlice({
    name:"Student",
    initialState,
    reducers:{
    AddStudent:(state,action)=>{
        state.push(action.payload);
    },
    EditedStudent:(state,action)=>{
        const {id,newName,newAge,newCourse,newBatch}=action.payload;
        const existingStudent=state.find((student)=>student.id===id);
        existingStudent.Name=newName;
        existingStudent.Age=newAge;
        existingStudent.Batch=newBatch;
        existingStudent.Course=newCourse;  
    }
    }
})
export default StudentSlice.reducer;
export const {AddStudent,EditedStudent}=StudentSlice.actions