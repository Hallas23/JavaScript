let usersUrl = 'https://jsonplaceholder.typicode.com/users';
// let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
// let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
let async = true;
xhr.open('GET', usersUrl, async);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE)
        if (xhr.status !== 200)
            console.log("GET status code " + xhr.status);
        else {
            let response = xhr.response;
            console.log("GET: %o", response);
        }
};
xhr.send();
