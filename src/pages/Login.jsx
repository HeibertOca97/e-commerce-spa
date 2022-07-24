import {NavBar} from '../components/NavBar';
import { useEffect, useState, useCallback } from 'react'
import {request} from '../libs/axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

function Login(){
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
       console.log('render useEffect') 
        const {value, exp} = JSON.parse(Cookies.get('token'));
        if(value && new Date().getTime() < exp){
            navigate('/');
        }
    }, []);
    
    const validateInput = useCallback((ev) => {
        ev.target.name === 'username' && setUsername(ev.target.value);
        ev.target.name === 'password' && setPassword(ev.target.value);
    }, [username, password])
    
    const sendCredentials = async (ev) => {
        ev.preventDefault();
        console.log('send');
        if(!username || !password) return setErrorMessage('username and password are required'); 
        try{
            const response = await request.post('/auth/login', {
                username,
                password
            });
            const {success, data} = response.data;
            const {token, refreshToken} = data;
            console.log(data);
            console.log(new Date(token.exp))
            Cookies.set('token', JSON.stringify(token))
            Cookies.set('refreshToken', JSON.stringify(refreshToken))
            setSuccess(success);
            setUsername('');
            setPassword('');
        }catch(err){ 
            const { data, status } = err.response;
            console.log(data);
            if(status === 400 || status === 401){
                setSuccess(data.success);
                setErrorMessage(data.error);
            }
        }

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
                    !success ? <p>{errorMessage}</p> : <p>Login</p>
                }
            </form>
        </>

    );
}

export default Login;
