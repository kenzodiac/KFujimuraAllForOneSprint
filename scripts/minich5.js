let name1Input = document.getElementById("name1Input");
let verb1Input = document.getElementById("verb1Input");
let sport1Input = document.getElementById("sport1Input");
let musicGenre1Input = document.getElementById("musicGenre1Input");
let pet1Input = document.getElementById("pet1Input");
let petName1Input = document.getElementById("petName1Input");
let name2Input = document.getElementById("name2Input");
let verb2Input = document.getElementById("verb2Input");
let hobby1Input = document.getElementById("hobby1Input");
let musicGenre2Input = document.getElementById("musicGenre2Input");
let madLibReturn = document.getElementById("madLibReturn");
let madLibSubBtn = document.getElementById("submit");

let name1 ="";
let verb1 ="";
let sport1 ="";
let musicGenre1 ="";
let pet1 ="";
let petName1 ="";
let name2 ="";
let verb2 ="";
let hobby1 ="";
let musicGenre2 ="";
let madLibUrl = "";

madLibSubBtn.addEventListener("click", function(){
    madLibApi(name1Input, verb1Input, sport1Input, musicGenre1Input, pet1Input, petName1Input, name2Input, verb2Input, hobby1Input, musicGenre2Input);
});

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            madLibReturn.textContent = data;
            console.log(data);
            //alert(data);
        }
    );
}

function madLibApi(name1Input, verb1Input, sport1Input, musicGenre1Input, pet1Input, petName1Input, name2Input, verb2Input, hobby1Input, musicGenre2Input){
    if (name1Input.value && verb1Input.value && sport1Input.value && musicGenre1Input.value && pet1Input.value && petName1Input.value && name2Input.value && verb2Input.value && hobby1Input.value && musicGenre1Input.value) {
        name1 = name1Input.value;
        verb1 = verb1Input.value;
        sport1 = sport1Input.value;
        musicGenre1 = musicGenre1Input.value;
        pet1 = pet1Input.value;
        petName1 = petName1Input.value;
        name2 = name2Input.value;
        verb2 = verb2Input.value;
        hobby1 = hobby1Input.value;
        musicGenre2 = musicGenre2Input.value;
        madLibUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh5/MadLib/" + name1 + "/" + verb1 + "/" + sport1 + "/" + musicGenre1 + "/" + pet1 + "/" + petName1 + "/" + name2 + "/" + verb2 + "/" + hobby1 + "/" + musicGenre2;
        urlCall(madLibUrl);
    } else {
        madLibReturn.textContent = "Enter a valid response. (Hint: remember to fill ALL fields.)";
    }
}

//madLibApi("Ken", "sleep", "Basketball", "Rock & Roll", "cat", "Mugget", "Amar", "dance", "crypto currency", "Gangster Rap");