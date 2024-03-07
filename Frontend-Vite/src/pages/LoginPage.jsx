import React, { useContext, useState } from 'react'

import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AuthContext from '../context/AuthContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

const LoginPage = () => {

    let {setUser, setAuthTokens} = useContext(AuthContext)

    const navigate = useNavigate();

    let [loading, setLoading] = useState(false)

    let [showAlert, setShowAlert] = useState(false)

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    let loginUser = async (e) => {
        e.preventDefault();
        setLoading(true)
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        });
        let data = await response.json();
    
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            await delay(2000);
            setLoading(false)
            navigate("/");
        } else {
            await delay(2000)
            setShowAlert(true)
            setLoading(false)
        }
    };

    const handleClose = () => {
        setShowAlert(false)
    }

    const authimage = new URL('../assets/authimage.jpeg', import.meta.url).href

    return (
        <div className='bg-color-bg h-full relative'>
            <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Invalid username or password
                </Alert>
            </Snackbar>
            <div className='h-full w-full absolute md:h-3/4 md:top-24'>
                <div className='h-full mx-auto w-full md:max-w-3xl md:w-2/3 text-white bg-color-container md:flex'>
                    <img
                        src={authimage}
                        className='object-cover w-full h-1/3 md:w-1/2 md:h-full'
                    />
                    <div className='w-full md:w-1/2 md:h-full'>
                        <div className='m-4 text-center text-white'>
                            <h3>Sign In</h3>
                            <div className='mt-20 mb-5 flex justify-center gap-8'>
                                <GoogleIcon />
                                <GitHubIcon />
                            </div>
                            <small className='text-center'>
                                or
                            </small>
                            <form onSubmit={loginUser}>
                                <div className='mt-5 flex-col'>
                                    <input
                                        type='text'
                                        className="bg-color-container w-3/4 p-3 mb-6 border-2 border-white outline-none"
                                        placeholder="Username"
                                        name="username"
                                    />
                                    <input
                                        type='password'
                                        className="bg-color-container w-3/4 p-3 border-2 border-white outline-none"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                { loading ?
                                    <button type='button' disabled className='p-2 w-3/4 mt-10 bg-white'><CircularProgress size={22} color='secondary' /></button>
                                    :<button type='submit' className='p-2 w-3/4 mt-10 text-black bg-white border-white border-2 hover:bg-color-container hover:text-white'>Log In</button>
                                }
                            </form>
                        </div>
                        <div className='text-center mt-10'>
                            <small>
                            Don't have an account?{" "}
                            <a href="/register" className='text-blue-200'>
                                Register here
                            </a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
