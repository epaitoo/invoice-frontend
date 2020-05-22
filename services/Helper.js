const apiBaseUrl = 'http://localhost:8000/api';

export default class Data {

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {

        const url = apiBaseUrl + path;

        const options = {
            method,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        // if (requiresAuth) {
        //     const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
      
        //     options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        // }
      
        return fetch(url, options);
    }

    // create a user 
    async createUser(user) {
        const response = await this.api('/users', 'POST', user);
        if (response.status === 201) {
          return response.json().then(data => {
              return data;
          });
        }
        else if (response.status === 401) {
          return response.json().then(data => {
            return data.errors;
          });
        }
        else {
          throw new Error();
        }
    }

}