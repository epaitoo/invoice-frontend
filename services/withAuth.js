import React, {Component} from 'react'
import Router from 'next/router'
import { getCookie} from './Cookies';

const TokenContext = React.createContext(); 

export default function withAuth(AuthComponent) {
    return class Authenticated extends Component {
        
      static async getInitialProps(ctx) {
        const token = getCookie('token', ctx.req)
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);

        if (ctx.req && !token) {
          ctx.res.writeHead(302, { Location: '/login' })
          ctx.res.end()
          return
        }
        // Return props.
        return { ...pageProps, token }
      }

      constructor(props) {
        super(props)
        this.state = {
          isLoading: true,
          token: props.token
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

// export const Consumer = TokenContext.Consumer;

// export default function withContext(Component) {
//   return function ContextComponent(props) {
//     return (
//       <TokenContext.Consumer>
//         {context => <Component {...props} context={context} />}
//       </TokenContext.Consumer>
//     );
//   }
// }

