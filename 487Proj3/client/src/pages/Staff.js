import {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {staffSearch} from '../store/authSlice'
import {Navigate} from 'react-router-dom';
import axios from 'axios';

const Staff = () => {
    
  const [status, setStatus] = useState('All')
  const [apartment, setApartment] = useState('')    
  const [location, setLocation] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const userId = useSelector((state) => state.auth.userId)
  const error = useSelector((state) => state.auth.error)

  const dispatch = useDispatch()

  const [data, setData] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:8080/staff')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])



  const submitHandler = e => {
    e.preventDefault();

    
    dispatch(staffSearch({status, apartment, location, dateStart, dateEnd}))
      .then(res =>{
        setData(res.payload)
      })   
  }

  const setCompleted = (requestId, index, status) => {
    if(status != 'Completed'){
      axios.post("http://localhost:8080/staff-complete-request", {requestId: requestId, userId: userId})
      .then( (res) => {
        
      })
    }

  }


    
  return (
    <div>
      {userId ? null : <Navigate to= '/login' replace={true}></Navigate>}
      <h1 className= 'flex items-center justify-center text-xl'>Staff Portal</h1>
      <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100' onSubmit={submitHandler}>
        <h2 className= 'flex items-center justify-center'>Search</h2>
        <p>          
          <label for="Status">Status</label>
          <br />
          <select onChange={(e) => setStatus(e.target.value)} className= 'mx-auto outline-none '> 
            <option className= 'mx-auto outline-none ' >All</option>
            <option className= 'mx-auto outline-none '>Pending</option>
            <option className= 'mx-auto outline-none '>Completed</option>
          </select>
          <br />

          <lable for="Apartment">Apartment</lable>
          <br />
          <input onChange={(e) => setApartment(e.target.value)} className= 'mx-auto outline-none ' type="number" id="Apartment" name="Apartment" />
          <br />

          <label for="Location">Location</label>
          <br />
          <input onChange={(e) => setLocation(e.target.value)} className= 'mx-auto outline-none ' type="text" id="Location" name="Location" />
          <br />

          <label for="DateStart">From</label>
          <br />
          <input onChange={(e) => setDateStart(e.target.value)} className= 'mx-auto outline-none ' type="datetime-local" id="Status" name="Status" />
          <br />

          <label for="DateEnd">Until</label>
          <br />
          <input onChange={(e) => setDateEnd(e.target.value)} className= 'mx-auto outline-none ' type="datetime-local" id="DateEnd" name="DateEnd" />
          <br />
          <br />

          <div class="Search">
            <button className='flex items-center justify-center border border-black'>Search</button>
          </div>
          <br />
          {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
        </p>

      </form>
      
        <table className= 'w-2/3 mx-auto mb-16'>
          <thead> 
            <th>Status</th>
            <th>Opened</th>
            <th>Tenant</th>
            <th>Apartment</th>
            <th>Location</th>
            <th>Description</th>
            <th>Photo </th>
          </thead>
          <tbody>
            {
              data.map((user, index) => {
                return <tr key={index}>
                  <td className="hover:cursor-pointer border border-black text-center" 
                  onClick={ () => setCompleted(user.request_id, index, user.status)}>{user.status}</td>
                  <td className="border border-black text-center">{user.created}</td>
                  <td className="border border-black text-center">{user.tenant_id}</td>
                  <td className="border border-black text-center">{user.apartment}</td>
                  <td className="border border-black text-center">{user.location}</td>
                  <td className="border border-black text-center">{user.description}</td>
                  <td className="border border-black text-center"><img src={user.photo} width="125" height="100"></img></td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
    )
  }
  
  export default Staff;
