import React, { useState } from "react";
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import fetch from "isomorphic-unfetch";
import { apiBaseUrl, getToken } from "../services/Helper";
// import ViewInvoice from "../components/Invoice/ViewInvoice";


// React Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider, PaginationListStandalone } from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

// use react-easy-print package in this component which doesn't not work with SSR
const ViewInvoiceWithNoSSR = dynamic(
  () => import('../components/Invoice/ViewInvoice'),
  { ssr: false }
)

function invoiceTable({ invoices }) {
    const [index, setIndex] = useState(0);

    // hide table hook
    const [ showInvoice, setShowInvoice ] = useState(false);

    const invoiceData = invoices.data;
  
    const { SearchBar } = Search;

    const contentTable = ({ paginationProps, paginationTableProps }) => (
        <div>
          {/* <PaginationListStandalone { ...paginationProps } /> */}
          <ToolkitProvider
              keyField="id"
              columns={ columns }
              data={ invoiceData }
              search
          >
            {
              toolkitprops => (
                <div>
                  <SearchBar { ...toolkitprops.searchProps } />
                  <hr/>
                  <BootstrapTable
                    striped
                    hover
                    { ...toolkitprops.baseProps }
                    { ...paginationTableProps } 
                  />
                  {invoiceData.length <= 0 ? <div><h4 className="text-center">No data found</h4></div> : null}
                </div>
              )
            }
          </ToolkitProvider>
          {/* <PaginationListStandalone { ...paginationProps } /> */}
        </div>
    );

    // Get the index of a Row and set the Index using setIndex Hook
    const getIndex = (i) => {
        // console.log('I am here: '+ i);
        const arrayIndex = invoiceData
        .map(function (e) {
            return e.id;
        })
        .indexOf(i);
        setIndex(arrayIndex);
    };

    // Hide or show Invoice Component
    const displayInvoice = () => {
      return setShowInvoice(true);
      
    }

    const hideInvoice = () => {
      return setShowInvoice(false);
      
    }


    const actionsFormatter = (cell, row, rowIndex) => {
        return (
          <div>
            <button
              type="button"
              className="btn btn-success btn-icon-sm"
              data-toggle="modal"
              data-target="#kt_modal_4_2"
              aria-haspopup="true"
              onClick={() => {getIndex(row.id); displayInvoice()}}
            >
              <i className="fas fa-edit"></i>
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger btn-icon-sm"
            //   onClick={() => deleteCutomer(row.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        );
    };

    const columns = [
        // { dataField:  "id", text: "Id"},
        { dataField: "invoice_number", text: "Invoice Number" },
        { dataField: "customer_name", text: "Customer " },
        { dataField: "date", text: "Date Created" },
        { dataField: "id", text: "Actions", formatter: actionsFormatter },
    ];

    console.log(showInvoice);

    return (
        <Layout>
            {showInvoice == false ? 
              <div>
                <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                    <div className="kt-portlet kt-portlet--mobile">
                        <div className="kt-portlet__head kt-portlet__head--lg">
                        <div className="kt-portlet__head-label">
                            <span className="kt-portlet__head-icon">
                            <i className="kt-font-brand flaticon2-line-chart"></i>
                            </span>
                            <h3 className="kt-portlet__head-title">Customer List</h3>
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
                                <Link href="/createinvoice">
                                    <button
                                    type="button"
                                    className="btn btn-primary btn-icon-sm"
                                    >
                                    <i className="flaticon2-plus"></i> Add New
                                    </button>

                                </Link>
                                
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
                                    <PaginationProvider
                                        pagination={paginationFactory()}
                                    >
                                    {contentTable }
                                    </PaginationProvider>                    
                                </div>
                                </div>

                                {/* <!--end::Section--> */}
                            </div>

                        {/* <!--end::Form--> */}
                        </div>

                        {/* <!--end::Portlet--> */}
                    </div>

                    
                    

                    <ToastContainer />
                </div>
              </div> : 

              <ViewInvoiceWithNoSSR 
                  date={invoiceData[index].date}
                  invoiceNumber={invoiceData[index].invoice_number}
                  customerName={invoiceData[index].customer_name}
                  customerPhone={invoiceData[index].customer_phone_number}
                  customerAddress={invoiceData[index].customer_address}
                  invoiceItems={invoiceData[index].invoice_items}
                  totalAmount={invoiceData[index].grand_total}
                  showInvoice={showInvoice}
                  hideInvoice={hideInvoice}
              /> 
            }
            
        </Layout>

    );
  
}

export async function getStaticProps() {
    // console.log('making request');
    // Call an external API endpoint to get customers.
    try {
      const response = await fetch(`${apiBaseUrl}/invoices`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // console.log('making request');
        const invoices = await response.json();
        // console.log(data);
        return {
          props: {
            invoices,
          },
        };
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

export default invoiceTable;
