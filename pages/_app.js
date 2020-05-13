// Global CSS
import '../public/assets/css/style.bundle.css'
import '../public/assets/plugins/global/plugins.bundle.css'

// Custom CSS for a page
import '../public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}