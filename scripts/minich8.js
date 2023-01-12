let savedInput = "";
let directoryUrl = "";

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

function directoryApi(input){
    savedInput = input;
    directoryUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh8/GetStudentByAnything/" + savedInput;
    urlCall(directoryUrl);
}

directoryApi('Kenneth');