let nameInput = document.getElementById("askingQsInput1");
let timeInput = document.getElementById("askingQsInput2");
let questionsReturn = document.getElementById("askingQsReturn");
let questionsSubBtn = document.getElementById("submit");

let names = "";
let time = "";
let askingQuestionsUrl = "";

questionsSubBtn.addEventListener("click", function(){
    questionsApi(nameInput, timeInput);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            questionsReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function questionsApi(nameInput, timeInput){
    if (nameInput.value && timeInput.value) {
        names = nameInput.value;
        time = timeInput.value;
        askingQuestionsUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh3/AskingQuestions/" + names + "/" + time;
        urlCall(askingQuestionsUrl);
    } else {
        questionsReturn.textContent = "Enter a valid response. (Did you fill in both fields?)";
    }
}

//questionsApi("Kenny", "five minutes before class");