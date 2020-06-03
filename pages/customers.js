import React from 'react'
import Layout from '../components/Layout'
import withAuth from '../services/withAuth'
import CustomerList from '../components/Customers/CustomerList'

const Customers = () => (
    <Layout>
        <div>
            <CustomerList />
        </div>
    </Layout>
);

export default withAuth(Customers);