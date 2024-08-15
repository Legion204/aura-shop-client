import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handelRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email,password);
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Your <span className='text-[#8338ec]'>Aura Shop</span> Account</h1>
                        <h1 className="text-3xl font-bold pt-6">Join our community and start shopping today!</h1>
                        <p className="py-6">
                        Fill in the details to create your account and enjoy exclusive offers, personalized recommendations, and more.
                        </p>
                        <p>Already have an account? <Link to={'/'} className='text-blue-500 underline'>Login</Link> to continue shopping.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn text-white bg-[#8338ec]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;