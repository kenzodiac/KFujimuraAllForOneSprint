let numInput1 = document.getElementById("num1Input");
let numInput2 = document.getElementById("num2Input");
let greaterThanReturn = document.getElementById("greaterThanReturn");
let greaterThanSubBtn = document.getElementById("submit");

let num1;
let num2;
let greaterThanUrl = "";

greaterThanSubBtn.addEventListener("click", function(){
    greaterThanApi(numInput1, numInput2);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            greaterThanReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function greaterThanApi(numInput1, numInput2){
    var letters = /^-?(\.\d+|\d+(\.\d+)?)$/;
    if (numInput1.value.match(letters) && numInput2.value.match(letters)){
        num1 = numInput1.value;
        num2 = numInput2.value;
        greaterThanUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh4/GreaterThan/" + num1 + "/" + num2;
        urlCall(greaterThanUrl);
    } else {
        greaterThanReturn.textContent = "Enter a valid response. (Hint: remember to fill both fields.)";
    }
}

//greaterThanApi(20, -3);