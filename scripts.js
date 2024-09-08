const $quote = document.getElementById("quote");
const $author = document.getElementById("author");
const $anotherButton = document.getElementById("anotherButton");
const $submitButton = document.getElementById("submitButton");

const urlApi = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "kIG+hCruhRu/21qiawbOuw==EZS6LOkUqvrcpS5R"; // Reemplaza con tu clave API real

const config = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", // Encabezado para el tipo de contenido
        "X-Api-Key": apiKey // Encabezado con la clave API
    }
};

const getQuote= async (url)=>{
    let response= await fetch(url,config);
    const data = await response.json();
    return data;
}

const insertQuote=()=>{

    getQuote(urlApi)
    .then((quote)=>{
        console.log(quote);
        
        $author.innerText=quote[0].author;
        $quote.innerText=quote[0].quote;
    });
}

//init
insertQuote();

$anotherButton.addEventListener("click",()=>{
    insertQuote();
})

$submitButton.addEventListener("click",(action)=>{
    action.preventDefault();
})