/* Após termos as regras e o sistema com uma partida do jogo, 
ficará ao encargo das mesas de trabalho:

Refatorar o código, utilizando funções e a estrutura de decisão switch;
Implementar uma regra de que só é declarado o ganhador do jogo após 3 rodadas, 
para auxiliar use uma variável para armazenar o vencedor de cada partida;
Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado.
 */

function Jogador (nome, jogada, rodadasVencidas){
    this.nome = nome;
    this.jogada = jogada;
    this.rodadasVencidas = rodadasVencidas; 
}

let jogador = new Jogador("", 0, 0);
let jogador2 = new Jogador("", 0, 0);

jogador.nome = prompt("Digite o nome do Jogador1: ");
jogador2.nome = prompt("Digite o nome do Jogador2: ");

while (jogador.rodadasVencidas < 3 && jogador2.rodadasVencidas < 3) {
    jogador.jogada = parseInt(prompt(jogador.nome + " digite sua jogada, 1 para pedra, 2 para papel e 3 para tesoura: "));
    jogador2.jogada = parseInt(prompt(jogador2.nome + " digite sua jogada, 1 para pedra, 2 para papel e 3 para tesoura: "));

    if (jogador.jogada == jogador2.jogada) {
        alert("O jogo empatou!");
    } else if ((jogador.jogada == 1 && jogador2.jogada == 3) || (jogador.jogada == 2 && jogador2.jogada == 1) || (jogador.jogada == 3 && jogador2.jogada == 2)){
        alert("O jogador " + jogador.nome + " venceu a partida!!");
        jogador.rodadasVencidas++;
    } else {
        alert("O jogador " + jogador2.nome + " venceu a partida!!");
        jogador2.rodadasVencidas++;
    }

}

if(jogador1.rodadasVencidas > jogador2.rodadasVencidas){
    alert(jogador1.nome + " venceu o jogo!");
}else{
    alert(jogador2.nome + " venceu o jogo!");
}