import {NavBar} from '../components/NavBar';
import { useEffect, useState, useCallback } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

function Login(){
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
       console.log('render Login') 
        const token = Cookies.get('token');
        if(token){
            navigate('/');
        }
    }, [success]);
    
    const validateInput = useCallback((ev) => {
        ev.target.name === 'username' && setUsername(ev.target.value);
        ev.target.name === 'password' && setPassword(ev.target.value);
    }, [username, password])

    const sendCredentials = async (ev) => {
        ev.preventDefault();
        // Test local
        if(!username || !password) return setErrorMessage('username and password are required'); 

        Cookies.set('token', `${username}-${new Date().getTime()}`)
        setSuccess(true);
        setUsername('');
        setPassword('');
    }

    return (
        <>
            <NavBar />
            <form onSubmit={sendCredentials}>
                <div>
                    <input 
                        type="text" 
                        onChange={validateInput} 
                        value={username}
                        name="username" 
                        autoComplete="off" 
                        placeholder="Username"
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
