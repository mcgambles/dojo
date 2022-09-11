var requestCount = document.querySelector("#requests");
var connectionCount = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    connectionCount.innerText++;
}

function decline(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
}

function edit(){
    username.innerText = "Lisa L";
}
