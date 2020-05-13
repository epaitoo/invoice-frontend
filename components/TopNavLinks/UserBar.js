import React from 'react';


const bgImg = {
    background: 'url(assets/media/misc/bg-1.jpg)'
}

const UserBar = () => (

    <div className="kt-header__topbar-item kt-header__topbar-item--user">
        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
            <span className="kt-hidden kt-header__topbar-welcome">Hi,</span>
            <span className="kt-hidden kt-header__topbar-username">Nick</span>
            <img className="kt-hidden" alt="Pic" src="assets/media/users/300_21.jpg" />
            <span className="kt-header__topbar-icon kt-hidden-"><i className="flaticon2-user-outline-symbol"></i></span>
        </div>
        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">

            {/* <!--begin: Head --> */}
            <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style={bgImg}>
                <div className="kt-user-card__avatar">
                    <img className="kt-hidden" alt="Pic" src="assets/media/users/300_25.jpg" />

                    {/* <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden className to display it) --> */}
                    <span className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
                </div>
                <div className="kt-user-card__name">
                    Sean Stone
                </div>
                <div className="kt-user-card__badge">
                    <span className="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
                </div>
            </div>

            {/* <!--end: Head --> */}

            {/* <!--begin: Navigation --> */}
            <div className="kt-notification">
                <a href="custom/apps/user/profile-1/personal-information.html" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                        <i className="flaticon2-calendar-3 kt-font-success"></i>
                    </div>
                    <div className="kt-notification__item-details">
                        <div className="kt-notification__item-title kt-font-bold">
                            My Profile
                        </div>
                        <div className="kt-notification__item-time">
                            Account settings and more
                        </div>
                    </div>
                </a>
                <a href="custom/apps/user/profile-3.html" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                        <i className="flaticon2-mail kt-font-warning"></i>
                    </div>
                    <div className="kt-notification__item-details">
                        <div className="kt-notification__item-title kt-font-bold">
                            My Messages
                        </div>
                        <div className="kt-notification__item-time">
                            Inbox and tasks
                        </div>
                    </div>
                </a>
                <a href="custom/apps/user/profile-2.html" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                        <i className="flaticon2-rocket-1 kt-font-danger"></i>
                    </div>
                    <div className="kt-notification__item-details">
                        <div className="kt-notification__item-title kt-font-bold">
                            My Activities
                        </div>
                        <div className="kt-notification__item-time">
                            Logs and notifications
                        </div>
                    </div>
                </a>
                <a href="custom/apps/user/profile-3.html" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                        <i className="flaticon2-hourglass kt-font-brand"></i>
                    </div>
                    <div className="kt-notification__item-details">
                        <div className="kt-notification__item-title kt-font-bold">
                            My Tasks
                        </div>
                        <div className="kt-notification__item-time">
                            latest tasks and projects
                        </div>
                    </div>
                </a>
                <a href="custom/apps/user/profile-1/overview.html" className="kt-notification__item">
                    <div className="kt-notification__item-icon">
                        <i className="flaticon2-cardiogram kt-font-warning"></i>
                    </div>
                    <div className="kt-notification__item-details">
                        <div className="kt-notification__item-title kt-font-bold">
                            Billing
                        </div>
                        <div className="kt-notification__item-time">
                            billing & statements <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded">2 pending</span>
                        </div>
                    </div>
                </a>
                <div className="kt-notification__custom kt-space-between">
                    <a href="custom/user/login-v2.html" target="_blank" className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
                    <a href="custom/user/login-v2.html" target="_blank" className="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
                </div>
            </div>

            {/* <!--end: Navigation --> */}
        </div>
	</div>


)

export default UserBar