let savedInput = "";
let oddEvenUrl = "";

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

function oddEvenApi(numInput){
    savedInput = numInput;
    oddEvenUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh6/oddOrEven/" + savedInput;
    urlCall(oddEvenUrl);
}

oddEvenApi(2547);