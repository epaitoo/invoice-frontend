import React from 'react';

const bgImg = {
    background: 'url(assets/media/misc/bg-1.jpg)'
}

const UserQuickActionsNav = () => (
    
    <div className="kt-header__topbar-item dropdown">
        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
			<span className="kt-header__topbar-icon kt-header__topbar-icon--warning"><i className="flaticon2-gear"></i></span>
		</div>

        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">

            <form>
                <div className="kt-head kt-head--skin-dark" style={bgImg}>
                    <h3 className="kt-head__title">
                        User Quick Actions
                        <span className="kt-space-15"></span>
                        <span className="btn btn-success btn-sm btn-bold btn-font-md">23 tasks pending</span>
                    </h3>
                </div> 

                <div className="kt-grid-nav kt-grid-nav--skin-light">
                    <div className="kt-grid-nav__row">
                        
                        
                    </div>
                </div>
            </form>
        </div>

    </div>

)


export default UserQuickActionsNav