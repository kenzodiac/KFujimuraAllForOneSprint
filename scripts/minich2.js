let num1Input = document.getElementById("num1Input");
let num2Input = document.getElementById("num2Input");
let add2NumsReturn = document.getElementById("add2NumsReturn");
let add2NumsSubBtn = document.getElementById("submit");

let num1;
let num2;
let add2NumbersUrl = "";

add2NumsSubBtn.addEventListener("click", function(){
    addApi(num1Input, num2Input);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            add2NumsReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function addApi(num1Input, num2Input){
    var letters = /^-?\d+$/;
    if (num1Input.value.match(letters) && num2Input.value.match(letters)){
        num1 = num1Input.value;
        num2 = num2Input.value;
        add2NumbersUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh2/Add2Numbers/" + num1 + "/" + num2;
        urlCall(add2NumbersUrl);
    } else {
        add2NumsReturn.textContent = "Enter a valid response. (Hint: Use only whole numbers.)";
    }
}

//addApi(4, 5);