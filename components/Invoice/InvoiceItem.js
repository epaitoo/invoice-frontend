import React, { Component } from "react";
import NumberFormat from 'react-number-format';
import { apiBaseUrl, getToken, getUserId } from "../../services/Helper";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import fetch from "isomorphic-unfetch";

export default class InvoiceItem extends Component {
  state = {
    description: "",
    quantity: 1,
    unitPrice: "",
    amount: 0,
    hasItems: false,
    hasAdded: false,
    clickAdd: false,
    invoiceItems: [],
    total: 0,
    hasSubmit: false
  };

  
  render() {
    const {
      description,
      quantity,
      unitPrice,
      amount,
      hasItems,
      hasAdded,
      clickAdd,
      invoiceItems,
      total,
      hasSubmit
    } = this.state;

    let f = quantity * unitPrice;

    return (
      <div>
        <div className="kt-invoice__body">
          <div className="kt-invoice__container">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>UNIT PRICE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>

                <tbody>
                  {!hasItems ? (
                    <tr>
                      <td><span>Click on Add Invoice Item to add Items</span></td>
                    </tr>
                  ) : 
                    invoiceItems.map((item, index) =>(
                        <tr key={index}>
                            <td><span >{item.description}</span></td>
                            <td> 
                              <span >{item.quantity}</span>  
                            </td>
                            <td>
                              <NumberFormat 
                                value={this.numberToDecimalPlace(item.unitPrice)} 
                                displayType={'text'} 
                                thousandSeparator={true} 
                                prefix={'GH₵'} 
                                
                              />
                            </td>
                            <td>
                              <NumberFormat 
                                value={item.amount.toFixed(2)} 
                                displayType={'text'} 
                                thousandSeparator={true} 
                                prefix={'GH₵'} 
                                
                              />
                            </td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="row clearfix">
              <div className="col-md-12">
              {!clickAdd ? (
                <button className="btn btn-success pull-left" onClick={this.hideAddRowButton}>
                  Add Invoice Item
                </button>
                
              ) : null }
              {hasItems ?
                (<button  className="btn btn-danger pull-right" onClick={this.clearRows}>
                  Clear All rows
                </button>) : null
              }     
              </div>
            </div>

            <br />

            {/* Show form if add button is clicked */}

            {clickAdd ? (
              <div className="kt-portlet">
                <div className="kt-portlet__head">
                  <div className="kt-portlet__head-label">
                    <h3 className="kt-portlet__head-title">
                      Add Invoice Items
                    </h3>
                  </div>
                </div>
              
                <form className="kt-form">
                  <div className="kt-portlet__body">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={description}
                        placeholder="Enter Item Description"
                        onChange={this.change}
                      />
                    </div>
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter Item Quantity"
                        onChange={this.change}
                      />
                    </div>
                    <div className="form-group">
                      <label>Unit Price (GH₵)</label>
                      <NumberFormat 
                        name="unitPrice"
                        value={unitPrice}
                        onChange={this.change}
                        className="form-control"
                        placeholder="Enter Unit Price"
                     />
                    </div>
                    <div className="form-group">
                      <label>Amount</label>
                      <NumberFormat 
                        className="form-control"
                        name="amount"
                        value={f.toFixed(2)} 
                        thousandSeparator={true} 
                        prefix={'GH₵'} 
                        disabled
                     />
                    </div>
                  </div>
                  <div className="kt-portlet__foot">
                    <div className="kt-form__actions">
                      <button type="submit" className="btn btn-success" onClick={this.pushToInvoiceItems}>
                        Add Item
                      </button>
                      &nbsp;&nbsp;
                      <button type="reset" className="btn btn-danger" onClick={this.showAddRowButton}>
                        Close
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>

        <div className="kt-invoice__footer">
            <div className="kt-invoice__container">
                <div className="kt-invoice__bank">
                    <div className="kt-invoice__title">BANK TRANSFER</div>
                    <div className="kt-invoice__item">
                    <span className="kt-invoice__label">Banker:</span>
                    <span className="kt-invoice__value">Fidelity Bank GH</span>
                    </div>
                    <div className="kt-invoice__item">
                    <span className="kt-invoice__label">
                      Account Name:
                    </span>
                    <span className="kt-invoice__value">ONNEX ENGINEERING</span>
                    </div>
                    <div className="kt-invoice__item">
                    <span className="kt-invoice__label">Account Number:</span>
                    <span className="kt-invoice__value">1050446258013</span>
                    </div>
                </div>
                <div className="kt-invoice__total">
                    <span className="kt-invoice__title">TOTAL AMOUNT</span>
                    <span className="kt-invoice__price">
                        <NumberFormat 
                            value={total.toFixed(2)} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'GH₵'} 
                        />
                    </span>
                    {/* <span className="kt-invoice__price">${total.toFixed(2)}</span> */}
                    <span className="kt-invoice__notice">Taxes Included</span>
                    
                </div>
            </div>
        </div>
        <div className="kt-invoice__actions">
            <div className="kt-invoice__container">
              {hasSubmit ? (
                <button
                    type="button"
                    className="btn btn-label-brand btn-bold"
                >
                  Print Invoice
                </button>
              ) : null}               
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.submit}
                >
                    Submit
                </button>
            </div>
        </div>
        <ToastContainer />
      </div>
    );
  }


    numberToDecimalPlace = (num) => {
      return parseInt(num).toFixed(2);
    }

    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
        return {
            [name]: value,
        };
        });
    };

    handleAmountChange(val) {
        this.setState({
            amount : val
        });
        console.log(val);
    }

    //Clear All Invoice Item rows 
    clearRows = () => {
        this.setState({
            invoiceItems: [],
            hasItems: false,
            total: 0
        })
    }  

    hideAddRowButton = () => {
        this.setState({
            clickAdd: true
        })
    }  

    showAddRowButton = () => {
        this.setState({
            clickAdd: false
        })
    } 


  reset = () => {
    this.setState({
        description: "",
        quantity: 1,
        unitPrice: "",
        amount: 0,
    });
  };

  // Push the Item Oject to the InvoiceItem Array
  pushToInvoiceItems = (e) => {
    e.preventDefault();

    const {
        description,
        quantity,
        unitPrice,
        total
    } = this.state;

    let amount = quantity * unitPrice;
    
    const item = {
        description,
        quantity,
        unitPrice,
        amount 
    }

    this.setState({
        invoiceItems: [ ...this.state.invoiceItems, item ],
        hasItems: true,
        total: total + item.amount
    });

    this.reset();
  }


  submit = async (e) => {
    e.preventDefault();

    const { invoiceItems, total, hasSubmit } = this.state;

    const { 
      invoiceDate,
      dueDate,
      customerId,
    } = this.props

    const data = {
      user_id: getUserId(),
      customer_id: customerId,
      date: invoiceDate,
      due_date: dueDate,
      invoice_items: invoiceItems,
      terms_and_conditions: true,
      grand_total: total
    }

    // console.log(data);

    try {
      const response = await fetch(`${apiBaseUrl}/invoices`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // console.log('making request');
        const data = await response.json();
        const message = data["message"];
        // console.log(message);
        this.setState({ hasSubmit: true });
        toast.success(message, { autoClose: 7000 });
        Router.push("/invoice");
      } else {
        console.log("Error fetching data");
        let error = new Error(response.statusText);
        error.response = response;
        return toast.warning('Hmmm...Something Went Wrong', { autoClose: 5000 });
      }
    } catch (error) {
      toast.error('Cannot create Request Now', { autoClose: 5000 });
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
      // throw new Error(error);
    }


  }

}
