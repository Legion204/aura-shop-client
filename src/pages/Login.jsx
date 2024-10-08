import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
    const { userLogin, signInGoogle } = useAuth();
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // user login
        userLogin(email, password)
            .then(() => {
                toast.success("Login successfully")
                navigate('/products')
            })
            .catch(() => {
                toast.error("Login filed")
            })

        e.target.reset();
    };

    const handleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                navigate('/products');
                toast.success("login successfully")
            })
            .catch(() => {
                toast.error("Invalid credentials")
            })
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login To Your <span className='text-[#8338ec]'>Aura Shop</span> Account</h1>
                        <p className="py-6">
                            We're glad to see you again. Please enter your details to continue shopping.
                        </p>
                        <p>Don't have an account? <Link to={'/register'} className='text-blue-500 underline'>Register</Link> to create a new one.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn text-white bg-[#8338ec]">Login</button>
                            </div>
                            <button onClick={handleGoogleLogin} className=' btn w-20 rounded-full p-2 text-white bg-[#8338ec]'>Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;