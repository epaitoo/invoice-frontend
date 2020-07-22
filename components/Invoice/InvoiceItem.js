import React, { Component } from "react";
import Layout from "../Layout";
import NumberFormat from 'react-number-format';

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
    total: 0
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
      total
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
                      <td>Click on Add Invoice Item to add Items</td>
                    </tr>
                  ) : 
                    invoiceItems.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="row clearfix">
              <div className="col-md-12">
              {!clickAdd ? (
                <button id="add_row" className="btn btn-success pull-left" onClick={this.hideAddRowButton}>
                  Add Invoice Item
                </button>
              ) : null }
              {hasItems ?
                (<button id="delete_row" className="btn btn-danger pull-right" onClick={this.clearRows}>
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
                      <input
                        type="number"
                        className="form-control"
                        name="unitPrice"
                        value={unitPrice}
                        placeholder="Enter Unit Price"
                        onChange={this.change}
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
                        onChange={e => this.handleAmountChange(e.target.value)}
                        disabled
                     />
                    </div>
                  </div>
                  <div className="kt-portlet__foot">
                    <div className="kt-form__actions">
                      <button type="submit" className="btn btn-success" onClick={this.submit}>
                        Submit
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
                    <span className="kt-invoice__label">Account Name:</span>
                    <span className="kt-invoice__value">Barclays UK</span>
                    </div>
                    <div className="kt-invoice__item">
                    <span className="kt-invoice__label">
                        Account Number:
                    </span>
                    <span className="kt-invoice__value">1234567890934</span>
                    </div>
                    <div className="kt-invoice__item">
                    <span className="kt-invoice__label">Code:</span>
                    <span className="kt-invoice__value">BARC0032UK</span>
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
                <button
                    type="button"
                    className="btn btn-label-brand btn-bold"
                >
                    Download Invoice
                </button>
                <button
                    type="button"
                    className="btn btn-label-brand btn-bold"
                >
                    Print Invoice
                </button>
            </div>
        </div>


      </div>
    );
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


  submit = (e) => {
    e.preventDefault();

    const {
        description,
        quantity,
        unitPrice,
        total
    } = this.state;

    let amount = quantity * unitPrice;
    // amount.toFixed(2);
    // console.log(amount.toFixed(2));
    // this.setState({ amount: initialTotal });
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

}
