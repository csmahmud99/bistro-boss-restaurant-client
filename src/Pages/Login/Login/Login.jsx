import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null);
    const [loginDisabled, setLoginDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setLoginDisabled(false);
        }
        else {
            setLoginDisabled(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>Log In | Bistro Boss Restaurant</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100 mt-14">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the above Captcha Text" className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={loginDisabled} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className="text-center py-5">
                            <small>New Here? <Link to="/register">Create a New Account.</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;