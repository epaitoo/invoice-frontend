import React, { Component } from "react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import fetch from "isomorphic-unfetch";
import { apiBaseUrl, getToken, getUserId } from "../../services/Helper";

export default class CreateCustomer extends Component {
  state = {
    customer_name: "",
    customer_email: "",
    customer_phone_number: "",
    customer_address: "",
  };

  render() {
    const {
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    } = this.state;

    return (
      <div>
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
                  New Customer
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.submit}>
                  <div className="form-group">
                    <label
                      htmlFor="customer-name"
                      className="form-control-label"
                    >
                      Customer Name:
                    </label>
                    <input
                      type="text"
                      name="customer_name"
                      className="form-control"
                      id="customer-name"
                      onChange={this.change}
                      value={customer_name}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="customer-email"
                      className="form-control-label"
                    >
                      Customer Email:
                    </label>
                    <input
                      type="text"
                      name="customer_email"
                      className="form-control"
                      id="customer-email"
                      onChange={this.change}
                      value={customer_email}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="customer-phone"
                      className="form-control-label"
                    >
                      Customer Phone Number:
                    </label>
                    <input
                      type="text"
                      name="customer_phone_number"
                      className="form-control"
                      id="customer-phone"
                      onChange={this.change}
                      value={customer_phone_number}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="customer-address"
                      className="form-control-label"
                    >
                      Customer Address:
                    </label>
                    <input
                      type="text"
                      name="customer_address"
                      className="form-control"
                      id="customer-address"
                      onChange={this.change}
                      value={customer_address}
                    />
                  </div>
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
                  type="submit"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    );
  }

  // sets the state to the input value on change
  change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  reset = () => {
    this.setState({
      customer_name: "",
      customer_email: "",
      customer_phone_number: "",
      customer_address: "",
    });
  };

  //Creates a new customer on submit
  submit = async (e) => {
    e.preventDefault();

    const {
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    } = this.state;

    const customer = {
      userId: getUserId(),
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    };

    // console.log(customer);

    try {
      const response = await fetch(`${apiBaseUrl}/customers`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        // console.log('making request');
        const data = await response.json();
        const message = data["message"];
        // console.log(message);
        toast.success(message, { autoClose: 7000 });
        Router.push("/customers");
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

    this.reset();
  };
}
