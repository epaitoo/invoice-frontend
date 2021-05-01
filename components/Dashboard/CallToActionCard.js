import React from "react";
import Link from "next/link";


const CallToActionCard = (props) => (
  <div className="col-xl-4">
    {/* <!--begin:: Widgets/Announcements 2--> */}
    <div className={props.cardStyle}>
      <div className="kt-portlet__head kt-portlet__head--noborder">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">{props.title}</h3>
        </div>
      </div>
      <div className="kt-portlet__body">
        {/* <!--begin::Widget 7--> */}
        <div className="kt-widget7 kt-widget7--skin-light">
          <div className="kt-widget7__desc">
            {props.desc}
          </div>
          <div className="kt-widget7__content">
            <div className="kt-widget7__userpic">
              <img src="assets/media/users/100_5.jpg" alt="" />
            </div>
            <div className="kt-widget7__info">
              {/* <h3 className="kt-widget7__username">Nick Mana</h3> */}
              {/* <span className="kt-widget7__time">6 hours ago</span> */}
            </div>
          </div>
          <div className="kt-widget7__button">
            <Link href={props.link}>
              <a className="btn btn-success" role="button">
                {props.buttonText}
              </a>
            </Link>
          </div>
        </div>

        {/* <!--end::Widget 7--> */}
      </div>
    </div>
  </div>
);

export default CallToActionCard;
