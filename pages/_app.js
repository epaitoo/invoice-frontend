// Global CSS
import '../public/assets/css/style.bundle.css'
import '../public/assets/plugins/global/plugins.bundle.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress


// Custom CSS for a page
import '../public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css';
import  '../public/assets/css/pages/login/login-2.css';
import  '../public/assets/css/pages/invoices/invoice-1.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}