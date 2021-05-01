import React from "react";

const StatsCard = (props) => (
  <div className="col-xl-4">
    {/* <!--begin:: Packages--> */}
    <div className="kt-portlet kt-portlet--skin-solid kt-portlet--solid-warning kt-portlet--head-lg kt-portlet--head-overlay kt-portlet--height-fluid">
      <div className="kt-portlet__head kt-portlet__head--noborder">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title kt-font-light">Stats</h3>
        </div>
      </div>
      <div className="kt-portlet__body kt-margin-t-0 kt-padding-t-0">
        {/* <!--begin::Widget 29--> */}
        <div className="kt-widget29">
          <div className="kt-widget29__content">
            <h3 className="kt-widget29__title">Daily Invoice Info</h3>
            <div className="kt-widget29__item">
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Total</span>
                <span className="kt-widget29__stats kt-font-success">{props.dailySum}</span>
              </div>
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Invoices today</span>
                <span className="kt-widget29__stats kt-font-danger">{props.dailyCount}</span>
              </div>
              {/* <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Change</span>
                <span className="kt-widget29__stats kt-font-brand">+15%</span>
              </div> */}
            </div>
          </div>
          <div className="kt-widget29__content">
            <h3 className="kt-widget29__title">Weekly Invoice Info</h3>
            <div className="kt-widget29__item">
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Total</span>
                <span className="kt-widget29__stats kt-font-success">
                    {props.weeklySum}
                </span>
              </div>
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Count</span>
                <span className="kt-widget29__stats kt-font-danger">{props.weeklyCount}</span>
              </div>
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Change</span>
                <span className="kt-widget29__stats kt-font-brand">+15%</span>
              </div>
            </div>
          </div>
          <div className="kt-widget29__content">
            <h3 className="kt-widget29__title">Monthly Invoice Sum</h3>
            <div className="kt-widget29__item">
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Total</span>
                <span className="kt-widget29__stats kt-font-success">{props.monthlySum}</span>
              </div>
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Count</span>
                <span className="kt-widget29__stats kt-font-danger">{props.monthlyCount}</span>
              </div>
              <div className="kt-widget29__info">
                <span className="kt-widget29__subtitle">Change</span>
                <span className="kt-widget29__stats kt-font-brand">+15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!--end::Widget 29--> */}
      </div>
    </div>
    {/* <!--end:: Packages--> */}
  </div>
);

export default StatsCard;

