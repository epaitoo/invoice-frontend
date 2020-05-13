import React from 'react';

import NotificationNav from './TopNavLinks/NotificationNav';
import UserQuickActionsNav from './TopNavLinks/UserQuickActionsNav';
import CartNavLink from './TopNavLinks/CartNavLink';
import LanguageBar from './TopNavLinks/LanguageBar';
import UserBar from './TopNavLinks/UserBar';

const TopNavRightItems = () => (

    <div className="kt-header__topbar">

        <div className="kt-header__topbar-item kt-header__topbar-item--search dropdown" id="kt_quick_search_toggle">
            <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                <span className="kt-header__topbar-icon"><i className="flaticon2-search-1"></i></span>
            </div>
            {/* <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
                <div className="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact" id="kt_quick_search_dropdown">
                    <form method="get" className="kt-quick-search__form">
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text"><i className="flaticon2-search-1"></i></span></div>
                            <input type="text" className="form-control kt-quick-search__input" placeholder="Search...">
                            <div className="input-group-append"><span className="input-group-text"><i className="la la-close kt-quick-search__close"></i></span></div>
                        </div>
                    </form>
                    <div className="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="325" data-mobile-height="200">
                    </div>
                </div>
            </div> */}
		</div>

        <NotificationNav />
        <UserQuickActionsNav />
        <CartNavLink />
        <LanguageBar />
        <UserBar />

        {/* <!--begin: Quick panel toggler --> */}
            <div className="kt-header__topbar-item kt-header__topbar-item--quickpanel" data-toggle="kt-tooltip" title="Quick panel" data-placement="top">
                <div className="kt-header__topbar-wrapper">
                    <span className="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn"><i className="flaticon2-cube-1"></i></span>
                </div>
            </div>
        {/* <!--end: Quick panel toggler --> */}


    </div>

)

export default TopNavRightItems