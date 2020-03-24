let usersUrl1 = 'https://jsonplaceholder.typicode.com/users';
let usersUrl2 = 'https://jsonplaceholder.typicode.com/usersX';
let usersUrl3 = 'httpsX://jsonplaceholder.typicode.com/users';


let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
// let postsUrl = 'https://jsonplaceholder.typicode.com/postsX?userId=';
// let postsUrl = 'httpsX://jsonplaceholder.typicode.com/posts?userId=';

function logData(url) {
    try {
        fetch(url)
            .then(response => response.json())
            .then(array => console.log(array[1]));
    }
    catch (e) {
        console.log("Exception " + e + "1")
    }
}

async function logDataAsync(url) {
    try {
        const response = await fetch(url);
        const array = await response.json();
        console.log(array[1]);
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }
}

logData(usersUrl1);
logDataAsync(usersUrl1);