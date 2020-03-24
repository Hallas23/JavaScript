let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=3';


async function logData(url) {
    return new Promise(await async function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(array => {
                if (url.charAt(url.length - 1).match(/[0-9]/)) {
                    resolve(array[1].title)
                }
                else {
                    resolve(array[2].name)
                }

                reject("Big noob")
            });
    })
}


Promise.all([
    logData(usersUrl),
    logData(postsUrl)
])
    .then(resultat => console.log(resultat))
    .catch(fejl => console.log(fejl))


let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=3';



async function logData(url) {
    return new Promise(await async function (resolve, reject) {
        const response = await fetch(url);
        const array = await response.json();
        if (url.charAt(url.length - 1).match(/[0-9]/)) {
            resolve(array[1].title)
        }
        else resolve(array[2].name);

        reject("Big noob")

    });
}


Promise.all([
    logData(usersUrl),
    logData(postsUrl)
])
    .then(resultat => console.log(resultat))
    .catch(fejl => console.log(fejl))
