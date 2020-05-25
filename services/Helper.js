import redirect from './redirect';
import { removeCookie } from './Cookies';



export const apiBaseUrl = 'http://localhost:8000/api';



// Sign Out
export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie('token');
    redirect("/login", ctx);
  }
  localStorage.clear();
};