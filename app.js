let arr = [];
let title = document.getElementById("title");
let body = document.getElementById("body");
let container = document.getElementById("container");


//                 With Promise


// let http = new XMLHttpRequest();

// var url = 'https://jsonplaceholder.typicode.com/posts';
// http.open('GET', url);
// http.send();

// const API_Data = new Promise((resolved, rejected) => {

//     http.addEventListener('readystatechange', function() {
//         if (http.readyState == 4) {
//             if (http.status === 200) {
//                 resolved(http.response)
//             } else {
//                 rejected("Failed");
//             }
//         }
//     })
// })

// API_Data.then((data) => display(JSON.parse(data))).catch((error) => console.log(error));

//                 With Fetch

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url).then((data) => data.json()).then(data => display(data)).catch(error => console.log(error));

function display(arr) {
    let text;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        text = `<div class="card w-75 mb-3">
                    <div class="card-body">
                        <h5 class="card-title" id="title">${arr[i].title}</h5>
                        <p class="card-text" id="body">${arr[i].body}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>`

        container.innerHTML += text;
    }
}

// Post

let data = {
    fName: "Mahmoud",
    lName: "Ahmed",
    id: "143",
}

const urlPost = ("https://jsonplaceholder.typicode.com/posts");

let options = {
    method: "Post",
    body: JSON.stringify(data),
}

fetch(url, options).then((result) => result.json()).then(result => console.log(result));
