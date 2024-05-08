const numeroSenha = document.querySelector ('.parametro-senha__texto');
Let tamanhoSenha = 12;
numeroSenha. textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPORSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '01234567891';
const simbolos = ' !@*?';
const botoes = document.querySelectorAlI(*parametro-senha__botao');
const campoSenha = document. querySelector ('#campo -senha');
const checkbox = document . querySelectorALL('. checkbox’);
const forcaSenha = document.querySelector ('.forca');

botoes [0].onclick = diminuiTamanho;
botoes [1] onclick = aumentaTamanho;

function diminuiTamanho (){
    if (tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha.- 1;
        tamanhoSenha--;
    }
    numeroSenha. textContent =' tamanhoSenha;
    gerasenha();
}
function aumentaTamanho (){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1
        tamanhoSenha++
    }
        numeroSenha. textContent = tamanhoSenha
        geraSenha();
}

for (1=0; 1 < checkbox. length;i++){
    checkbox [1].onclick = geraSenha;
}

gerasenha();

function geraSenha(){
    let alfabeto = ;
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if (checkbox [2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox [3].checked){
        alfabeto = alfabeto + simbolos;
    }
        let senha = 
        for (let i = 0; i < tamanhoSenha;i++) (