const txt_entrada = document.querySelector(".txt_entrada");

const traduz = document.querySelector(".traduz");

const resposta = document.querySelector(".resposta");

const limpar = document.querySelector(".limpar");

traduz.addEventListener("click", traducao);
limpar.addEventListener("click", clean);

function clean(){

  document.querySelector(".txt_entrada").value="";
}

let url = "https://api.funtranslations.com/translate/gungan.json"

// function traduzcao(text) {
//   return url + "?" + "text=" + text
// }

async function traducao() {

  const result = await fetch(`https://api.funtranslations.com/translate/gungan.json?text=${txt_entrada.value}`)
  
  .then(response=> response.json())
  .then(response=>response.contents.translated)
  .catch(alert=("Error!"));

  console.log(result);

  resposta.innerHTML = result; 
}