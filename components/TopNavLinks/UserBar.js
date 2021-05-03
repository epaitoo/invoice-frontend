import React from 'react';
import Link from 'next/link'
import { getUserName, getUserNameFirstLetter } from '../../services/Helper'


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
                    <span className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"> { getUserNameFirstLetter() }</span>
                </div>
                <div className="kt-user-card__name">
                    { getUserName() }
                </div>
            </div>

            {/* <!--end: Head --> */}

            {/* <!--begin: Navigation --> */}
            <div className="kt-notification">

                <Link href="/logout">
                    <a className="kt-notification__item">
                        <div className="kt-notification__item-icon">
                            <i className="flaticon2-cardiogram kt-font-warning"></i>
                        </div>
                        <div className="kt-notification__item-details">
                            <div className="kt-notification__item-title kt-font-bold">
                                Sign Out
                            </div>
                        </div>
                    </a>
                </Link>
                
            </div>

            {/* <!--end: Navigation --> */}
        </div>
	</div>


)

export default UserBar