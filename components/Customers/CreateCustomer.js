import React, { Component } from 'react';


export default class CreateCustomer extends Component {

    render() {
        return (
            
            <div className="modal fade" id="kt_modal_4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Customer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="customer-name" className="form-control-label">Customer Name:</label>
                                    <input type="text" className="form-control" id="customer-name"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customer-email" className="form-control-label">Customer Email:</label>
                                    <input type="text" className="form-control" id="customer-email"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customer-phone" className="form-control-label">Customer Phone Number:</label>
                                    <input type="text" className="form-control" id="customer-phone"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customer-address" className="form-control-label">Customer Address:</label>
                                    <input type="text" className="form-control" id="customer-address"  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}