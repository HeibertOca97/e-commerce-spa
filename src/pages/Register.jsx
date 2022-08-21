import {NavBar} from '../components/NavBar';
import { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

function Register(){
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
       console.log('render register') 
        const token = Cookies.get('token');
        token && navigate('/');
        
    }, [success, errorMessage]);
    
    const validateInput = useCallback((ev) => {
        ev.target.name === 'fullname' && setFullName(ev.target.value);
        ev.target.name === 'email' && setEmail(ev.target.value);
        ev.target.name === 'password' && setPassword(ev.target.value);
    }, [fullName, email, password])

    const sendRegister = async (ev) => {
        ev.preventDefault();
        // Test local
        if(!fullName || !email || !password) return setErrorMessage('All Inputs are required!'); 
        if(users.data.find(data => data.email === email)) return setErrorMessage("There is already an account registered with your email address");

        dispatch(register({ fullName, email, password }))

        setFullName('');
        setEmail('');
        setPassword('');     
        setSuccess(true);
        setErrorMessage('');
        //if(!success) return setErrorMessage(auth.message);


    }

    return (
        <>
            <NavBar />
            <form onSubmit={sendRegister}>
                <div>
                    <input 
                        type="text" 
                        onChange={validateInput} 
                        value={fullName} 
                        name="fullname" 
                        autoComplete="off" 
                        placeholder="Full name"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        onChange={validateInput} 
                        value={email}
                        name="email" 
                        autoComplete="off" 
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        onChange={validateInput} 
                        value={password}
                        name="password" 
                        autoComplete="off" 
                        placeholder="Password"
                    />
                </div>
                <button>Register</button>
                {
                    !success && <p>{errorMessage}</p>
                }
            </form>
        </>

    );
}

export default Register;
