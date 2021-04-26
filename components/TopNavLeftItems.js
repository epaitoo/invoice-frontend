import React from "react";
import Link from "next/link";



const TopNavLeftItems = () => (
  <div
    id="kt_header_menu"
    className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default "
  >
    <ul className="kt-menu__nav ">
      <li className="kt-menu__item " aria-haspopup="true">
        <Link href="/">
            <a className="kt-menu__link ">
                <span className="kt-menu__link-text">Dashboard</span>
            </a>
        </Link>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
        data-ktmenu-submenu-toggle="click"
        aria-haspopup="true"
      >
        <Link href="/invoice">
            <a className="kt-menu__link kt-menu__toggle">
                <span className="kt-menu__link-text">Invoices</span>
            </a>
        </Link>

      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
        data-ktmenu-submenu-toggle="click"
        aria-haspopup="true"
      >
        <Link href="/customers">
            <a  className="kt-menu__link kt-menu__toggle">
                <span className="kt-menu__link-text">Customers</span>
            </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default TopNavLeftItems;
