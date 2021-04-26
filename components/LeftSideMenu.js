import React from "react";
import Link from "next/link";

const LeftSideMenu = () => (
  <div
    id="kt_aside_menu"
    className="kt-aside-menu "
    data-ktmenu-vertical="1"
    data-ktmenu-scroll="1"
    data-ktmenu-dropdown-timeout="500"
  >
    <ul className="kt-menu__nav ">
      <li className="kt-menu__item " aria-haspopup="true">
        <Link href="/">
          <a className="kt-menu__link ">
            <i className="kt-menu__link-icon flaticon2-protection"></i>
            <span className="kt-menu__link-text">Dashboard</span>
          </a>
        </Link>
      </li>
      <li className="kt-menu__item " aria-haspopup="true">
        <Link href="/invoice">
          <a className="kt-menu__link ">
            <i className="kt-menu__link-icon flaticon-file-1"></i>
            <span className="kt-menu__link-text">Invoices</span>
          </a>
        </Link>
      </li>
      <li className="kt-menu__item " aria-haspopup="true">
        <Link href="/customers">
            <a className="kt-menu__link ">
            <i className="kt-menu__link-icon flaticon-customer"></i>
            <span className="kt-menu__link-text">Customers</span>
            </a>
        </Link>
      </li>
      <li className="kt-menu__item " aria-haspopup="true">
        <Link href="/logout">
            <a className="kt-menu__link ">
            <i className="kt-menu__link-icon flaticon-lock"></i>
            <span className="kt-menu__link-text">Sign Out</span>
            </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default LeftSideMenu;
