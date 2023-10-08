import { useContext } from 'react';
import loginImg from '../../assets/secondaryImg.jpg'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate=useNavigate()
    const { handleSignUp } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value
        const password = e.target.password.value

        const passUpperCase = /[A-Z]/;
        const passSpecial = /[!@#\$%\^&\*_]/;
        // const pass6Char=/^.{7,}$/;

        // if (pass6Char) {
        if (passUpperCase.test(password)) {
            if (passSpecial.test(password)) {


                handleSignUp(email, password)
                    .then((res) => {

                        updateProfile(res.user, {
                            displayName: name,
                            photoURL: photoUrl
                        }).then(() => {
                            // Profile updated!
                            // ...
                        }).catch((error) => {
                            // An error occurred
                            // ...
                        })
                        toast.success("SignUp Success")
                        e.target.reset()
                        navigate('/')

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        toast.error(errorMessage)

                    })


            } else {
                toast.error('Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]')

            }
        } else {
            toast.error('Your password must contain at least one upper case letter.')
        }
    // }else{
    //     toast.error('Your password must be at least 6 characters')

    // }

    }

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
                                <form className="card-body" onSubmit={handleRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="photo Url" className="input input-bordered" name='photoUrl' required />
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
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#FF325E]" type='submit'>SignUp</button>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;