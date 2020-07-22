import React, { Component } from "react";
import Layout from "../Layout";
import fetch from "isomorphic-unfetch";
import { apiBaseUrl } from "../../services/Helper";
import { ToastContainer, toast } from "react-toastify";
import InvoiceItem from "./InvoiceItem";

export default class CreateInvoice extends Component {
  state = {
    invoiceNumber: "",
    hasInvoiceNumber: false,
    allCustomers: [],
    
    customerId: "",
    customerName: "",
    customerPhoneNumber: "",
    customerAddress: "",
    invoiceDate: "",
    hasSelectedCustomer: false,
    isSelected: false,
  };

  componentDidMount() {
    // this.getInvoiceNum();
    // this.getAllCustomers();
  }

  // GET: generate invoice Number from api
  async getInvoiceNum() {
    try {
      const response = await fetch(`${apiBaseUrl}/generate_invoice_num`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          // Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const invoiceNum = await response.json();
        this.setState({
          invoiceNumber: invoiceNum.invoiceNumber,
          hasInvoiceNumber: true,
        });
      } else {
        console.log("Error fetching data");
        let error = new Error(response.statusText);
        error.response = response;
        return toast.warning("Could Not Generate Invoice Number", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error("Hmmm...Something Went Wrong", { autoClose: 5000 });
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
    }
  }

  // GET all customers
  async getAllCustomers() {
    try {
      const response = await fetch(`${apiBaseUrl}/customers`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          // Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const allData = data.data;

        let customersFromApi = allData.map((customer) => {
          return customer;
        });
        this.setState({
          // allCustomers: [{value: '', key:null}].concat(customersFromApi)
          allCustomers: customersFromApi
        });
        // console.log(customersFromApi);
      } else {
        console.log("Error fetching data");
        let error = new Error(response.statusText);
        error.response = response;
        return toast.warning("Could Not Generate Invoice Number", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error("Hmmm...Something Went Wrong", { autoClose: 5000 });
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
    }
  }

  // set the customer details based on Selected customer
  getSelectedCustomer = (e) => {
    const { allCustomers } = this.state;
    const value = e.target.value;
    const user = allCustomers.find(
      (customer) => customer.customer_name === value
    );
    // console.log(user.customer_name);
    this.setState({
      customerId: user.id,
      customerName: user.customer_name,
      customerPhoneNumber: user.customer_phone_number,
      customerAddress: user.customer_address,
      hasSelectedCustomer: true,
    });
  };

  



  render() {
    const {
      invoiceNumber,
      hasInvoiceNumber,
      allCustomers,
      customerName,
      customerPhoneNumber,
      customerAddress,
      hasSelectedCustomer,
      isSelected,
    } = this.state;

    // console.log(hasSelectedCustomer);

    return (
      <Layout>
        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
          <div className="kt-portlet">
            <div className="kt-portlet__body kt-portlet__body--fit">
              <div className="kt-invoice-1">
                <div className="kt-invoice__head">
                  <div className="kt-invoice__container">
                    <div className="kt-invoice__brand">
                      <h1 className="kt-invoice__title">INVOICE</h1>
                      <div href="#" className="kt-invoice__logo">
                        <a href="#">
                          <img src="assets/media/company-logos/logo_client_color.png" />
                        </a>
                        <span className="kt-invoice__desc">
                          <span>
                            Cecilia Chapman, 711-2880 Nulla St, Mankato
                          </span>
                          <span>Mississippi 96522</span>
                        </span>
                      </div>
                    </div>
                    <div className="kt-invoice__items">
                      <div className="kt-invoice__item">
                        <span className="kt-invoice__subtitle">DATE</span>
                        <span className="kt-invoice__text">
                          <input
                            type="date"
                            className="form-control"
                            id="kt_datepicker_1"
                            size="15"
                          />
                        </span>
                      </div>
                      <div className="kt-invoice__item">
                        <span className="kt-invoice__subtitle">
                          INVOICE NO.
                        </span>
                        {hasInvoiceNumber ? (
                          <span className="kt-invoice__text">
                            INV-{invoiceNumber}
                          </span>
                        ) : (
                          <span className="kt-invoice__text">GS 000014</span>
                        )}
                      </div>
                      <div className="kt-invoice__item">
                        <span className="kt-invoice__subtitle">
                          INVOICE TO.
                        </span>
                        {!isSelected ? (
                          <span className="kt-invoice__text">
                            <button
                              type="button"
                              className="btn btn-success kt-btn kt-btn--pill"
                              data-toggle="modal"
                              data-target="#kt_modal_4"
                            >
                              Select or Add Customer
                            </button>
                          </span>
                        ) : (
                          <span className="kt-invoice__text">
                            {customerName}, 
                            <br />
                            {customerAddress}.
                            <br />
                            {customerPhoneNumber}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <InvoiceItem />

                
                
              </div>
            </div>
          </div>
        </div>

        {/* select customer modal */}
        <div
          className="modal fade"
          id="kt_modal_4"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Select or Add Customer
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="customer-select"
                      className="form-control-label"
                    >
                      Select a Customer:
                    </label>
                    <select
                      className="form-control kt-selectpicker"
                      data-size="4"
                      onChange={this.getSelectedCustomer}
                      defaultValue
                    >
                      <option key='select' disabled>Choose here</option>
                      {allCustomers.map((customer) => (
                        <option
                          key={customer.id}
                          value={customer.customer_name}
                        >
                          {customer.customer_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {hasSelectedCustomer ? (
                    <div className="form-group">
                      <label
                        htmlFor="customer-name"
                        className="form-control-label"
                      >
                        Customer Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={customerName}
                        id="customer-name"
                        disabled
                      />
                      <label
                        htmlFor="customer-phone-number"
                        className="form-control-label"
                      >
                        Customer Phone Number:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={customerPhoneNumber}
                        id="customer-phone-number"
                        disabled
                      />
                      <label
                        htmlFor="customer-address"
                        className="form-control-label"
                      >
                        Customer Address:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={customerAddress}
                        id="customer-address"
                        disabled
                      />
                    </div>
                  ) : null}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    this.setState({
                      isSelected: true,
                    })
                  }
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
        {/* select customer modal End*/}
      </Layout>
    );
  }
}
