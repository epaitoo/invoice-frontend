import React from 'react'

const MobileHeader = () => (

    <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed ">
        <div className="kt-header-mobile__logo">
            <a href="index.html">
                <img alt="Logo" className="onnex-logo-sm" src="/assets/media/logos/onnex-logo.png" />
            </a>
        </div>
        <div className="kt-header-mobile__toolbar">
            <div className="kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left" id="kt_aside_mobile_toggler"><span></span></div>
            <div className="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span></span></div>
            <div className="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more"></i></div>
        </div>
    </div>
    
)

export default MobileHeader;