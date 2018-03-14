var namestuff = document.getElementById("names");
var ourRequest2 = new XMLHttpRequest();
ourRequest2.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest2.onload = function() {
    var ourData2 = JSON.parse(ourRequest2.responseText);
    renderHTML(ourData2);
};
ourRequest2.send();

function renderHTML(data2){
    var htmlString2 = "";

    for (i = 0; i < data2.length; i++){
        htmlString2 += "<p>" + data2[i].name
    }
    


    namestuff.insertAdjacentHTML('Beforeend', htmlString2)
}
