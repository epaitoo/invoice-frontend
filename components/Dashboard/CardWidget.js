import React from "react";

const CardWidget = (props) => (
  <div className="col-md-12 col-lg-6 col-xl-3">
    <div className="kt-widget24">
      <div className="kt-widget24__details">
        <div className="kt-widget24__info">
          <h4 className="kt-widget24__title">{props.title}</h4>
          <span className="kt-widget24__desc">{props.desc}</span>
        </div>
        <span className={props.styleClass}>{props.value}</span>
      </div>
      <div className="progress progress--sm">
        <div
          className={props.progressBarColor}
          role="progressbar"
          style={props.cardStyle}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="kt-widget24__action">
        <span className="kt-widget24__change">Change</span>
        <span className="kt-widget24__number">{props.widgetChangeNum}</span>
      </div>
    </div>
  </div>
);

export default CardWidget;
