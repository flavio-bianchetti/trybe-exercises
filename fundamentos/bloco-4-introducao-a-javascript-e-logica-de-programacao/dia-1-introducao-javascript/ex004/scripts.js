/*
Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
*/

let candidate = "aprovada";

switch (candidade) {
    case "aprovada": //Congratulations, you were approved!
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista": // You are on our waiting list.
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovada": //You were repproved.
        console.log("Você foi reprovada(o).");
        break;
    default: //not applicable
        console.log("não se aplica");
}