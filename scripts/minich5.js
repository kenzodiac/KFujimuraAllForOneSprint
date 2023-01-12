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

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            console.log(data);
            alert(data);
        }
    );
}

function madLibApi(name1Input, verb1Input, sport1Input, musicGenre1Input, pet1Input, petName1Input, name2Input, verb2Input, hobby1Input, musicGenre2Input){
    name1 = name1Input;
    verb1 = verb1Input;
    sport1 = sport1Input;
    musicGenre1 = musicGenre1Input;
    pet1 = pet1Input;
    petName1 = petName1Input;
    name2 = name2Input;
    verb2 = verb2Input;
    hobby1 = hobby1Input;
    musicGenre2 = musicGenre2Input;
    madLibUrl = "https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh5/MadLib/" + name1 + "/" + verb1 + "/" + sport1 + "/" + musicGenre1 + "/" + pet1 + "/" + petName1 + "/" + name2 + "/" + verb2 + "/" + hobby1 + "/" + musicGenre2;
    urlCall(madLibUrl);
}

madLibApi("Ken", "sleep", "Basketball", "Rock & Roll", "cat", "Mugget", "Amar", "dance", "crypto currency", "Gangster Rap");