import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';



//define vqlidation schema using Yup
const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),      
});

const url = "http://localhost:8000/api/password/email";



export default class ForgotPassword extends Component {

     
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
                                    <div className="kt-login__forgot">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Forgot Password ?</h3>
                                            <div className="kt-login__desc">Enter your email to reset your password:</div>
                                        </div>
                                         {/* Using Formik */}
                                        <Formik
                                            initialValues={{ email: ''}}
                                            validationSchema={ForgetPasswordSchema}
                                            onSubmit={ async (values, { setSubmitting }) => {
                                                await new Promise(resolve => setTimeout(resolve, 900));

                                                try {
                                                    const response = await fetch(url, {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(values),
                                                    })
                                                    if (response.ok) {
                                                        const data = await response.json();
                                                        const message = data['message'];
                                                        toast.success(message, { autoClose: 7000 });
                                                        console.log(message);
                                                    } else {
                                                        // https://github.com/developit/unfetch#caveats
                                                        let error = new Error(response.statusText)
                                                        error.response = response
                                                        if (response.status == 422) {
                                                            toast.warning("We can't find a user with that email address", { autoClose: 7000 })
                                                            
                                                        }
                                                        return Promise.reject(error)
                                                    }
                                                } catch(error) {
                                                    toast.error('Hmmm...Something Went Wrong', { autoClose: 7000 });
                                                    console.error(
                                                        'You have an error in your code or there are Network issues.',
                                                        error
                                                    )
                                                    throw new Error(error);
                                                }

                                                setSubmitting(false);
                                            }}
                                         >
                                         {({ touched, errors, handleSubmit,  isSubmitting }) => (
                                            <Form className="kt-form" onSubmit={handleSubmit}>
                                                <div className="input-group">
                                                    <Field 
                                                        className={`form-control ${
                                                            touched.email && errors.email ? "is-invalid" : ""
                                                        }`}  
                                                        type="text" 
                                                        placeholder="Email" 
                                                        name="email" 
                                                        id="kt_email"  
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="error invalid-feedback"
                                                    />   
                                                </div>
                                                <div className="kt-login__actions">
                                                    <button id="kt_login_forgot_submit" type="submit" className="btn btn-pill kt-login__btn-primary" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Please wait...' : 'Send Request'}
                                                    </button>&nbsp;&nbsp;
                                                    <Link href="/login">
                                                        <a id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</a>
                                                    </Link>
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