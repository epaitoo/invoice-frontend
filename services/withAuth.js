import React, {Component} from 'react'
import Router from 'next/router'
import { getCookie } from './Cookies';

const TokenContext = React.createContext(); 

export default function withAuth(AuthComponent) {
    return class Authenticated extends Component {
        
      static async getInitialProps(ctx) {
        const token = getCookie('token', ctx.req)
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
        // Return props.
        return { ...pageProps, token }
      }

      constructor(props) {
        super(props)
        this.state = {
          isLoading: true
        };
      }

      componentDidMount () {
        console.log('checking auth')
        if (!this.props.token) {
          Router.push('/login')
        }
        this.setState({ isLoading: false })
      }

      render() {
          return (
            <div>
            {this.state.isLoading ? (
                <div>LOADING....</div>
              ) : (
                <TokenContext.Provider value={this.props.token}>
                  <AuthComponent {...this.props} />
                </TokenContext.Provider>
                )}
            </div> 
          );
      }


    }


}