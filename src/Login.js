import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            pass: ""
           
        },
        validate:(values) => {
            let errors = {}
            
            if (!values.email) {
                errors.email = "please enter the email"
            
            }
            return errors
        },
        onSubmit:(values) => {
            axios.post("https://63629b4a66f75177ea340461.mockapi.io/login",values);
            navigate("/portal")
        }
    })
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={formik.handleSubmit} autoComplete="off">
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>


                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" name="pass" onChange={formik.handleChange} value={formik.values.pass} />
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to={"/portal/dashboard"}><input type="submit" value="Login" className="btn btn-primary btn-lg"
                                    style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }} /></Link>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2022. All rights reserved.
                </div>



                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Login