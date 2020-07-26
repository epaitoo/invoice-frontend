import React from "react";

function ViewInvoice() {
    const bgImg = {
        backgroundImage: 'url(assets/media/bg/bg-6.jpg)'
    }


    return( 
                 
        <div className="modal fade" id="kt_modal_4_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
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
                                                        <span className="kt-invoice__text">Dec 12, 2017</span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__subtitle">INVOICE NO.</span>
                                                        <span className="kt-invoice__text">GS 000014</span>
                                                    </div>
                                                    <div className="kt-invoice__item">
                                                        <span className="kt-invoice__subtitle">INVOICE TO.</span>
                                                        <span className="kt-invoice__text">Iris Watson, P.O. Box 283 8562 Fusce RD.<br />Fredrick Nebraska 20620</span>
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
                                                            <tr>
                                                                <td>Creative Design</td>
                                                                <td>80</td>
                                                                <td>$40.00</td>
                                                                <td>$3200.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Front-End Development</td>
                                                                <td>120</td>
                                                                <td>$40.00</td>
                                                                <td>$4800.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Back-End Development</td>
                                                                <td>210</td>
                                                                <td>$60.00</td>
                                                                <td>$12600.00</td>
                                                            </tr>
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
                                                    <span className="kt-invoice__price">$20.600.00</span>
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
		</div>
    );

}


export default ViewInvoice;
