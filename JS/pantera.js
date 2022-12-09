const txt_entrada = document.querySelector(".txt_entrada");

const traduz = document.querySelector(".traduz");

const limpar = document.querySelector(".limpar");

const resposta = document.querySelector(".resposta");

traduz.addEventListener("click", traducao);
limpar.addEventListener("click", clean);

function clean(){

  document.querySelector(".txt_entrada").value="";
}

let url = "https://api.funtranslations.com/translate/wakanda.json"

// function traduzcao(text) {
//   return url + "?" + "text=" + text
// }

async function traducao() {

  const result = await fetch(`https://api.funtranslations.com/translate/wakanda.json?text=${txt_entrada.value}`)
  
  .then(response=> response.json())
  .then(response=>response.contents.translated)
  .catch(alert=("Error!"));

  console.log(result);

  resposta.innerHTML = result; 
}