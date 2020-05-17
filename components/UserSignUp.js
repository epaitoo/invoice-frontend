import React, { Component } from 'react';
import Link from 'next/link';



export default class UserSignUp extends Component {

    
    
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
                                        <form className="kt-login__form kt-form" action="">
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    placeholder="Fullname" 
                                                    name="fullname" 
                                                />
                                            </div>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    placeholder="Email" 
                                                    name="email"                                                        
                                                />
                                            </div>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    name="password" 
                                                />
                                            </div>
                                            <div className="input-group">
                                                <input 
                                                    className="form-control" 
                                                    type="password" 
                                                    placeholder="Confirm Password" 
                                                    name="rpassword" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col kt-align-left">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="agree" />I Agree the <a href="#" className="kt-link kt-login__link kt-font-bold">terms and conditions</a>.
                                                        <span></span>
                                                    </label>
                                                    <span className="form-text text-muted"></span>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary">Sign Up</button>&nbsp;&nbsp;
                                                <button id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button>
                                            </div>
                                        </form>
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
                </div>

            </div>
        
         
        );

    }

}