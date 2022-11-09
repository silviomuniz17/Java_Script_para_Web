//criando minha propria função
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio); //criando uma constante que recebe onde foi clicado

    if (elemento != null && elemento.localName === 'audio'){ //se o elemento for diferente de null
        console.log(elemento.localName); //imprimir no console a tecla digitada
        elemento.play(); //vai dar plei no som
    }else{
        alert('Elemento não encontrado ou Invalido'); //para evitar erro e avisar que não tem um elemento
        console.log('Elemento não encontrado ou Invalido'); //para evitar erro e avisar que não tem um elemento
    }
}

// alert('Olá mundo'); // alert é uma caixa de alerta
// document.querySelector('.tecla_pom').onclick = tocaSomPom; // selecionando o botão do arquivo HTML, e quando for selecionado vai chamar a função que toca o som - apenas um botão

const listaDeTeclas = document.querySelectorAll('.tecla'); //criando uma referencia do tipo constante (quando o valor não muda, é sempre a mesma) (// selecionando uma lista de todas as classes tecla)

let contador = 0; //criando uma variavel que conta

/*======================================================================================================================
//while = enquanto ()
while (contador < listaDeTeclas.length) { //enquanto o contador for menor que o tamanho da lista de teclas

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //uma constante do nome instrumento está recebendo a lista de teclas na poção do contador, e a classificação 1 no caso o nome da telha
    //template string
    const idAudio = `#som_${instrumento}`; // vai pegar o valor que não muda e alterar apenas o final

    // console.log(idAudio); // para ver o nome do instrumento no log do navegador

    tecla.onclick = function (){ // criando uma função anonima para não dar o erro
        tocaSom(idAudio);
    }; // vai tocar o som

    contador += 1; // apos tocar vai receber o valor do contador mais um
    // console.log(contador); // para ver o valor do cantado no log do navegador
}
=====================================================================================================================*/

for (let contador = 0; contador < listaDeTeclas.length; contador ++) { //enquanto o contador for menor que o tamanho da lista de teclas

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //uma constante do nome instrumento está recebendo a lista de teclas na poção do contador, e a classificação 1 no caso o nome da telha

    const idAudio = `#som_${instrumento}`; // vai pegar o valor que não muda e alterar apenas o final

    tecla.onclick = function (){ // criando uma função anonima para não dar o erro
        tocaSom(idAudio);
    }; // vai tocar o som

    tecla.onkeydown = function (evento){ //criando uma função anonima para quando clicar ficar vermelho (evento = para saber a tecla que foi digitada)

        console.log(evento.code);// vai imprimir a tecla que foi precionada

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){ // === 3 iguais compara o tipo de dados se for numero e string tbm
            tecla.classList.add('ativa'); // tecla/ classecriada/adicionar/função ativa(vermelho) criada no css
        }

    }
    tecla.onkeyup = function (){ //criando uma função anonima para quando soltar não ficar mais vermelho
        tecla.classList.remove('ativa'); // tecla/ classecriada/remover/função ativa(vermelho) criada no css
    }

}
