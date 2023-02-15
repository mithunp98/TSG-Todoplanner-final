import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import loginUser from './Loginservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<{ username?: string; password?: string }>({});

    const navigate = useNavigate();

    const validate = () => {
        const newError: { username?: string; password?: string } = {};
        if (!username) {
            newError.username = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            newError.username = 'Email is not valid';
        }
        if (!password) {
            newError.password = 'Password is required';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const Handleclick = (e: any) => {
        e.preventDefault();
        if (validate()) {
            loginUser(username, password);
            setTimeout(function () {
                if (sessionStorage.getItem('token')) {
                    toast.success(`LoggedIn as ${username}`);
                    navigate('/home');
                } else {
                    // navigate('/login');
                    toast.error('Invalid username or password');
                }
            }, 2000);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="vh-90 gradient-custom" id="fullboxlog">
                <div className="py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" id="bgcolorlog">
                            <div className="card bg-dark text-white" id="logboxlog">
                                <div className="card-body p-5 text-center" id="cardbodylog">
                                    <div className="mb-md-5 mt-md-4 pb-5" id="formboxlog">
                                        <h2 className="fw-bold mb-2 text-uppercase" id="loginparalog">
                                            <b>Login</b>
                                        </h2>
                                        <p className="text-white-50 mb-5" id="paratextlog">
                                            Please enter your login and password!
                                        </p>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabellog">
                                            Username
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxxlog">
                                            <input
                                                type="email"
                                                id="typeEmailXlog"
                                                className="form-control form-control-lg"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            {error.username && <span className="error">{error.username}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typePasswordX" id="userlabellog">
                                            Password
                                        </label>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordXlog"
                                                className="form-control form-control-lg"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {error.password && <span className="error">{error.password}</span>}
                                        </div>
                                        <p className="small mb-5 pb-lg-2" id="forgetpasslog">
                                            <a className="text-white-50" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            id="submitbtnnlog"
                                            type="submit"
                                            onClick={Handleclick}
                                        >
                                            Login{' '}
                                        </button>
                                    </div>
                                    <div>
                                        <p className="mb-0" id="signuplinklog">
                                            Don&apos;t have an account?{' '}
                                            <Link to="/register" className="text-white-50 fw-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Login;
