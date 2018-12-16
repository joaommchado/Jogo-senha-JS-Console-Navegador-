//Declaração de variaveis
let senha = [];
let adivinhar = [];
let dicas = [];
// Declaração de Funções
const gerarAleatorio = (minimo, maximo) => {
    return Math.floor(Math.random() *(maximo - minimo + 1)) + minimo;
}
// Inicio de processamento
for(let i =0; i < 5; i++){
    senha[i]=gerarAleatorio(0,9);
}
console.log(senha);
//responsavel pelas rodadas
for(let i =0; i<9; i++){
    
    for(let j =0; j<5; j++){ //responsavel por pegar os dados
        adivinhar[j]= Number(prompt("Digite um número"));
        dicas[j] = "X";
    }
    for(let x=0; x<5;x++){ // resposavel por verificar os numeros
        for(let y=0; y<5; y++){
            if(senha[x] == adivinhar[y]){
                dicas[y] = "-";
            }
        }
    }
    for(let j=0;j<5;j++){ //responsavel por verificar as casa iguais
        if(adivinhar[j] === senha[j]){
            dicas[j] = "O";
        }
    }
}
