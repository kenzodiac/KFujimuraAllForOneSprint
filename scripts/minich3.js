let names = "";
let time = "";
let askingQuestionsUrl = "";

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            console.log(data);
            //alert(data);
        }
    );
}

function questionsApi(nameInput, timeInput){
    names = nameInput;
    time = timeInput;
    askingQuestionsUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh3/AskingQuestions/" + names + "/" + time;
    urlCall(askingQuestionsUrl);
}

questionsApi("Kenny", "five minutes before class");