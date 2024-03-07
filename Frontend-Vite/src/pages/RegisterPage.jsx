import React, {useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const navigate = useNavigate();

    let [loading, setLoading] = useState(false)

    let [showAlert, setShowAlert] = useState(false)

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const alertMessage = useRef("")

    let registerUser = async (e) => {
        e.preventDefault();
        setLoading(true)

        let data = JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
            password2: e.target.confirm_password.value,
            email: e.target.email.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
        });
        // let response = await fetch("http://127.0.0.1:8000/api/register/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: res,
        // });

        let response = await axios.post(
            'http://127.0.0.1:8000/api/register/',
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        ).then(async (response) => {
            await delay(2000);
            setLoading(false)
            navigate("/login");
        })
        .catch(async (error) => {
            console.log(error.response.data);
            await delay(2000)
            setShowAlert(true)
            setLoading(false)
        })

    }

    const authimage = new URL('../assets/authimage.jpeg', import.meta.url).href

    const handleClose = () => {
        setShowAlert(false)
    }

    return (
        <div className='bg-color-bg h-full relative'>
            <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Something went wrong.
                </Alert>
            </Snackbar>
            <div className='h-full w-full absolute md:h-3/4 md:top-24'>
                <div className='h-full mx-auto w-full md:max-w-4xl md:w-2/3 text-white bg-color-container md:flex'>
                    <img
                        src={authimage}
                        className='object-cover w-full h-1/3 md:w-2/5 md:h-full'
                    />
                    <div className='w-full md:w-3/5 md:h-full'>
                        <div className='mt-5 text-center text-white'>
                            <p className='text-center mb-3'>Sign up using : </p>
                            <div className='mb-3 flex justify-center gap-8'>
                                <GoogleIcon />
                                <GitHubIcon />
                            </div>
                            <small className='text-center'>
                                or
                            </small>
                            <form onSubmit={registerUser}>
                                <div className='mt-5 flex-col'>

                                    <div className='w-3/4 mx-auto flex justify-between'>
                                        <input 
                                            type="text" 
                                            className='w-[48%] bg-color-container p-2 mb-6 border-2 border-white outline-none'
                                            placeholder='First Name'
                                            name='first_name'
                                        />
                                        <input 
                                            type="text" 
                                            className='w-[48%] bg-color-container p-2 mb-6 border-2 border-white outline-none'
                                            placeholder='Last Name'
                                            name='last_name'
                                        />
                                    </div>

                                    <input
                                        type='text'
                                        className="bg-color-container w-3/4 p-2 mb-5 border-2 border-white outline-none"
                                        placeholder="Username"
                                        name="username"
                                    />
                                    <input
                                        type='email'
                                        className="bg-color-container w-3/4 p-2 mb-5 border-2 border-white outline-none"
                                        placeholder="Email"
                                        name="email"
                                    />
                                    <input
                                        type='password'
                                        className="bg-color-container w-3/4 p-2 mb-5 border-2 border-white outline-none"
                                        placeholder="Password"
                                        name="password"
                                    />
                                    <input
                                        type='password'
                                        className="bg-color-container w-3/4 p-2 border-2 border-white outline-none"
                                        placeholder="Confirm Password"
                                        name="confirm_password"
                                    />
                                </div>
                                { loading ?
                                    <button type='button' disabled className='p-2 w-3/4 mt-6 mb-2 bg-white'><CircularProgress size={22} color='secondary' /></button>
                                    :<button type='submit' className='p-2 w-3/4 mt-6 mb-2 text-black bg-white border-white border-2 hover:bg-color-container hover:text-white'>Log In</button>
                                }
                                <div className='w-3/4 mx-auto text-left'>
                                    <small>
                                        Already have an account?{" "}
                                        <a href="/login" className='text-blue-200'>
                                            Sign in here
                                        </a>
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPage
