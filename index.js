// Variáveis: Array de Respostas
// Dados de entrada:
// Dados de saída:
// array.length : Verifica quantas casas tem o array
// array[numeroAleatorio] : Acessa o array e indica um índice aleatório || Pega do Array um número aleatório

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#pergunta")
const botaoPergunta = document.querySelector("#botaoPergunta")
const respostas = [
  "Sim.",
  "Não.",
  "É provável que sim!",
  "É provável que não!",
  "Com certeza!",
  "Não conte com isso",
  "Não tenho certeza.",
  "As perspectivas indicam que sim",
  "As perspectivas indicam que não",
  "As fontes dizem que não.",
  "As fontes dizem que sim.",
  "Não é possível prever agora.",
  "É decididamente assim!",
  "Ao meu ver, sim.",
  "Ao meu ver, não."
]


// Clicar no botão "Fazer Pergunta"

function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta.")
    return
  }
  
  botaoPergunta.setAttribute("disabled", true)
  const mostrarPergunta = "<div>" + inputPergunta.value + "</div>"

  // Gerar Resposta Aleatória
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = mostrarPergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1

  // Sumir com a pergunta depois de 3 segundos
  setTimeout(function(){
    elementoResposta.style.opacity = 0
    botaoPergunta.removeAttribute("disabled")
  }, 3000)
}