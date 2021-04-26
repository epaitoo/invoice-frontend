import React from "react";
import Layout from "../components/Layout";
import withAuth from "../services/withAuth";

const Home = () => (
  <Layout>
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fa fa-code-fork"></i>
              <span className="count-numbers">12</span>
              <span className="count-name">Flowz</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter danger">
              <i className="fa fa-ticket"></i>
              <span className="count-numbers">599</span>
              <span className="count-name">Instances</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter success">
              <i className="fa fa-database"></i>
              <span className="count-numbers">6875</span>
              <span className="count-name">Data</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter info">
              <i className="fa fa-users"></i>
              <span className="count-numbers">35</span>
              <span className="count-name">Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default withAuth(Home);
