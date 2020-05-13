import React from 'react';

const LeftSideMenu = () => (
            
    
    <div id="kt_aside_menu" className="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
        <ul className="kt-menu__nav ">
            <li className="kt-menu__item " aria-haspopup="true"><a href="index.html" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-protection"></i><span className="kt-menu__link-text">Dashboard</span></a></li>
            <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="" className="kt-menu__link kt-menu__toggle"><i className="kt-menu__link-icon flaticon2-list-3"></i><span className="kt-menu__link-text">Actions</span><span className="kt-menu__link-badge"><span className="kt-badge kt-badge--brand">2</span></span><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                    <ul className="kt-menu__subnav">
                        <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span className="kt-menu__link"><span className="kt-menu__link-text">Actions</span><span className="kt-menu__link-badge"><span className="kt-badge kt-badge--brand">2</span></span></span></li>
                        <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="" className="kt-menu__link kt-menu__toggle"><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Add New</span><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                            <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                <ul className="kt-menu__subnav">
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">User</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Order</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Post</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Product</span></a></li>
                                    <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Customer</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Edit</span></a></li>
                        <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Delete</span></a></li>
                        <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span className="kt-menu__link-text">Import</span></a></li>
                    </ul>
                </div>
            </li>
            <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-calendar-6"></i><span className="kt-menu__link-text">Reports</span></a></li>
            <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-hourglass-1"></i><span className="kt-menu__link-text">Backup</span></a></li>
            <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="" className="kt-menu__link kt-menu__toggle"><i className="kt-menu__link-icon flaticon2-analytics-2"></i><span className="kt-menu__link-text">Config</span><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                    <ul className="kt-menu__subnav">
                        <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span className="kt-menu__link"><span className="kt-menu__link-text">Config</span></span></li>
                        <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Import</span></a></li>
                        <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span className="kt-menu__link-text">Backup</span></a></li>
                    </ul>
                </div>
            </li>
            <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-medical-records-1"></i><span className="kt-menu__link-text">Console</span></a></li>
            <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-gear"></i><span className="kt-menu__link-text">System</span></a></li>
            <li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-icon flaticon2-attention"></i><span className="kt-menu__link-text">Logs</span></a></li>
        </ul>
    </div>
    
)

export default LeftSideMenu