let savedInput = "";
let reverseItUrl = "";

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

function reverseApi(stringInput){
    savedInput = stringInput;
    reverseItUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh7/ReverseIt/" + savedInput;
    urlCall(reverseItUrl);
}

reverseApi('CodeStack Academy Rocks!');