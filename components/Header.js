import React from 'react';

const Header = () => (

    <div className="kt-subheader-search ">
        <div className="kt-container  kt-container--fluid ">
            <h3 className="kt-subheader-search__title">
                Recent Bookings
                <span className="kt-subheader-search__desc">Onling Bookings Management</span>
            </h3>
            <form className="kt-form">
                <div className="kt-grid kt-grid--desktop kt-grid--ver-desktop">
                    <div className="kt-grid__item kt-grid__item--middle">
                        <div className="row kt-margin-r-10">
                            <div className="col-lg-6">
                                <div className="kt-input-icon kt-input-icon--pill kt-input-icon--right">
                                    <input type="text" className="form-control form-control-pill" placeholder="Booking Number" />
                                    <span className="kt-input-icon__icon kt-input-icon__icon--right"><span><i className="la la-puzzle-piece"></i></span></span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="kt-input-icon kt-input-icon--pill kt-input-icon--right">
                                    <input type="text" className="form-control form-control-pill" placeholder="From" />
                                    <span className="kt-input-icon__icon kt-input-icon__icon--right"><span><i className="la la-calendar-check-o"></i></span></span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="kt-input-icon kt-input-icon--pill kt-input-icon--right">
                                    <input type="text" className="form-control form-control-pill" placeholder="To" />
                                    <span className="kt-input-icon__icon kt-input-icon__icon--right"><span><i className="la la-calendar-check-o"></i></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kt-grid__item kt-grid__item--middle">
                        <div className="kt-margin-top-20 kt--visible-tablet-and-mobile"></div>
                        <button type="button" className="btn btn-pill btn-upper btn-bold btn-font-sm kt-subheader-search__submit-btn">Search Bookings</button>
                        <a href="#" className="kt-subheader-search__link kt-link">Advance Search</a>
                    </div>
                </div>
            </form>
        </div>
    </div>

)

export default Header