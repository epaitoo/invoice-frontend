import React, { Component } from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import { ToastContainer, toast } from "react-toastify";
import { apiBaseUrl, getToken, getUserId } from "../../services/Helper";

export default class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_id: "",
      customer_name: "",
      customer_email: "",
      customer_phone_number: "",
      customer_address: "",
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      customer_id: nextProps.customerId,
      customer_name: nextProps.name,
      customer_email: nextProps.email,
      customer_phone_number: nextProps.phone,
      customer_address: nextProps.address,
    });
  }

  componentDidMount() {
    const { customerId, name, email, phone, address } = this.props;
    this.setState({
      customer_id: customerId,
      customer_name: name,
      customer_email: email,
      customer_phone_number: phone,
      customer_address: address,
    });
  }

  render() {
    const {
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    } = this.state;

    // console.log(customerId)

    return (
      <div
        className="modal fade"
        id="kt_modal_5"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabelz"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelz">
                Update Customer Information
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
                  <label htmlFor="customer-name" className="form-control-label">
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer-name"
                    name="customer_name"
                    value={customer_name}
                    onChange={this.change}
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
                    className="form-control"
                    id="customer-email"
                    name="customer_email"
                    value={customer_email}
                    onChange={this.change}
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
                    className="form-control"
                    id="customer-phone"
                    name="customer_phone_number"
                    value={customer_phone_number}
                    onChange={this.change}
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
                    className="form-control"
                    id="customer-address"
                    name="customer_address"
                    value={customer_address}
                    onChange={this.change}
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
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.submit}
              >
                Update
              </button>
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
      customer_id: "",
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
      customer_id,
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    } = this.state;

    const customer = {
      id: customer_id,
      userId: getUserId(),
      customer_name,
      customer_email,
      customer_phone_number,
      customer_address,
    };

    // console.log(customer);

    try {
      const response = await fetch(`${apiBaseUrl}/customers/${customer_id}`, {
        method: "PUT",
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
        toast.warning('Hmmm...Something Went Wrong', { autoClose: 5000 });
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
      // throw new Error(error);
    }

    this.reset();
  };
}
