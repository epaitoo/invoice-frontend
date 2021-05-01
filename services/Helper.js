import redirect from './redirect';
import { removeCookie } from './Cookies';
import fetch from "isomorphic-unfetch";
import { toast } from 'react-toastify';



export const apiBaseUrl = 'https://e-invoice-app.herokuapp.com/api';



// Sign Out
export const signOut = async (ctx = {}) => {
  if (process.browser) {

    // make a request to the server
    try{
      const response = await fetch(`${apiBaseUrl}/logout`, {
          method: 'POST',
          headers: { 
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('authToken'),
          
          },
          
      })
      if (response.ok) {
          const data = await response.json();
          const message = data['message'];
          toast.success(message, { autoClose: 7000 });
          removeCookie('token');
          localStorage.clear();
          redirect("/login", ctx);
          
      } else {
          toast.warning('Could Not logout...Please try again', { autoClose: 5000 });
          // https://github.com/developit/unfetch#caveats
          let error = new Error(response.statusText)
          error.response = response
          return Promise.reject(error)
      }
    } catch (error) {
        toast.error('Hmmm...Something Went Wrong', { autoClose: 5000 });
        console.error(
            'You have an error in your code or there are Network issues.',
            error
        )
        throw new Error(error);
    }

   
  }
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

export const showApiRequestError = (message, res) => {
  toast.warning(message, { autoClose: 5000 });
  console.log("Error fetching data");
  let error = new Error(res.statusText);
  error.response = res;
  return toast.warning(message, { autoClose: 5000 });;
}

// Make Get Request
// export const getApiRequest = (route) => {
//   if (process.browser) {

//   }
// }
// export const token = localStorage.getItem('authToken');