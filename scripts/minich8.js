let stringInput = document.getElementById("directoryInput");
let firstNameReturn = document.getElementById("firstName");
let lastNameReturn = document.getElementById("lastName");
let slackNameReturn = document.getElementById("slackName");
let emailReturn = document.getElementById("email");
let hobbiesReturn = document.getElementById("hobbies");
let directorySubBtn = document.getElementById("submit");

let savedInput = "";
let directoryUrl = "";

let studentNames = [];

directorySubBtn.addEventListener("click", function(){
    directoryApi(stringInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            firstNameReturn.textContent = data.firstName;
            lastNameReturn.textContent = data.lastName;
            slackNameReturn.textContent = data.slackName;
            emailReturn.textContent = data.email;
            hobbiesReturn.textContent = data.hobbies;
            console.log(data);
            //alert(data);
        }
    );
}

function directoryApi(input){
    if (stringInput.value) {
        savedInput = stringInput.value;
        directoryUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh8/GetStudentByAnything/" + savedInput;
        urlCall(directoryUrl);
    } else {
        firstNameReturn.textContent = "N/A";
        lastNameReturn.textContent = "N/A";
        slackNameReturn.textContent = "N/A";
        emailReturn.textContent = "N/A";
        hobbiesReturn.textContent = "Make sure to enter a value in the input field!";
    }
}

//directoryApi('Kenneth');