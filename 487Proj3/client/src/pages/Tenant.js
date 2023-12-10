import {useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {submitReq } from '../store/authSlice'
import {Navigate} from 'react-router-dom';

const Tenant = () => {
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')    
    const [photo, setPhoto] = useState('')
    const [message, setMessage] = useState('')

    const userId = useSelector((state) => state.auth.userId)
    const error = useSelector((state) => state.auth.error)

    const dispatch = useDispatch()
    console.log(userId)
    console.log("test")
    
    const submitHandler = e => {
        e.preventDefault();
        dispatch(submitReq({userId, location, description, photo}))
        .then(() =>{
            if(error == null){
                setMessage("Your request has been taken")
            }
            else{
                setMessage(error)
                setMessage('')
            }
            setLocation('');
            setDescription('');
            setPhoto('');
        })
    }

    return (
        

      <div>
            {userId ? null : <Navigate to= '/login' replace={true}></Navigate>}
            <h1 className= 'flex items-center justify-center'>Welcome</h1>
            {message ? <p className='text-xl pt-10 text-center'>{message}</p> : null}
            {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
            <form className= 'mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-black mt-10 h-100' onSubmit={submitHandler}>
                <h2 className= 'flex items-center justify-center'> Request Form</h2>
                <p>
                    <label  className= 'mx-auto content-center' for="Location">Location</label>
                    <br />
                    <input   className= 'mx-auto outline-none ' required type="text" id="Location" name="Location" 
                    value = {location} onChange={(e) => setLocation(e.target.value)}/>
                    <br />
                    <lable   className= 'mx-auto' for="Description">Description</lable>
                    <textarea className="w-full p-4 outline-none h-28 " required id="Description" name="Description" rows="2" cols="50" 
                    value = {description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <br />
                    <label   className= 'mx-auto' for=" Photo">Photo</label>
                    <textarea className="w-full p-4 outline-none h-28 " id="Photo" name="Photo" rows="2" cols="50" 
                    value = {photo} onChange={(e) => setPhoto(e.target.value)}></textarea>

                </p>
                <p>
                    <div class="MakeRequest">
                        <button className= 'flex items-center justify-center border border-black'>Submit</button>
                    </div>
                    <br />
                    <lable className= 'flex items-center justify-center' for="Error"></lable>
                </p>
            </form>
            
      </div>
    )
  }
  
  export default Tenant;