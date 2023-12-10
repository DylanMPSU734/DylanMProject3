import {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {adminAddTenant, adminEditTenant, adminDelTenant, adminAddStaff, adminDelStaff} from '../store/authSlice'
import {Navigate} from 'react-router-dom';


const Admin = () =>{
    const [addTenant, setAddTenant] = useState(true)
    const [editTenant, setEditTenant] = useState(false)    
    const [delTenant, setDelTenant] = useState(false)
    const [addStaff, setAddStaff] = useState(false)
    const [delStaff, setDelStaff] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [apartment, setApartment] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [selectUserId, setSelectUserId] = useState(-1)

    const userId = useSelector((state) => state.auth.userId)
    
    const dispatch = useDispatch()

    const clickAddTenant = () => {
      setAddTenant(true)
      setEditTenant(false)
      setDelTenant(false)
      setAddStaff(false)
      setDelStaff(false)
      clearVars()
    }
    const clickEditTenant = () => {
      setAddTenant(false)
      setEditTenant(true)
      setDelTenant(false)
      setAddStaff(false)
      setDelStaff(false)
      clearVars()
    }
    const clickDelTenant = () => {
      setAddTenant(false)
      setEditTenant(false)
      setDelTenant(true)
      setAddStaff(false)
      setDelStaff(false)
      clearVars()
    }
    const clickAddStaff = () => {
      setAddTenant(false)
      setEditTenant(false)
      setDelTenant(false)
      setAddStaff(true)
      setDelStaff(false)
      clearVars()
    }
    const clickDelStaff = () => {
      setAddTenant(false)
      setEditTenant(false)
      setDelTenant(false)
      setAddStaff(false)
      setDelStaff(true)
      clearVars()
    }

    const clearVars = () => {
      setUsername('')
      setPassword('')
      setName('')
      setApartment('')
      setPhone('')
      setEmail('')
      setSelectUserId(-1)
    }

    const submitAddTenant = (e) => {
      e.preventDefault();
      dispatch(adminAddTenant({username, password, name, apartment, phone, email}))
          .then(() =>{
   
      })
    }

    const submitEditTenant = (e) => {
      e.preventDefault();
      dispatch(adminEditTenant({selectUserId, apartment}))
          .then(() =>{
   
      })
    }

    const submitDelTenant = (e) => {
      e.preventDefault();
      dispatch(adminDelTenant({selectUserId}))
          .then(() =>{
   
      })
    }

    const submitAddStaff = (e) => {
      e.preventDefault();
      dispatch(adminAddStaff({username, password, name, phone, email}))
          .then(() =>{
   
      })
    }

    const submitDelStaff = (e) => {
      e.preventDefault();
      dispatch(adminDelStaff({selectUserId}))
          .then(() =>{
   
      })
    }


    return (
      <div>
        <div className= 'border border-black p-1'>
          {userId ? null : <Navigate to= '/login' replace={true}></Navigate>}
          <h1 className='flex items-center justify-center text-xl '>Admin</h1>
          <br />
          <div className='flex items-center justify-center'>

            {addTenant ? null : <button className= 'border border-black mx-5 p-1' onClick={clickAddTenant}>Add Tenant</button>}
            {editTenant ? null : <button className= 'border border-black mx-5 p-1' onClick={clickEditTenant}>Edit Tenant</button>}
            {delTenant ? null : <button className= 'border border-black mx-5 p-1' onClick={clickDelTenant}>Delete Tenant</button>}
            {addStaff ? null : <button className= 'border border-black mx-5 p-1' onClick={clickAddStaff}>Add Staff</button>}
            {delStaff ? null : <button className= 'border border-black mx-5 p-1' onClick={clickDelStaff}>Delete Staff</button>}
          </div>
        </div>
          {addTenant ? 
            <div> 
              <h1 className='flex items-center justify-center text-xl '>Add Tenant</h1>
              <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100'>
                <label for=" Username">Username</label>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Username" name="Username"
                  onChange={(e) => setUsername(e.target.value)} />
                <br />
                <lable for="Password">Password</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="password" id="Password" name="Password" 
                  onChange={(e) => setPassword(e.target.value)} />
                <br />
                <lable for="Name">Name</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Name" name="Name"
                  onChange={(e) => setName(e.target.value)} />
                <br />
                <lable for="Apartment">Apartment</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="number" id="Apartment" name="Apartment"
                  onChange={(e) => setApartment(e.target.value)} />
                <br />
                <lable for="Phone">Phone</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Phone" name="Phone"
                  onChange={(e) => setPhone(e.target.value)} />
                <br />
                <lable for="Email">Email</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Email" name="Email"
                  onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <button className= 'border border-black mx-5 p-1' onClick={submitAddTenant}>Submit</button>
              </form>
            </div>
            : null}

          {editTenant ? 
            <div> 
              <h1 className='flex items-center justify-center text-xl '>Edit Tenant</h1>
              <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100'>
                <label for=" UserId">Tenant Id</label>
                <br />
                <input className= 'mx-auto outline-none ' required type="number" id="UserId" name="UserId"
                  onChange={(e) => setSelectUserId(e.target.value)} />
                <br />
                <lable for="Apartment">New Apartment</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="number" id="Apartment" name="Apartment"
                  onChange={(e) => setApartment(e.target.value)} />
                <br />
                <br />
                <button className= 'border border-black mx-5 p-1' onClick={submitEditTenant}>Submit</button>
              </form>
            </div>
            : null}

          {delTenant ? 
            <div> 
              <h1 className='flex items-center justify-center text-xl '>Delete Tenant</h1>
               <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100'>
                <label for=" UserId">Tenant Id</label>
                <br />
                <input className= 'mx-auto outline-none ' required type="number" id="UserId" name="UserId"
                  onChange={(e) => setSelectUserId(e.target.value)} />
                <br />
                <br />
                <button className= 'border border-black mx-5 p-1' onClick={submitDelTenant}>Delete</button>
              </form>
            </div>
            : null}

          {addStaff ? 
            <div> 
              <h1 className='flex items-center justify-center text-xl '>Add Staff</h1>
              <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100'>
                <label for=" Username">Username</label>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Username" name="Username"
                  onChange={(e) => setUsername(e.target.value)} />
                <br />
                <lable for="Password">Password</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="password" id="Password" name="Password" 
                  onChange={(e) => setPassword(e.target.value)} />
                <br />
                <lable for="Name">Name</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Name" name="Name"
                  onChange={(e) => setName(e.target.value)} />
                <br />
                <lable for="Phone">Phone</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Phone" name="Phone"
                  onChange={(e) => setPhone(e.target.value)} />
                <br />
                <lable for="Email">Email</lable>
                <br />
                <input className= 'mx-auto outline-none ' required type="text" id="Email" name="Email"
                  onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <button className= 'border border-black mx-5 p-1' onClick={submitAddStaff}>Submit</button>
              </form>
            </div>
            : null}

          {delStaff ? 
            <div> 
              <h1 className='flex items-center justify-center text-xl '>Delete Staff</h1>
              <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100'>
                <label for=" UserId">Staff Id</label>
                <br />
                <input className= 'mx-auto outline-none ' required type="number" id="UserId" name="UserId"
                  onChange={(e) => setSelectUserId(e.target.value)} />
                <br />
                <br />
                <button className= 'border border-black mx-5 p-1' onClick={submitDelStaff}>Delete</button>
              </form>
            </div>
            : null}

        
      </div>
    )
  }
  
  export default Admin;