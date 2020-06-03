import React, { Component } from 'react';
import CreateCustomer from './CreateCustomer'
import UpdateCustomer from './UpdateCustomer'

export default class CustomerList extends Component {

    render() {
        return (
            <div>
                <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

                    <div className="kt-portlet kt-portlet--mobile">
                        <div className="kt-portlet__head kt-portlet__head--lg">

                            <div className="kt-portlet__head-label">
                                <span className="kt-portlet__head-icon">
                                    <i className="kt-font-brand flaticon2-line-chart"></i>
                                </span>
                                <h3 className="kt-portlet__head-title">
                                    Customer List
                                </h3>
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
                                        <button type="button" className="btn btn-brand btn-icon-sm" data-toggle="modal" data-target="#kt_modal_4" aria-haspopup="true">
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
                                                    <tr>
                                                        <th>
                                                             Jhon Stone
                                                        </th>
                                                        <td>ert@jhon.com</td>
                                                        <td>245252524</td>
                                                        <td>JJ JCJ ADJA</td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary" ><i className="far fa-eye"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#kt_modal_5" aria-haspopup="true"><i className="fas fa-edit"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-danger" ><i className="far fa-trash-alt"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Lisa Nilson</th>
                                                        <td>dsdf@lisa.com</td>
                                                        <td>2342342342</td>
                                                        <td>JJ JCJ ADJA</td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary" ><i className="far fa-eye"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-success" ><i className="fas fa-edit"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-danger" ><i className="far fa-trash-alt"></i></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Larry</th>
                                                        <td>Larry@twitter.com</td>
                                                        <td>524234232432</td>
                                                        <td>234234 SKSF ACCRA</td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary" ><i className="far fa-eye"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-success" ><i className="fas fa-edit"></i></button>&nbsp;
                                                            <button type="button" className="btn btn-danger" ><i className="far fa-trash-alt"></i></button>
                                                        </td>
                                                    </tr>
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

                </div>

                {/* Create Customer Modal */}
                <CreateCustomer />
                {/* Update Customer Modal */}
                <UpdateCustomer />


            </div>
           
            
            

        );
    }

}
