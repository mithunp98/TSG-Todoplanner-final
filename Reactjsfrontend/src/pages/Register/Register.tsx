import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import registerUser from './Registerservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [usernameReg, setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [confpasswordReg, setconfpasswordReg] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [country, setCountryOption] = useState('');
    const [error, setError] = useState<{
        firstname?: string;
        lastname?: string;
        usernameReg?: string;
        passwordReg?: string;
        confpasswordReg?: string;
        dateofbirth?: string;
        country?: string;
    }>({});

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const validate = () => {
        const newError: {
            firstname?: string;
            lastname?: string;
            usernameReg?: string;
            passwordReg?: string;
            confpasswordReg?: string;
            dateofbirth?: string;
            country?: string;
        } = {};
        if (!firstname) {
            newError.firstname = 'First name is required';
        }
        if (!lastname) {
            newError.lastname = 'Last name is required';
        }
        if (!usernameReg) {
            newError.usernameReg = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(usernameReg)) {
            newError.usernameReg = 'Email is not valid';
        }
        if (!passwordReg) {
            newError.passwordReg = 'Password is required';
        }
        if (!confpasswordReg) {
            newError.confpasswordReg = 'Confirm password is required';
        } else if (passwordReg !== confpasswordReg) {
            newError.confpasswordReg = 'Passwords do not match';
        }
        if (!dateofbirth) {
            newError.dateofbirth = 'Date of birth is required';
        }
        if (!country) {
            newError.country = 'Country is required';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const Handleclick = async (e: any) => {
        e.preventDefault();
        if (validate()) {
            try {
                const success: any = await registerUser(
                    firstname,
                    lastname,
                    usernameReg,
                    passwordReg,
                    dateofbirth,
                    country
                );
                // eslint-disable-next-line no-console
                console.log('success', success);
                    // handle registration
                    if (success.data.data.statusCode === 400) {
                        toast.error(success.data.data.body.message);
                    } else if(success.request.status === 200) {
                        toast.success('successfully registered');
                        window.location.href = 'http://localhost:3001/login';
                    }
                } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        }
    };

    return (
        <>
            <section className="vh-90 gradient-custom" id="fullbox">
                <ToastContainer />
                <div className="py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" id="bgcolor">
                            <div className="card bg-dark text-white" id="logbox">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5" id="formbox">
                                        <h2 className="fw-bold mb-2 text-uppercase" id="loginpara">
                                            <b>Register</b>
                                        </h2>
                                        <p className="text-white-50 mb-5" id="paratext">
                                            Please enter your Details!
                                        </p>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Firstname
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                name="firstname"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                            />
                                            {error.firstname && <span className="error">{error.firstname}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Lastname
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                            />
                                            {error.lastname && <span className="error">{error.lastname}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Username
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={usernameReg}
                                                onChange={(e) => setusernameReg(e.target.value)}
                                            />
                                            {error.usernameReg && <span className="error">{error.usernameReg}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typePasswordX" id="userlabel">
                                            Password
                                        </label>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={passwordReg}
                                                onChange={(e) => setpasswordReg(e.target.value)}
                                            />
                                            {error.passwordReg && <span className="error">{error.passwordReg}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typePasswordX" id="userlabelconf">
                                            Confirm Password
                                        </label>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={confpasswordReg}
                                                onChange={(e) => setconfpasswordReg(e.target.value)}
                                            />
                                            {error.confpasswordReg && (
                                                <span className="conferror">{error.confpasswordReg}</span>
                                            )}
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userrlabel">
                                            Date of Birth
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="date"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={dateofbirth}
                                                onChange={(e) => setDateofbirth(e.target.value)}
                                            />
                                            {error.dateofbirth && (
                                                <span className="dateerror">{error.dateofbirth}</span>
                                            )}
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Country
                                        </label>
                                        <div>
                                            <select
                                                value={country}
                                                className="dropdown"
                                                onChange={(e) => setCountryOption(e.target.value)}
                                            >
                                                <option>Select Country</option>
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                                <option value="UAE">UAE</option>
                                            </select>
                                            {error.country && <span className="countryerror">{error.country}</span>}
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            id="submitbtnreg"
                                            type="submit"
                                            onClick={Handleclick}
                                        >
                                            Register{' '}
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0" id="signuplink">
                                            Already have an account?{' '}
                                            <Link to="/login" className="text-white-50 fw-bold">
                                                Login
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
export default Register;
