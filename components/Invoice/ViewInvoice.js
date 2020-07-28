import React, { Component } from "react";

export default class ViewInvoice extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            invoiceNumber: "",
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
            invoiceNumber: nextProps.invoiceNumber,
            invoiceDate: nextProps.date,
            customer_name: nextProps.customerName,
            customer_phone_number: nextProps.customerPhone,
            customer_address: nextProps.customerAddress,
            invoiceItems: nextProps.invoiceItems,
            total: nextProps.totalAmount,
        });
    }

    componentDidMount() {
        const { 
            invoiceNumber, date, customerName, 
            customerPhone, customerAddress, invoiceItems, totalAmount } = this.props;
        this.setState({
            invoiceNumber: invoiceNumber,
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
            invoiceNumber,
            invoiceDate,
            customer_name,
            customer_phone_number,
            customer_address,
            invoiceItems,
            total
        } = this.state;

        

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
        ))
      

        return (
            <div className="modal fade" id="kt_modal_4_2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">View Invoice</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                                <div className="kt-portlet">
                                    <div className="kt-portlet__body kt-portlet__body--fit">
                                        <div className="kt-invoice-1">
                                            <div className="kt-invoice__head" >
                                                <div className="kt-invoice__container">
                                                    <div className="kt-invoice__brand">
                                                        <h1 className="kt-invoice__title">INVOICE</h1>
                                                        <div href="#" className="kt-invoice__logo">
                                                            <a href="#"><img src="assets/media/company-logos/logo_client_color.png" /></a>
                                                            <span className="kt-invoice__desc">
                                                                <span>Dealers in Security Safe, Filing Cabinet & Office Equipment</span>
                                                                <span>onnexengineering@gmail.com | +233 244 640 212</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="kt-invoice__items">
                                                        <div className="kt-invoice__item">
                                                            <span className="kt-invoice__subtitle">DATE</span>
                                                            <span className="kt-invoice__text">{invoiceDate}</span>
                                                        </div>
                                                        <div className="kt-invoice__item">
                                                            <span className="kt-invoice__subtitle">INVOICE NO.</span>
                                                            <span className="kt-invoice__text">{invoiceNumber}</span>
                                                        </div>
                                                        <div className="kt-invoice__item">
                                                            <span className="kt-invoice__subtitle">INVOICE TO.</span>
                                                            <span className="kt-invoice__text">{customer_name}.<br />{customer_address}<br />{customer_phone_number}</span>
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
                                                            <span className="kt-invoice__label">Account Name:</span>
                                                            <span className="kt-invoice__value">Barclays UK</span>
                                                        </div>
                                                        <div className="kt-invoice__item">
                                                            <span className="kt-invoice__label">Account Number:</span>
                                                            <span className="kt-invoice__value">1234567890934</span>
                                                        </div>
                                                        <div className="kt-invoice__item">
                                                            <span className="kt-invoice__label">Code:</span>
                                                            <span className="kt-invoice__value">BARC0032UK</span>
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
                                                    <button type="button" className="btn btn-label-brand btn-bold">Download Invoice</button>
                                                    <button type="button" className="btn btn-label-brand btn-bold">Print Invoice</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                   
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
		    </div>
             
        );
    }

    numberToDecimalPlace = (num) => {
        return parseInt(num).toFixed(2);
    }
}



