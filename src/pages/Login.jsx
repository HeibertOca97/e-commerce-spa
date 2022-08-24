import { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login(){
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
       console.log('render Login') 
        const token = Cookies.get('token');
        token && navigate('/');
    }, [success, errorMessage]);
    
    const validateInput = useCallback((ev) => {
        ev.target.name === 'email' && setEmail(ev.target.value);
        ev.target.name === 'password' && setPassword(ev.target.value);
    }, [email, password])

    const sendCredentials = async (ev) => {
        ev.preventDefault();
        // Test local
        if(!email || !password) return setErrorMessage('email and password are required'); 
        if(!users.data.find(data => data.email === email) || !users.data.find(data => data.password === password)) return setErrorMessage("Credentials incorrect!");
            
        dispatch(login({ email, password }))
        setEmail('');
        setPassword('');
        setSuccess(true);
        setErrorMessage('');
    }

    return (
        <>
            <form onSubmit={sendCredentials}>
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
                <button>Signin</button>
                {
                    !success && <p>{errorMessage}</p>
                }
            </form>
        </>

    );
}

export default Login;
