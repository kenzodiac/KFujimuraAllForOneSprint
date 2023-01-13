let savedInput = "";
let restaurantUrl = "";

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

function restaurantPickerApi(input){
    savedInput = input;
    restaurantUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh9/RestaurantPicker/" + savedInput;
    urlCall(restaurantUrl);
}

restaurantPickerApi(4);