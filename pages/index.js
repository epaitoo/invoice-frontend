import React from "react";
import Layout from "../components/Layout";
import withAuth from "../services/withAuth";
import Link from "next/link";

const card1Style = {
  width: "78%",
};
const card2Style = {
  width: "84%",
};
const card3Style = {
  width: "69%",
};
const card4Style = {
  width: "90%",
};


const Home = () => (
  <Layout>
    <div>
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        {/* <!--begin:: Widgets/Stats--> */}
        <div className="kt-portlet">
          <div className="kt-portlet__body  kt-portlet__body--fit">
            <div className="row row-no-padding row-col-separator-lg">
              <div className="col-md-12 col-lg-6 col-xl-3">
                {/* <!--begin::Total Profit--> */}
                <div className="kt-widget24">
                  <div className="kt-widget24__details">
                    <div className="kt-widget24__info">
                      <h4 className="kt-widget24__title">Total Profit</h4>
                      <span className="kt-widget24__desc">
                        All Customs Value
                      </span>
                    </div>
                    <span className="kt-widget24__stats kt-font-brand">
                      $18M
                    </span>
                  </div>
                  <div className="progress progress--sm">
                    <div
                      className="progress-bar kt-bg-brand"
                      role="progressbar"
                      style={card1Style}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="kt-widget24__action">
                    <span className="kt-widget24__change">Change</span>
                    <span className="kt-widget24__number">78%</span>
                  </div>
                </div>

                {/* <!--end::Total Profit--> */}
              </div>

              <div className="col-md-12 col-lg-6 col-xl-3">
                {/* <!--begin::New Feedbacks--> */}
                <div className="kt-widget24">
                  <div className="kt-widget24__details">
                    <div className="kt-widget24__info">
                      <h4 className="kt-widget24__title">New Feedbacks</h4>
                      <span className="kt-widget24__desc">Customer Review</span>
                    </div>
                    <span className="kt-widget24__stats kt-font-warning">
                      1349
                    </span>
                  </div>
                  <div className="progress progress--sm">
                    <div
                      className="progress-bar kt-bg-warning"
                      role="progressbar"
                      style={card2Style}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="kt-widget24__action">
                    <span className="kt-widget24__change">Change</span>
                    <span className="kt-widget24__number">84%</span>
                  </div>
                </div>

                {/* <!--end::New Feedbacks--> */}
              </div>

              <div className="col-md-12 col-lg-6 col-xl-3">
                {/* <!--begin::New Orders--> */}
                <div className="kt-widget24">
                  <div className="kt-widget24__details">
                    <div className="kt-widget24__info">
                      <h4 className="kt-widget24__title">New Orders</h4>
                      <span className="kt-widget24__desc">
                        Fresh Order Amount
                      </span>
                    </div>
                    <span className="kt-widget24__stats kt-font-danger">
                      567
                    </span>
                  </div>
                  <div className="progress progress--sm">
                    <div
                      className="progress-bar kt-bg-danger"
                      role="progressbar"
                      style={card3Style}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="kt-widget24__action">
                    <span className="kt-widget24__change">Change</span>
                    <span className="kt-widget24__number">69%</span>
                  </div>
                </div>

                {/* <!--end::New Orders--> */}
              </div>

              <div className="col-md-12 col-lg-6 col-xl-3">
                {/* <!--begin::New Users--> */}
                <div className="kt-widget24">
                  <div className="kt-widget24__details">
                    <div className="kt-widget24__info">
                      <h4 className="kt-widget24__title">New Users</h4>
                      <span className="kt-widget24__desc">Joined New User</span>
                    </div>
                    <span className="kt-widget24__stats kt-font-success">
                      276
                    </span>
                  </div>
                  <div className="progress progress--sm">
                    <div
                      className="progress-bar kt-bg-success"
                      role="progressbar"
                      style={card4Style}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="kt-widget24__action">
                    <span className="kt-widget24__change">Change</span>
                    <span className="kt-widget24__number">90%</span>
                  </div>
                </div>

                {/* <!--end::New Users--> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--Begin::Section--> */}
        <div className="row">
          <div className="col-xl-4">
            {/* <!--begin:: Widgets/Announcements 2--> */}
            <div className="kt-portlet kt-bg-danger kt-portlet--skin-solid kt-portlet--height-fluid">
              <div className="kt-portlet__head kt-portlet__head--noborder">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">Announcements</h3>
                </div>
              </div>
              <div className="kt-portlet__body">
                {/* <!--begin::Widget 7--> */}
                <div className="kt-widget7 kt-widget7--skin-light">
                  <div className="kt-widget7__desc">
                    Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed
                    diam nonummy euismod tinciduntut laoreet doloremagna
                  </div>
                  <div className="kt-widget7__content">
                    <div className="kt-widget7__userpic">
                      <img src="assets/media/users/100_5.jpg" alt="" />
                    </div>
                    <div className="kt-widget7__info">
                      <h3 className="kt-widget7__username">Nick Mana</h3>
                      <span className="kt-widget7__time">6 hours ago</span>
                    </div>
                  </div>
                  <div className="kt-widget7__button">
                    <Link href="/customers">
                      <a className="btn btn-success" role="button">
                        All Feeds
                      </a>
                    </Link>
                  </div>
                </div>

                {/* <!--end::Widget 7--> */}
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            {/* <!--begin:: Widgets/Announcements 1--> */}
            <div className="kt-portlet kt-bg-brand kt-portlet--skin-solid kt-portlet--height-fluid">
              <div className="kt-portlet__head kt-portlet__head--noborder">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">Announcements</h3>
                </div>
              </div>
              <div className="kt-portlet__body">
                {/* <!--begin::Widget 7--> */}
                <div className="kt-widget7 kt-widget7--skin-light">
                  <div className="kt-widget7__desc">
                    Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed
                    diam nonummy euismod tinciduntut laoreet doloremagna
                  </div>
                  <div className="kt-widget7__content">
                    <div className="kt-widget7__userpic">
                      <img src="assets/media/users/100_4.jpg" alt="" />
                    </div>
                    <div className="kt-widget7__info">
                      <h3 className="kt-widget7__username">Nick Mana</h3>
                      <span className="kt-widget7__time">6 hours ago</span>
                    </div>
                  </div>
                  <div className="kt-widget7__button">
                    <Link href="/createinvoice">
                      <a className="btn btn-success" role="button">
                        All Feeds
                      </a>
                    </Link>
                  </div>
                </div>

                {/* <!--end::Widget 7--> */}
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            {/* <!--begin:: Packages--> */}
            <div className="kt-portlet kt-portlet--skin-solid kt-portlet--solid-warning kt-portlet--head-lg kt-portlet--head-overlay kt-portlet--height-fluid">
              <div className="kt-portlet__head kt-portlet__head--noborder">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title kt-font-light">Packages</h3>
                </div>
              </div>
              <div className="kt-portlet__body kt-margin-t-0 kt-padding-t-0">
                {/* <!--begin::Widget 29--> */}
                <div className="kt-widget29">
                  <div className="kt-widget29__content">
                    <h3 className="kt-widget29__title">Monthly Income</h3>
                    <div className="kt-widget29__item">
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Total</span>
                        <span className="kt-widget29__stats kt-font-success">
                          $680
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Change</span>
                        <span className="kt-widget29__stats kt-font-brand">
                          +15%
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Licenses</span>
                        <span className="kt-widget29__stats kt-font-danger">
                          29
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget29__content">
                    <h3 className="kt-widget29__title">Taxes info</h3>
                    <div className="kt-widget29__item">
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Total</span>
                        <span className="kt-widget29__stats kt-font-success">
                          22.50
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Change</span>
                        <span className="kt-widget29__stats kt-font-brand">
                          +15%
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Count</span>
                        <span className="kt-widget29__stats kt-font-danger">
                          701
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget29__content">
                    <h3 className="kt-widget29__title">Partners Sale</h3>
                    <div className="kt-widget29__item">
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Total</span>
                        <span className="kt-widget29__stats kt-font-success">
                          $680
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Change</span>
                        <span className="kt-widget29__stats kt-font-brand">
                          +15%
                        </span>
                      </div>
                      <div className="kt-widget29__info">
                        <span className="kt-widget29__subtitle">Licenses</span>
                        <span className="kt-widget29__stats kt-font-danger">
                          29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--end::Widget 29--> */}
              </div>
            </div>
            {/* <!--end:: Packages--> */}
          </div>
        </div>
        {/* <!--End::Section--> */}
      </div>
    </div>
  </Layout>
);

export default withAuth(Home);
