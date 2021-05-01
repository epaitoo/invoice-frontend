import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import withAuth from "../services/withAuth";
import Link from "next/link";
import { apiBaseUrl, getToken, showApiRequestError } from "../services/Helper";

import CardWidget from "../components/Dashboard/CardWidget";
import CallToActionCard from "../components/Dashboard/CallToActionCard";
import StatsCard from "../components/Dashboard/StatsCard";

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

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
};

function Home() {
  // const { data, loading } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiBaseUrl}/get_reports`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + getToken(),
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          const item = data.results;
          setData(item);
          // setLoading(false);
        } else {
          showApiRequestError("Could not get data", response);
        }
      } catch (error) {
        toast.error('Hmmm...Something Went Wrong', { autoClose: 5000 });
        console.error(
          "You have an error in your code or there are Network issues.",
          error
        );
        // throw new Error(error);
      }
    }

    fetchData();
  }, []);

  // console.log(data.total_customers);

  return (
    <Layout>
      <div>
        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
          {/* <!--begin:: Widgets/Stats--> */}
          <div className="kt-portlet">
            <div className="kt-portlet__body  kt-portlet__body--fit">
              <div className="row row-no-padding row-col-separator-lg">
                {/* Invoice Grand Total Card */}
                <CardWidget
                  title="Grand Total"
                  desc="All Invoices Value"
                  value={
                    data.invoices_grand_total
                      ? "GHS" + data.invoices_grand_total
                      : "GHS" + 0
                  }
                  styleClass="kt-widget24__stats kt-font-success"
                  cardStyle={card1Style}
                  progressBarColor="progress-bar kt-bg-success"
                  widgetChangeNum="78%"
                />

                {/* Customers Card */}
                <CardWidget
                  title="Customers"
                  desc="Total Customers"
                  value={data.total_customers ? data.total_customers : 0}
                  styleClass="kt-widget24__stats kt-font-warning"
                  cardStyle={card2Style}
                  progressBarColor="progress-bar kt-bg-warning"
                  widgetChangeNum="84%"
                />

                {/* Total Num of Invoices */}
                <CardWidget
                  title="Invoice"
                  desc="Total Number of Invoices"
                  value={data.total_invoices ? data.total_invoices : 0}
                  styleClass="kt-widget24__stats kt-font-danger"
                  cardStyle={card3Style}
                  progressBarColor="progress-bar kt-bg-danger"
                  widgetChangeNum="69%"
                />

                {/* Total Num of Users */}
                <CardWidget
                  title="Users"
                  desc="Total Number of Users"
                  value={data.total_invoices ? data.total_invoices : 0}
                  styleClass="kt-widget24__stats kt-font-brand"
                  cardStyle={card4Style}
                  progressBarColor="progress-bar kt-bg-brand"
                  widgetChangeNum="90%"
                />
              </div>
            </div>
          </div>

          {/* <!--Begin::Section--> */}
          <div className="row">
            <CallToActionCard
              cardStyle="kt-portlet kt-bg-danger kt-portlet--skin-solid kt-portlet--height-fluid"
              title="Create Customers"
              desc="Create A Customer and send them Invoices"
              link="/customers"
              buttonText="Create Customer"
            />

            <CallToActionCard
              cardStyle="kt-portlet kt-bg-brand kt-portlet--skin-solid kt-portlet--height-fluid"
              title="Create Invoice"
              desc="Create An Invoice For a Customer"
              link="/createinvoice"
              buttonText="Create Invoice"
            />

            <StatsCard
              dailySum={
                data.daily_invoice_sum
                  ? "GHS" + data.daily_invoice_sum
                  : "GHS" + 0
              }
              dailyCount={
                data.daily_total_invoice ? data.daily_total_invoice : 0
              }
              weeklySum={
                data.weekly_invoice_sum
                  ? "GHS" + data.weekly_invoice_sum
                  : "GHS" + 0
              }
              weeklyCount={
                data.weekly_total_invoice ? data.weekly_total_invoice : 0
              }
              monthlySum={
                data.monthly_invoice_sum
                  ? "GHS" + data.monthly_invoice_sum
                  : "GHS" + 0
              }
              monthlyCount={
                data.monthly_total_invoice ? data.monthly_total_invoice : 0
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Home);
