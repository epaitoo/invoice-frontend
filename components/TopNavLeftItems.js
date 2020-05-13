import React from 'react';

import NavComponentLinks from './TopNavLinks/NavComponentLinks';
import NavCrudLinks from './TopNavLinks/NavCrudLinks';
import NavAppMenuLinks from './TopNavLinks/NavAppMenuLinks';
import NavPagesMenuLinks from './TopNavLinks/NavPagesMenuLinks';


const TopNavLeftItems = () => (

    <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
        <ul className="kt-menu__nav ">
            <li className="kt-menu__item " aria-haspopup="true"><a href="index.html" className="kt-menu__link "><span className="kt-menu__link-text">Dashboard</span></a></li>
            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Components</span><i className="kt-menu__hor-arrow la la-angle-down"></i><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                <NavComponentLinks />
            </li>
            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Crud</span><i className="kt-menu__hor-arrow la la-angle-down"></i><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
               <NavCrudLinks /> 
            </li>
            <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Apps</span><i className="kt-menu__hor-arrow la la-angle-down"></i><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                <NavAppMenuLinks />
            </li>
            <li className="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Pages</span><i className="kt-menu__hor-arrow la la-angle-down"></i><i className="kt-menu__ver-arrow la la-angle-right"></i></a>
                <NavPagesMenuLinks />
            </li>
        </ul>
    </div>
)

export default TopNavLeftItems