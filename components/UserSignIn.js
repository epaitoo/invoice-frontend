import React, { Component } from 'react';
import Link from 'next/link';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';


//define vqlidation schema using Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),   
    password: Yup.string()
        .min(8, "Password must be 8 characters at minimum")
        .required("Password is required")    
});



export default class UserSignIn extends Component {

    
    
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
                                            initialValues={{ email: '', password:''}}
                                            validationSchema={LoginSchema}
                                            onSubmit={ (values, { setSubmitting }) => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                            }}
                                        >
                                        {({ touched, errors, isSubmitting }) => (
                                            <Form className="kt-form">
                                                <div className="input-group">
                                                    <Field
                                                        type="text" 
                                                        placeholder="Email" 
                                                        name="email" 
                                                        className={`form-control ${
                                                            touched.email && errors.email ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
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
                                                    <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary">
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
                </div>

            </div>
    
            
         
        );

    }

}