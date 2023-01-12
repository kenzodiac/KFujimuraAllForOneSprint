let num1;
let num2;
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

function questionsApi(numInput1, numInput2){
    num1 = numInput1;
    num2 = numInput2;
    askingQuestionsUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh4/GreaterThan/" + num1 + "/" + num2;
    urlCall(askingQuestionsUrl);
}

questionsApi(20, -3);