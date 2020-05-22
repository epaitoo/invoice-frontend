// Global CSS
import '../public/assets/css/style.bundle.css'
import '../public/assets/plugins/global/plugins.bundle.css'
import 'react-toastify/dist/ReactToastify.css';

// Custom CSS for a page
import '../public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css'
import  '../public/assets/css/pages/login/login-2.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}