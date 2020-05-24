import React from 'react'
import Layout from '../components/Layout'
import withAuth from '../services/withAuth'


const Home = () => (
  <Layout>
    <div>
      <h1>This is the Homepage</h1>
    </div>
  </Layout>
)

export default withAuth(Home);
