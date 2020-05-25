import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Data from '../services/Helper';
import { ToastContainer, toast } from 'react-toastify';



//define vqlidation schema using Yup
const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),   
    phone: Yup.string()
        .required("Phone Number is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters at minimum")
        .required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required!'),    
});


export default class UserSignUp extends Component {

    constructor() {
        super();
        this.data = new Data();
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
                                        <a href="#">
                                            <img src="assets/media/logos/logo-mini-2-md.png" />
                                        </a>
                                    </div>
                                    <div className="kt-login__signup">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Sign Up</h3>
                                            <div className="kt-login__desc">Enter your details to create your account:</div>
                                        </div>
                                        {/* Using Formik */}
                                        <Formik 
                                            initialValues={{ name: '', email: '', phone:'', password:'', confirm_password:''}}
                                            validationSchema={SignUpSchema}
                                            onSubmit={async (values, { setSubmitting }) => {
                                                await new Promise(resolve => setTimeout(resolve, 500));
                                                // console.log(values);
                                                
                                                // add code here
                                                this.data.createUser(values)
                                                    .then(response => {
                                                        if (response !== null || response !== undefined) {
                                                            toast.success(response['message'], { autoClose: 5000 });
                                                            Router.push('/login');
                                                            console.log(response['message'])
                                                        } 
                                                    })
                                                    .catch(err => {
                                                        toast.error('Hmm...Something went Wrong', { autoClose: 5000 });
                                                        console.log(err)
                                                    })
                                                setSubmitting(false);
                                            }}
                                        >
                                        {({ touched, handleSubmit, errors, isSubmitting }) => (
                                            <Form className="kt-login__form kt-form" onSubmit={handleSubmit}>
                                                <div className="input-group">
                                                    <Field
                                                        type="text" 
                                                        placeholder="Full Name" 
                                                        name="name" 
                                                        className={`form-control ${
                                                            touched.name && errors.name ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="name"
                                                        className="error invalid-feedback"
                                                    />   
                                                </div>
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
                                                        type="text" 
                                                        placeholder="Phone Number" 
                                                        name="phone" 
                                                        className={`form-control ${
                                                            touched.phone && errors.phone ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="phone"
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
                                                <div className="input-group">
                                                    <Field
                                                        type="password" 
                                                        placeholder="Confirm Password" 
                                                        name="confirm_password" 
                                                        className={`form-control ${
                                                            touched.confirm_password && errors.confirm_password ? "is-invalid" : ""
                                                        }`} 
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="confirm_password"
                                                        className="error invalid-feedback"
                                                    />   
                                                </div>
                                                <div className="kt-login__actions">
                                                    {
                                                        isSubmitting ? 
                                                            <button type="submit" id="kt_login_signup_submit" 
                                                                className="btn btn-pill kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light" 
                                                                disabled={isSubmitting}>
                                                                    Please Wait
                                                            </button>
                                                        :   <button type="submit" id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary" disabled={isSubmitting}>
                                                                Sign Up
                                                            </button>
                                                            
                                                    }
                                                    &nbsp;&nbsp;
                                                    <Link href="/login">
                                                        <a id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</a>
                                                    </Link>
                                                    {/* <button id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button> */}
                                                </div>
                                            </Form>
                                        )}
                                        </Formik>
                                    </div>
                                    <div className="kt-login__account">
                                        <span className="kt-login__account-msg">
                                            Already have an account  ?
                                        </span>&nbsp;&nbsp;
                                        <Link href="/login">
                                            <a  id="kt_login_signup" className="kt-link kt-link--light kt-login__account-link">Sign In</a>
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