import { FcGoogle } from 'react-icons/fc'
import loginImg from '../../assets/secondaryImg.jpg'
// import { AiFillGithub } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state)
    const { handleSignIn, handleGoogleSignIn } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value

        // console.log(email, password)

        handleSignIn(email, password)
            .then((res) => {
                toast.success("successfully Login")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast.error("Your Email or Password doesn't match ")

            })
    }

    const handleGoogleLogIN = () => {
        handleGoogleSignIn()
            .then(result => {
                toast.success("successfully login")
                navigate(location?.state ? location.state : '/')

            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    console.log(name)
    return (
        <div style={{ backgroundImage: `url(${loginImg})` }} className='bg-cover'>
            <div className='mx-auto bg-[#0c0c0c4f]' >
                <div className=" min-h-screen py-10">
                    <div className="hero-content flex-col ">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ffffff9d] ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#FF325E]">
                                    <h1 className="text-5xl font-bold text-center text-white">Login</h1>
                                </div>
                                <form className="card-body" onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered " name='password' required />
                                        {/* <label className="label">
                                            <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                        </label> */}
                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#FF325E]" type='submit'>Login</button>
                                    </div>
                                </form>
                                <div className='flex justify-center items-center gap-1 -mt-6'>
                                    <div className='h-[1px] w-[50px] bg-[#FF325E]'></div>
                                    <div>or</div>
                                    <div className='h-[1px] w-[50px] bg-[#FF325E]'></div>
                                </div>
                                <div className='mb-3 mt-2'>
                                    <div className='flex justify-center items-center border mx-9 rounded-lg py-2 gap-2' onClick={handleGoogleLogIN}>
                                        <FcGoogle className='text-2xl'></FcGoogle>
                                        <p className='font-bold'>Log In With Google</p>
                                    </div>

                                </div>
                                <div className='flex justify-center mb-5 gap-2'>
                                    <p>Don't Have An Account.?</p>
                                    <Link to={'/register'} className='text-[#FF325E] font-bold'>Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login; 10