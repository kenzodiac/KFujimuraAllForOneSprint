let numInput = document.getElementById("numInput");
let oddEvenReturn = document.getElementById("oddEvenReturn");
let oddEvenSubBtn = document.getElementById("button-addon2");

let savedInput = "";
let oddEvenUrl = "";

oddEvenSubBtn.addEventListener("click", function(){
    oddEvenApi(numInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            oddEvenReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function oddEvenApi(numInput){
    var letters = /^-?\d+$/;
    if (numInput.value.match(letters)){
        savedInput = numInput.value;
        oddEvenUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh6/oddOrEven/" + savedInput;
        urlCall(oddEvenUrl);
    } else {
        oddEvenReturn.textContent = "Enter a valid response. (Hint: Only whole numbers can be odd or even.)";
    }
}

//oddEvenApi(2547);