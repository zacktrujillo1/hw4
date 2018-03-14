var emailstuff = document.getElementById("emails");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();

function renderHTML(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].email
    }
    


    emailstuff.insertAdjacentHTML('Beforeend', htmlString)
}
