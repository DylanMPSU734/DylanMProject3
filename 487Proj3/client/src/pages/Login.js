import {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import {login} from '../store/authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const admin = useSelector((state) => state.auth.admin)
  const staff = useSelector((state) => state.auth.staff)
  const tenant = useSelector((state => state.auth.tenant))
  const error = useSelector((state => state.auth.error))
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login({username, password}))
    .then(() =>{
      setUsername('');
      setPassword('');
    })
  }

  return (
    <div>
      
      <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-36 h-84' 
      onSubmit={submitHandler}>
        <h3 className='pd-6 text-2xl text-center'>Sign In</h3>

        <label className='block mb-1 text-xl' htmlFor='username'>Username</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='username' required type = 'text' 
        value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className='block mb-1 text-xl' htmlFor='password'>Password</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='password' required type = 'password' 
        value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='flex justify-between'>
          <button className='px-3 py-1 rounded-sm bg-white' type= 'submit'>Submit</button>
        </div>
        {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
        {admin ? <Navigate to= '/admin' replace={true}  /> :null}
        {tenant ? <Navigate to= '/tenant' replace={true}  /> :null}
        {staff ? <Navigate to= '/staff' replace={true}  /> :null}
      </form>
      
    </div>
    
  )
}

export default Login;
