let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=2';

function logData(url) {
    try {
        fetch(url)
            .then(response => response.json())
            .then(array => console.log(array[2].title));
    }
    catch (e) {
        console.log("Exception " + e + "1")
    }
}

async function logDataAsync(url) {
    try {
        const response = await fetch(url);
        const array = await response.json();
        console.log(array[2].title);
    }
    catch (e) {
        console.log("Exception " + e + "2")
    }
}

logData(postsUrl);
logDataAsync(postsUrl);