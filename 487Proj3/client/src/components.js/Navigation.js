
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../store/authSlice'

export default function Navigation() {
    const loggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    return(
        <nav className='flex items-center justify-between w-full h-16 py-2 border-b px-28 border-black'>
            <label className= 'text-2xl font-medium'>
                Maintenance Request App
            </label>
            {loggedIn ?
                <ul className='flex items-center h-16 text-xl'>
                    <li className='pl-20'><Link to='/login' onClick={()=> dispatch(logout())}>Log out</Link></li>
                </ul>
                :
                <ul className='flex items-center h-16 text-xl'>
                    <li className='pl-20'><Link to='/login'>Log In</Link></li>
                </ul>
            }
        </nav>
    )
} 