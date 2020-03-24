let usersUrl1 = 'https://jsonplaceholder.typicode.com/users';
let usersUrl2 = 'https://jsonplaceholder.typicode.com/usersX';
let usersUrl3 = 'httpsX://jsonplaceholder.typicode.com/users';


let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
// let postsUrl = 'https://jsonplaceholder.typicode.com/postsX?userId=';
// let postsUrl = 'httpsX://jsonplaceholder.typicode.com/posts?userId=';

function logData(url, bruger) {
    try {
        fetch(url + bruger)
            .then(response => response.json())
            .then(array => console.log(array[2].title))

    }
    catch (e) {
        console.log("Exception " + e + "1")
    }
}

async function logPostsAsync(url, bruger) {
    try {
        const response = await fetch(url + bruger);
        const array = await response.json();
        console.log(array[2].title)
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }
}

logData(postsUrl, "2");
logPostsAsync(postsUrl, "2");