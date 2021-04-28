import React, { Component } from "react";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';



export default class ViewInvoice extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            dueDate: "",
            invoiceDate: "",
            customer_name: "",
            customer_phone_number: "",
            customer_address: "",
            invoiceItems: [],
            total: "",
        };

    }

   

  

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            dueDate: nextProps.dueDate,
            invoiceDate: nextProps.date,
            customer_name: nextProps.customerName,
            customer_phone_number: nextProps.customerPhone,
            customer_address: nextProps.customerAddress,
            invoiceItems: nextProps.invoiceItems,
            total: nextProps.totalAmount,
        });
    }

    componentDidMount() {

        // if (typeof window !== 'undefined') {
            
        // }

        const { 
            dueDate, date, customerName, 
            customerPhone, customerAddress, invoiceItems, totalAmount, showInvoice } = this.props;
        this.setState({
            dueDate,
            invoiceDate: date,
            customer_name: customerName,
            customer_phone_number: customerPhone,
            customer_address: customerAddress,
            invoiceItems: invoiceItems,
            total: totalAmount,
        });
    }

    

    

    render() {

        const {
            dueDate,
            invoiceDate,
            customer_name,
            customer_phone_number,
            customer_address,
            invoiceItems,
            total
        } = this.state;

        // console.log(this.props.showInvoice)

        let invoiceList = invoiceItems.map((item, index) =>(
            <tr key={index}>
                <td>{item.description}</td>
                <td> 
                  {item.quantity} 
                </td>
                <td>
                  GH₵{this.numberToDecimalPlace(item.unitPrice)}
                </td>
                <td>
                    GH₵{item.amount.toFixed(2)}
                </td>
            </tr>
        ));

        const padding = {
            paddingRight: "10px"
        }
      

        return (
            <PrintProvider>
                <NoPrint>            
                    <Print name="foo">
                        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                            <div className="kt-portlet">
                                <div className="kt-portlet__body kt-portlet__body--fit">
                                    <div className="kt-invoice-1">
                                        <div className="kt-invoice__actions">
                                            <div className="kt-invoice__container">
                                            
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={this.props.hideInvoice}
                                                >
                                                    Go Back
                                                </button>             
                                                <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    onClick={this.printContent}
                                                >
                                                    Print Invoice
                                                </button>
                                            </div>
                                        </div>
                                        <div className="kt-invoice__head" >
                                            <div className="kt-invoice__container">
                                                <div className="kt-invoice__brand">
                                                    <h1 className="kt-invoice__title">INVOICE</h1>
                                                    <div href="#" className="kt-invoice__logo">
                                                        {/* <a href="#"><img src="assets/media/company-logos/logo_client_color.png" /></a> */}
                                                        <img className="onnex-cropped" src="assets/media/company-logos/logo_client_color.png" />
                                                        <span className="kt-invoice__desc">
                                                            <span>work@cst.com | epaitoo.com</span>
                                                            <span>121 232 321 6</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="kt-invoice__items">
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__subtitle">DATE</span>
                                                        <span className="kt-invoice__text">{invoiceDate}</span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                    <span className="kt-invoice__subtitle">DUE DATE</span>
                                                        {/* <span className="kt-invoice__text">{invoiceNumber}</span> */}
                                                        <span className="kt-invoice__text">{dueDate}</span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__subtitle">INVOICE TO.</span>
                                                        <span className="kt-invoice__text">{customer_name}.<br />{customer_phone_number}<br />{customer_address}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                            {invoiceList}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kt-invoice__footer">
                                            <div className="kt-invoice__container">
                                                <div className="kt-invoice__bank">
                                                    <div className="kt-invoice__title">BANK TRANSFER</div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__label">Banker:</span>
                                                        <span className="kt-invoice__value">Ajax Bank </span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__label">Account Name:</span>
                                                        <span className="kt-invoice__value">Game Cast</span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__label">Account Number:</span>
                                                        <span className="kt-invoice__value">3242342342332</span>
                                                    </div>
                                                </div>
                                                <div className="kt-invoice__total">
                                                    <span className="kt-invoice__title">TOTAL AMOUNT</span>
                                                    <span className="kt-invoice__price">GH₵{this.numberToDecimalPlace(total)}</span>
                                                    <span className="kt-invoice__notice">Taxes Included</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="kt-invoice__actions">
                                            <div className="kt-invoice__container">
                                            
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={this.props.hideInvoice}
                                                >
                                                    Go Back
                                                </button>             
                                                <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    onClick={this.printContent}
                                                >
                                                    Print Invoice
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </Print>                 
                </NoPrint>
            </PrintProvider>
        );
    }

    numberToDecimalPlace = (num) => {
        return parseInt(num).toFixed(2);
    }

    printContent = () => {
        window.print();
    };
}



