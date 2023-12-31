import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const StudentData = () => {
    const navigate=useNavigate();
    const data=useSelector((state)=>state.Student);
     console.log(data);
  return (
    <div>
    
    <table>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
      </tr>
      {
          data.map((item,index)=>
          {
              return(
                  <tr key={index} >
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Course}</td>
                      <td>{item.Batch}</td>
                      <td><button className='edited' onClick={()=>{const id=item.id; navigate('/editstudent',{state:id})}}>Edit</button></td>
                  </tr>
                  
              )
              
          }
          )
      }
    </table>
  </div>

  )
}

export default StudentData
