var bTranslate = document.querySelector(".b-translate");
var txtInput = document.querySelector(".txt-input");
var txtOutput = document.querySelector(".txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with the server! Please try again later")
}

function clickHandler() {
    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json)
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};

bTranslate.addEventListener("click", clickHandler)