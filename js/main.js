//var que armazena a resposta em inteiro
var rinter;
//pontos 
var pt = 2;
//var de pergunta
var p = []
// var de resposta
var r = []
//var de resposta certa
var rc = []
// aqui estào as opcões 1 2 e 3 e 4
var o1 = []
var o2 = []
var o3 = []
var o4 = []
// var que armazena as perguntas
var armz = []

//buscando os dados ira ser apresentado
var asking = document.querySelector(".ask")
var option1 = document.querySelector(".option1")
var option2 = document.querySelector(".option2")
var option3 = document.querySelector(".option3")
var option4 = document.querySelector(".option4")
var pontos = document.querySelector("#pontos")

//criamos a um elemento audio 
var audio = document.createElement("audio")
//atribuimos o camimho do som da resposta certa
audio.setAttribute("src", "a.mp3")
//damos os control
audio.setAttribute("controls", "true")
//removemos os control 
audio.removeAttribute("controls")
//adicionamos no body
document.body.appendChild(audio)


var erro = document.createElement("audio")
erro.setAttribute("src", "wrong.mp3")
erro.setAttribute("controls", "true")
erro.removeAttribute("controls")
document.body.appendChild(erro);


//primeira pergunta
p[0] = "Quantos Tipos Primitivos Existem ?"
r[0] = 2;
o1[0] = "5"
o2[0] = "4"
o3[0] = "10"
o4[0] = "8"
rc[0] = "3"

//segunda pergunta 
p[1] = "Quais são os tipo primitivos ?"
r[1] = 1;
o1[1] = "Inteiros,Boolean,String,Reais"
o2[1] = "If e Else"
o3[1] = "Else if"
o4[1] = "For,while"
rc[1] = "Inteiros,Boolean,String,Reais"

//terceira pergunta
p[2] = "Quantas Estruturas de repetição existem ?"
r[2] = 3;
o1[2] = "7"
o2[2] = "2"
o3[2] = "3"
o4[2] = "10"
rc[2] = "3"


//Quarta pergunta 
p[3] = "Quais são as estruturas de repetição  ?"
r[3] = 2;
o1[3] = "For in"
o2[3] = "For,While,Do While"
o3[3] = "Prototype Function"
o4[3] = "Real e True"
rc[3] = "For,While,Do While"

//Quinta pergunta 
p[4] = "Qual é a linguagem de estilização de html ?"
r[4] = 2;
o1[4] = "Bootstrap"
o2[4] = "Css"
o3[4] = "Angular"
o4[4] = "Java"
rc[4] = "Css"

//sexta pergunta 
p[5] = "Das linguagens abaixo qual está\nrelacionada A  .NET Framwork ?"
r[5] = 4;
o1[5] = "Java"
o2[5] = "C++"
o3[5] = "C"
o4[5] = "C#"
rc[5] = "C#"

//setima pergunta 
p[6] = "qual destas é uma linguagem de marcação ?"
r[6] = 1;
o1[6] = "Html"
o2[6] = "Css"
o3[6] = "C++"
o4[6] = "Java"
rc[6] = "Html"

//oitava pergunta 
p[7] = "qual destas é uma linguagem de estilização ?"
r[7] = 3;
o1[7] = "Bootstrap"
o2[7] = "C#"
o3[7] = "Css"
o4[7] = "PHP"
rc[7] = "Css"

//nona pergunta 
p[8] = "Qual delas e uma linguagem Server-side ?"
r[8] = 2;
o1[8] = "C++"
o2[8] = "PHP"
o3[8] = "Java"
o4[8] = "Earling"
rc[8] = "PHP"

//decima pergunta 
p[9] = "Qual delas e uma linguagem client-side ?"
r[9] = 4;
o1[9] = "Python"
o2[9] = "Css"
o3[9] = "C#"
o4[9] = "Javascript"
rc[9] = "Javascript"

//11 pergunta 
p[10] = "Javascript É uma linguagem compilada ?"
r[10] = 2;
o1[10] = "Sim"
o2[10] = "Não"
o3[10] = "Talvez"
o4[10] = "Agora é"
rc[10] = "Não"

//11 pergunta 
p[11] = "Qual Delas  É uma linguagem compilada ?"
r[11] = 2;
o1[11] = "Javascript"
o2[11] = "C"
o3[11] = "PHP"
o4[11] = "Node.js"
rc[11] = "C"

//11 pergunta 
p[12] = "Javascript É uma linguagem compilada ?"
r[12] = 2;
o1[12] = "Sim"
o2[12] = "Não"
o3[12] = "Talvez"
o4[12] = "Agora é"
rc[12] = "Não"

//11 pergunta 
p[13] = "Javascript É uma linguagem compilada ?"
r[13] = 2;
o1[13] = "Sim"
o2[13] = "Não"
o3[13] = "Talvez"
o4[13] = "Agora é"
rc[13] = "Não"

//11 pergunta 
p[14] = "Javascript É uma linguagem compilada ?"
r[14] = 2;
o1[14] = "Sim"
o2[14] = "Não"
o3[14] = "Talvez"
o4[14] = "Agora é"
rc[14] = "Não"

//11 pergunta 
p[15] = "Javascript É uma linguagem compilada ?"
r[15] = 2;
o1[15] = "Sim"
o2[15] = "Não"
o3[15] = "Talvez"
o4[15] = "Agora é"
rc[15] = "Não"

//11 pergunta 
p[16] = "Javascript É uma linguagem compilada ?"
r[16] = 2;
o1[16] = "Sim"
o2[16] = "Não"
o3[16] = "Talvez"
o4[16] = "Agora é"
rc[16] = "Não"

//11 pergunta 
p[17] = "Javascript É uma linguagem compilada ?"
r[17] = 2;
o1[17] = "Sim"
o2[17] = "Não"
o3[17] = "Talvez"
o4[17] = "Agora é"
rc[17] = "Não"

//11 pergunta 
p[18] = "Javascript É uma linguagem compilada ?"
r[18] = 2;
o1[18] = "Sim"
o2[18] = "Não"
o3[18] = "Talvez"
o4[18] = "Agora é"
rc[18] = "Não"

//11 pergunta 
p[19] = "Javascript É uma linguagem compilada ?"
r[19] = 2;
o1[19] = "Sim"
o2[19] = "Não"
o3[19] = "Talvez"
o4[19] = "Agora é"
rc[19] = "Não"

//11 pergunta 
p[20] = "Javascript É uma linguagem compilada ?"
r[20] = 2;
o1[20] = "Sim"
o2[20] = "Não"
o3[20] = "Talvez"
o4[20] = "Agora é"
rc[20] = "Não"

//var que conta as perguntas total 
var t = 11;

//var que gera valores aleatorios
var n;

//funcao pergunta
function ask() {
    //gera valores aleatorios de 0 a 4
    n = Math.round(Math.random() * t - 1)
    //se n é menor de 0 ou maior que t-1 faz a pergunta
    if (n < 0 || n > (t - 1)) {
        ask()
    } else {
        //se total de pontos for iguap a perguntas chama a funçào vencedor
        if (pt >= 12) {
            win()
        } else {
            //se a pergunta já foi dada pergunta outra
            if (armz[n] == p[n]) {
                ask()
            } else {
                asking.innerHTML = p[n];
                option1.value = o1[n]
                option2.value = o2[n]
                option3.value = o3[n]
                option4.value = o4[n]
                //armazenando a pergunta
                armz[n] = p[n]
                //pegando a responta inteira
                rinter = r[n]
            }
        }
    }
}//fim funcão responder

//funcão responder que recebe  um parametro
function response(resposta) {
    //se a o btn clicado esteja a resposta certa aumementa os pontos e mostra
    if (resposta == rinter) {
        audio.play()
        pontos.innerHTML = pt
        pt += 2;
        //incrementando os pontos
        //e fazendo outra pergunta
        ask()
    } else {
        //senao mostra resposta errada
        wrong()
    }
}//fim function responder

//function victoria
function win() {
    //se pontos for igual a 4
    if (pt == 12) {
        //rediciona o usuario ao segundo nivel
        window.location = "nivel2.html";
    }
}//fim function

//function wrong erro
function wrong() {
    erro.play()
    setTimeout(function () {
        window.location = "over.html";
    }, 1000)
}

//variavel ajuda
var ajuda = false
//function ajuda 
function help() {
    //se ajuda for falsa mostra a resposta apenas uma vez
    if (!ajuda) {
        alert(rc[n])
        //ajuda recebe true e cancela ajuda
        ajuda = true
    }
}//fim ajuda
ask()