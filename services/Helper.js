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

// get token
export const getToken = ()  => {
  if (process.browser) {
    const token = localStorage.getItem('authToken');
    return token;
 }
}

export const getUserId = ()  => {
  if (process.browser) {
    const userId = localStorage.getItem('userID');
    return userId;
 }
}

// const token = localStorage.getItem('authToken');