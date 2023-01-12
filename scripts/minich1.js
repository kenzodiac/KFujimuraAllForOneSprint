let savedInput = "";
let sayHelloUrl = "";

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            console.log(data);
            alert(data);
        }
    );
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if (nameInput.match(letters)){
        savedInput = nameInput;
        sayHelloUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh1/Hello/" + savedInput;
        urlCall(sayHelloUrl);
    }
}

helloApi('Kenny');