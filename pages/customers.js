// import React, { Component } from "react";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
// import withAuth from "../services/withAuth";
import CreateCustomer from "../components/Customers/CreateCustomer";
import UpdateCustomer from "../components/Customers/UpdateCustomer";
import { ToastContainer, toast } from "react-toastify";
import fetch from "isomorphic-unfetch";
import { apiBaseUrl, getToken, showApiRequestError } from "../services/Helper";
// React Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { getCookie } from "../services/Cookies";

function Customers({ customers }) {
  const [index, setIndex] = useState(0);

  const customersData = customers.data;

  const { SearchBar } = Search;

  const contentTable = ({ paginationProps, paginationTableProps }) => (
    <div>
      {/* <PaginationListStandalone { ...paginationProps } /> */}
      <ToolkitProvider
        keyField="id"
        columns={columns}
        data={customersData}
        search
      >
        {(toolkitprops) => (
          <div>
            <SearchBar {...toolkitprops.searchProps} />
            <hr />
            <BootstrapTable
              striped
              hover
              {...toolkitprops.baseProps}
              {...paginationTableProps}
            />
            {customersData.length == 0 ? (
              <div>
                <h4 className="text-center">No data found</h4>
              </div>
            ) : null}
          </div>
        )}
      </ToolkitProvider>
      {/* <PaginationListStandalone { ...paginationProps } /> */}
    </div>
  );

  // Get the index of a Row and set the Index using setIndex Hook
  const getIndex = (i) => {
    // console.log('I am here: '+ i);
    const arrayIndex = customersData
      .map(function (e) {
        return e.id;
      })
      .indexOf(i);
    setIndex(arrayIndex);
  };

  const actionsFormatter = (cell, row, rowIndex) => {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success btn-icon-sm"
          data-toggle="modal"
          data-target="#kt_modal_5"
          aria-haspopup="true"
          onClick={() => getIndex(row.id)}
        >
          <i className="fas fa-edit"></i>
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger btn-icon-sm"
          onClick={() => deleteCustomer(row.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    );
  };

  const columns = [
    // { dataField:  "id", text: "Id"},
    { dataField: "customer_name", text: "Customer Name" },
    { dataField: "customer_email", text: "Customer Email" },
    { dataField: "customer_phone_number", text: "Customer Phone Number" },
    { dataField: "customer_address", text: "Customer Address" },
    { dataField: "id", text: "Actions", formatter: actionsFormatter },
  ];

  const deleteCustomer = async (customer) => {

    try {
      const response = await fetch(`${apiBaseUrl}/customers/${customer}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const message = data["message"];
        toast.success(message, { autoClose: 7000 });
        Router.push("/customers");
      } else {
        showApiRequestError("Could not Delete Customer", response)
      }
    } catch (error) {
      toast.error("Hmmm...Something Went Wrong", { autoClose: 5000 });
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
      throw new Error(error);
    }
  };

  return (
    <Layout>
      <div>
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
                      className="btn btn-primary btn-icon-sm"
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
                    <PaginationProvider pagination={paginationFactory()}>
                      {contentTable}
                    </PaginationProvider>
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

          {/* Show update component if a customer is created */}
          {/* Update Customer Modal */}
          {customersData.length != 0 ? 
            <UpdateCustomer
              name={customersData[index].customer_name}
              email={customersData[index].customer_email}
              phone={customersData[index].customer_phone_number}
              address={customersData[index].customer_address}
              customerId={customersData[index].id}
            /> : null
          }

          <ToastContainer />
        </div>
      </div>
    </Layout>
  );
}



export async function getServerSideProps(context) {
  const token = getCookie("token", context.req);
  
  try {
    const response = await fetch(`${apiBaseUrl}/customers`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const customers = await response.json();
      return {
        props: {
          customers,
        },
      };
    } else {
      console.log("Error fetching data");
      let error = new Error(response.statusText);
      error.response = response;
      return toast.warning("Hmmm...Something Went Wrong", { autoClose: 5000 });
    }
  } catch (error) {
    toast.error("Hmmm...Something Went Wrong", { autoClose: 5000 });
    console.error(
      "You have an error in your code or there are Network issues.",
      error
    );
    // throw new Error(error);
  }
}

export default Customers;
