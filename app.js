var arr = [];
var title = document.getElementById("title");
var body = document.getElementById("body");
var container = document.getElementById("container");

var http = new XMLHttpRequest();

var url = 'https://jsonplaceholder.typicode.com/posts';

http.open('GET', url);

http.send();

http.addEventListener('readystatechange', function() {
    if (http.readyState == 4) {
        arr = JSON.parse(http.response);
        display(arr);
    }
})



function display(arr) {
    var text;
    var arrLength = arr.length;
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

