import loginImg from '../../assets/secondaryImg.jpg'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div style={{ backgroundImage: `url(${loginImg})` }} className='bg-cover'>
            <div className='mx-auto bg-[#0c0c0c4f]' >
                <div className=" min-h-screen py-5">
                    <div className="hero-content flex-col ">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ffffff9d] mx-auto ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#FF325E]">
                                    <h1 className="text-5xl font-bold text-center text-white">SignUp</h1>
                                </div>
                                <form className="card-body" >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="photo Url" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered " required />
                                        {/* <label className="label">
                                            <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                        </label> */}
                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#FF325E]">SignUp</button>
                                    </div>
                                </form>
                                <div className='flex justify-center items-center gap-1 -mt-6'>
                                    <div className='h-[1px] w-[50px] bg-[#FF325E]'></div>
                                    <div>or</div>
                                    <div className='h-[1px] w-[50px] bg-[#FF325E]'></div>
                                </div>

                                <div className='flex justify-center mb-5 gap-2'>
                                    <p>I Have An Account.</p>
                                    <Link to={'/Login'} className='text-[#FF325E] font-bold'>Log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;