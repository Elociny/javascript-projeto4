const chave = "520aa778d15fed5ad1d45b6f33b4cf71"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.getElementById('infos').classList.remove('hidden')
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
 
    buscarCidade(cidade)
 }