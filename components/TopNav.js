import React from 'react'

import TopNavLeftItems from './TopNavLeftItems';
import TopNavRightItems from './TopNavRightItems';

const TopNav = () => (

    // <!-- begin:: Header -->
    <div id="kt_header" className="kt-header kt-grid kt-grid--ver  kt-header--fixed ">

        {/* <!-- begin:: Aside --> */}
        <div className="kt-header__brand kt-grid__item  " id="kt_header_brand">
            <div className="kt-header__brand-logo">
                <a href="index.html">
                    <img alt="Logo" className="onnex-logo" src="assets/media/logos/onnex-logo.png" />
                </a>
            </div>
        </div>
		{/* <!-- end:: Aside --> */}

        {/* <!-- begin:: Title --> */}
        {/* <h3 className="kt-header__title kt-grid__item">
            Applications
        </h3> */}
		{/* <!-- end:: Title --> */}

        {/* <!-- begin: Header Menu --> */}
        <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
        <div className="kt-header-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_header_menu_wrapper">
            {/* TopNavLeftItemsHere */}
            <TopNavLeftItems />
        </div>
        {/* <!-- end: Header Menu --> */}

        {/* Begin ToprightMenu */}
        <TopNavRightItems />

    </div>

)

export default TopNav