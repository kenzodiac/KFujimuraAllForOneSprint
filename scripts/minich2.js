let num1;
let num2;
let add2NumbersUrl = "";

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

function addApi(num1Input, num2Input){
    num1 = num1Input;
    num2 = num2Input;
    add2NumbersUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh2/Add2Numbers/" + num1 + "/" + num2;
    urlCall(add2NumbersUrl);
}

addApi(4, 5);