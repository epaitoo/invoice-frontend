import Head from "next/head";

import MobileHeader from "./MobileHeader";
import LeftSideMenu from "./LeftSideMenu";
import TopNav from "./TopNav";
import Header from "./Header";
// import Footer from "./Footer";

// var KTAppOptions = {
//     "colors": {
//         "state": {
//             "brand": "#22b9ff",
//             "light": "#ffffff",
//             "dark": "#282a3c",
//             "primary": "#5867dd",
//             "success": "#34bfa3",
//             "info": "#36a3f7",
//             "warning": "#ffb822",
//             "danger": "#fd3995"
//         },
//         "base": {
//             "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
//             "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
//         }
//     }
// };


const Layout = ({children, title="Onnex Engineering- Admin Dashboard"}) => (

    
    <div>
        <Head>
            <base href="" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{title}</title>
            <meta name="description" content="Onnex Engineering Invoice with Admin Dasboard" />
            <meta content="Onnex Engineering" name="author" />

            {/* <!--begin::Fonts --> */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700" />

            {/* <!--end::Fonts --> */}

            {/* <!--begin::Page Custom Styles(used by this page) --> */}
		    <link href="/assets/css/pages/login/login-6.css" rel="stylesheet" type="text/css" />

            {/* <!--begin::Page Vendors Styles(used by this page) --> */}
            <link href="/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />

            {/* <!--end::Page Vendors Styles --> */}

            {/* <!--begin::Global Theme Styles(used by all pages) --> */}
            <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
            <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />

            {/* <!--end::Global Theme Styles --> */}

            <link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />


            
            {/* <!-- begin::Global Config(global config for global JS sciprts) --> */}
            <script>
                {/* {{ KTAppOptions }} */}
            </script>

            {/* <!-- end::Global Config --> */}

            {/* <!--begin::Global Theme Bundle(used by all pages) --> */}
            <script src="/assets/plugins/global/plugins.bundle.js" type="text/javascript"></script>
            <script src="/assets/js/scripts.bundle.js" type="text/javascript"></script>

            {/* <!--end::Global Theme Bundle --> */}

            {/* <!--begin::Page Vendors(used by this page) --> */}
            <script src="/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js" type="text/javascript"></script>
            <script src="//maps.google.com/maps/api/js?key=AIzaSyBTGnKT7dt597vo9QgeQ7BFhvSRP4eiMSM" type="text/javascript"></script>
            <script src="assets/plugins/custom/gmaps/gmaps.js" type="text/javascript"></script>

            {/* <!--end::Page Vendors --> */}

            {/* <!--begin::Page Scripts(used by this page) --> */}
            <script src="/assets/js/pages/dashboard.js" type="text/javascript"></script>

            {/* <!--end::Page Scripts --> */}

        </Head>

        {/* // <!-- begin::Body --> */}
        <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize kt-page--loading">
            <MobileHeader />
            <div className="kt-grid kt-grid--hor kt-grid--root">

                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">

                    <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close"></i></button>
                    <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">
                        <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                            <LeftSideMenu />
                        </div>
                        
                    </div>

                    {/* Page Wrapper */}
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        <TopNav />

                        <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

                            {/* Recent bOOKING sEARCH HERE */}
                            <Header />
                            {/* Recent bOOKING sEARCH  ENDS HERE */}

                            {/* <!-- begin:: Content --> */}
                            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                                {children}
                            </div>
                        </div>

                        
                        
                        {/* <Footer /> */}
                    </div>
                    
                    {/* End Page Wrapper */}
                </div>

            </div>   

        </div>


        {/* // <!-- End::Body --> */}
    </div>
    
)

export default Layout