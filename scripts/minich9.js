let choice1btn = document.getElementById("submit1");
let choice2btn = document.getElementById("submit2");
let choice3btn = document.getElementById("submit3");
let choice4btn = document.getElementById("submit4");
let restaurantReturn = document.getElementById("restaurantReturn");

let savedInput = "";
let restaurantUrl = "";

choice1btn.addEventListener("click", function(){
    restaurantPickerApi(1);
});
choice2btn.addEventListener("click", function(){
    restaurantPickerApi(2);
});
choice3btn.addEventListener("click", function(){
    restaurantPickerApi(3);
});
choice4btn.addEventListener("click", function(){
    restaurantPickerApi(4);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            restaurantReturn.textContent = data;
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

//restaurantPickerApi(4);