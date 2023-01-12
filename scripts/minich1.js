let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("button-addon2");

let savedInput = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function(){
    helloApi(nameInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function helloApi(nameInput){
    var letters = /^[a-zA-Z\s-]+$/;
    if (nameInput.value.match(letters)){
        savedInput = nameInput.value;
        sayHelloUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh1/Hello/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        helloReturn.textContent = "Enter a valid response";
    }
}

//helloApi('Kenny');