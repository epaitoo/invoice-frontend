// import React, { Component } from "react";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
// import withAuth from "../services/withAuth";
import CreateCustomer from "../components/Customers/CreateCustomer";
import UpdateCustomer from "../components/Customers/UpdateCustomer";
import { ToastContainer, toast } from "react-toastify";
import fetch from "isomorphic-unfetch";
import { apiBaseUrl, getToken } from "../services/Helper";

function Customers({ customers }) {
  const [index, setIndex] = useState(0);

  const customerList = customers.data.map((customer, index) => (
    <tr key={customer.id}>
      <th>{customer.customer_name}</th>
      <td>{customer.customer_email}</td>
      <td>{customer.customer_phone_number}</td>
      <td>{customer.customer_address}</td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#kt_modal_5"
          aria-haspopup="true"
          onClick={() => setIndex(index)}
        >
          <i className="fas fa-edit"></i>
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteCutomer(customer.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  ));
  const data = customers.data;
  // console.log(data);


  const deleteCutomer =  async (customer) => {
    // console.log('Deleted Customer', customer);

    try {
      const response = await fetch(`${apiBaseUrl}/customers/${customer}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(customer),
      });
      if (response.ok) {
        // console.log('making request');
        const data = await response.json();
        const message = data["message"];
        // console.log(message);
        toast.success(message, { autoClose: 7000 });
        Router.push("/customers");
      } else {
        toast.warning('Could not Delete Customer', { autoClose: 5000 });
        console.log("Error fetching data");
        let error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
      }
    } catch (error) {
      toast.error('Hmmm...Something Went Wrong', { autoClose: 5000 });
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
      throw new Error(error);
    }

  }

  return (
    <Layout>
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div className="kt-portlet kt-portlet--mobile">
          <div className="kt-portlet__head kt-portlet__head--lg">
            <div className="kt-portlet__head-label">
              <span className="kt-portlet__head-icon">
                <i className="kt-font-brand flaticon2-line-chart"></i>
              </span>
              <h3 className="kt-portlet__head-title">Customer List</h3>
            </div>
            <div className="kt-portlet__head-toolbar">
              <div className="kt-portlet__head-wrapper">
                <a href="#" className="btn btn-clean btn-icon-sm">
                  <i className="la la-long-arrow-left"></i>
                  Back
                </a>
                &nbsp;
                <div className="dropdown dropdown-inline">
                  {/* Add Button with a Modal */}
                  <button
                    type="button"
                    className="btn btn-brand btn-icon-sm"
                    data-toggle="modal"
                    data-target="#kt_modal_4"
                    aria-haspopup="true"
                  >
                    <i className="flaticon2-plus"></i> Add New
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!--begin::Portlet--> */}
          <div className="kt-portlet">
            <div className="kt-portlet__body">
              {/* <!--begin::Section--> */}
              <div className="kt-section">
                <div className="kt-section__content">
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Customer Phone Number</th>
                        <th scope="col">Customer Address</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerList ? customerList : "No Data available"}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <!--end::Section--> */}
            </div>

            {/* <!--end::Form--> */}
          </div>

          {/* <!--end::Portlet--> */}
        </div>

        {/* Create Customer Modal */}
        <CreateCustomer />

        {/* Update Customer Modal */}
        <UpdateCustomer
          name={data[index].customer_name}
          email={data[index].customer_email}
          phone={data[index].customer_phone_number}
          address={data[index].customer_address}
          customerId={data[index].id}
        />
        <ToastContainer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // console.log('making request');
  // Call an external API endpoint to get customers.
  try {
    const response = await fetch(`${apiBaseUrl}/customers`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getToken(),
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // console.log('making request');
      const customers = await response.json();
      // console.log(data);
      return {
        props: {
          customers,
        },
      };
    } else {
      console.log("Error fetching data");
      let error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
  } catch (error) {
    // toast.error('Hmmm...Something Went Wrong', { autoClose: 5000 });
    console.error(
      "You have an error in your code or there are Network issues.",
      error
    );
    throw new Error(error);
  }
}

export default Customers;
