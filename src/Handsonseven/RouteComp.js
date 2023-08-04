import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import { Route,Routes } from 'react-router-dom'
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';
const RouteCompo = () => {
  return (
    
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
     </Routes>

  )
}

export default RouteCompo