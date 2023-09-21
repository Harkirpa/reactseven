import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';
const RouteCompo = () => {
  return (
    <BrowserRouter>
     <div className='navbar'>
      <Link to='/' className='element'>Home</Link>
      <Link to='/student'className='element'>Students</Link>
      <Link to='/contact'className='element'>Contact Us</Link>
    </div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
     </Routes>
 </BrowserRouter>
  )
}

export default RouteCompo