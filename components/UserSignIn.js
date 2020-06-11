import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import  Router  from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { removeCookie } from '../services/Cookies';
import { apiBaseUrl } from '../services/Helper';




//define vqlidation schema using Yup
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),   
    password: Yup.string()
        .min(8, "Password must be 8 characters at minimum")
        .required("Password is required")    
});




export default class UserSignIn extends Component {

    // check User Access Level Before logging In
    checkAccessLevel = (data) => {
        // console.log(data);
        const emailVerification = data[0].email_verified_at;
        localStorage.setItem('username', data[0].name);
        localStorage.setItem('userID', data[0].id);

        if (emailVerification !== null) {
            toast.success('Welcome ' + localStorage.getItem('username'), { autoClose: 7000 });
            Router.push("/")
        } else {
            toast.warning('Please verify your email before being granted access to the platform.', { autoClose: 7000 });
            if (process.browser) {
                removeCookie('token');
            }
            localStorage.clear();
            return false;
        }   
    }
    
    render(){

        const bgImg = {
            backgroundImage: 'url(/assets/media/bg/bg-1.jpg)'
        }

        return(
           
            <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize kt-page--loading">

                {/* <!-- begin:: Page --> */}
                <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
                    <div className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin" id="kt_login">
                        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={bgImg}>
                            <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                                <div className="kt-login__container">
                                    <div className="kt-login__logo">
                                        <Link href="/">
                                            <a>
                                                <img src="assets/media/logos/logo-mini-2-md.png" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="kt-login__signin">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Sign In</h3>
                                        </div>
                                        {/* Using Formik */}
                                        <Formik
                                            initialValues={{ username: '', password:''}}
                                            validationSchema={LoginSchema}
                                            onSubmit={ async (values, { setSubmitting }) => {
                                                await new Promise(resolve => setTimeout(resolve, 900));

                                                

                                                try {
                                                    const response = await fetch(`${apiBaseUrl}/login`, {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(values),
                                                    })
                                                    if (response.ok) {
                                                        const data = await response.json();
                                                        const token = data['access_token'];
                                                        const user = data['user'];
                                                       
                                                        // store token in cookies
                                                        Cookies.set('token', token, { expires: 1 });
                                                        localStorage.setItem('authToken', token);
                                                        // Write a function to check for access level
                                                        this.checkAccessLevel(user);
                                                        // if the user passes the check then the user is loge in

                                                        
                                                        // console.log(token);
                                                    } else {
                                                        toast.warning('Incorrect Username and or Password', { autoClose: 5000 });
                                                        console.log('Login failed.')
                                                        // https://github.com/developit/unfetch#caveats
                                                        let error = new Error(response.statusText)
                                                        error.response = response
                                                        return Promise.reject(error)
                                                    }
                                                } catch (error) {
                                                    toast.error('Hmmm...Something Went Wrong', { autoClose: 5000 });
                                                    console.error(
                                                        'You have an error in your code or there are Network issues.',
                                                        error
                                                    )
                                                    throw new Error(error);
                                                }
                                                
                                                // console.log(JSON.stringify(values));

                                                

                                                setSubmitting(false);
                                            }}
                                        >
                                        {({ touched, handleSubmit, errors, isSubmitting }) => (
                                            <Form className="kt-form" onSubmit={handleSubmit}>
                                                <div className="input-group">
                                                    <Field
                                                        type="text" 
                                                        placeholder="Email" 
                                                        name="username" 
                                                        className={`form-control ${
                                                            touched.username && errors.username ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="username"
                                                        className="error invalid-feedback"
                                                    />   
                                                </div>
                                                <div className="input-group">
                                                    <Field
                                                        type="password" 
                                                        placeholder="Password" 
                                                        name="password" 
                                                        className={`form-control ${
                                                            touched.password && errors.password ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password"
                                                        className="error invalid-feedback"
                                                    />   
                                                </div>
                                                <div className="row kt-login__extra">
                                                    <div className="col">
                                                        <label className="kt-checkbox">
                                                            <Field 
                                                                type="checkbox" 
                                                                name="remember"                                                                
                                                            /> Remember me
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div className="col kt-align-right">
                                                        <Link href="/forgot-password">
                                                            <a id="kt_login_forgot" className="kt-link kt-login__link">Forget Password ?</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="kt-login__actions">
                                                    <button id="kt_login_signin_submit" type="submit" className="btn btn-pill kt-login__btn-primary" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Please wait...' : 'Sign In'}
                                                    </button>
                                                </div>

                                            </Form>
                                        )}

                                        </Formik>
                                    </div>
                                    <div className="kt-login__account">
                                        <span className="kt-login__account-msg">
                                            Don't have an account yet ?
                                        </span>&nbsp;&nbsp;
                                        <Link href="/register">
                                            <a id="kt_login_signup" className="kt-link kt-link--light kt-login__account-link">Sign Up</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ToastContainer />
                </div>

            </div>
    
            
         
        );

       

    }

}