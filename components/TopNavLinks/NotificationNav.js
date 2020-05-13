import React from 'react';

const bgImg = {
    background: 'url(assets/media/misc/bg-1.jpg)'
}

const NotificationNav = () => (

    <div className="kt-header__topbar-item dropdown">
        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
            <span className="kt-header__topbar-icon kt-header__topbar-icon--success"><i className="flaticon2-bell-alarm-symbol"></i></span>
            <span className="kt-hidden kt-badge kt-badge--danger"></span>
        </div>

        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
            <form>

                <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b" style={bgImg}>
                    <h3 className="kt-head__title">
                        User Notifications
                        &nbsp;
                        <span className="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>
                    </h3>
                    <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications" role="tab" aria-selected="true">Alerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#topbar_notifications_events" role="tab" aria-selected="false">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#topbar_notifications_logs" role="tab" aria-selected="false">Logs</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content">

                    <div className="tab-pane active show" id="topbar_notifications_notifications" role="tabpanel">
                        <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-line-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New order has been received
                                    </div>
                                    <div className="kt-notification__item-time">
                                        2 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-box-1 kt-font-brand"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New customer is registered
                                    </div>
                                    <div className="kt-notification__item-time">
                                        3 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-chart2 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        Application has been approved
                                    </div>
                                    <div className="kt-notification__item-time">
                                        3 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-image-file kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New file has been uploaded
                                    </div>
                                    <div className="kt-notification__item-time">
                                        5 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-drop kt-font-info"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New user feedback received
                                    </div>
                                    <div className="kt-notification__item-time">
                                        8 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        System reboot has been successfully completed
                                    </div>
                                    <div className="kt-notification__item-time">
                                        12 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-favourite kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New order has been placed
                                    </div>
                                    <div className="kt-notification__item-time">
                                        15 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item kt-notification__item--read">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-safe kt-font-primary"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        Company meeting canceled
                                    </div>
                                    <div className="kt-notification__item-time">
                                        19 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-psd kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New report has been received
                                    </div>
                                    <div className="kt-notification__item-time">
                                        23 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon-download-1 kt-font-danger"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        Finance report has been generated
                                    </div>
                                    <div className="kt-notification__item-time">
                                        25 hrs ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon-security kt-font-warning"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New customer comment recieved
                                    </div>
                                    <div className="kt-notification__item-time">
                                        2 days ago
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="kt-notification__item">
                                <div className="kt-notification__item-icon">
                                    <i className="flaticon2-pie-chart kt-font-success"></i>
                                </div>
                                <div className="kt-notification__item-details">
                                    <div className="kt-notification__item-title">
                                        New customer is registered
                                    </div>
                                    <div className="kt-notification__item-time">
                                        3 days ago
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>




            </form>


        </div>

    </div>

)

export default NotificationNav