let stringInput = document.getElementById("reverseInput");
let reverseReturn = document.getElementById("reverseReturn");
let reverseSubBtn = document.getElementById("submit");

let savedInput = "";
let reverseItUrl = "";

reverseSubBtn.addEventListener("click", function(){
    reverseApi(stringInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            reverseReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function reverseApi(stringInput){
    if (stringInput.value) {
        savedInput = stringInput.value;
        reverseItUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh7/ReverseIt/" + savedInput;
        urlCall(reverseItUrl);
    } else {
        reverseReturn.textContent = "Enter a valid response. (Text field can't be empty!)";
    }
}

//reverseApi('CodeStack Academy Rocks!');