const esconderTimes = () => {
    $(`#timea`).hide();
    $(`#timeb`).hide();
}

$(esconderTimes);

const getQuemVai = () =>  $('#quem-vai').val().split("\n");

const getRamdomPosition = (max) => Math.floor(Math.random() * max)  

const mostrarTime = (nome, idTime, integrantes) => {
    const conteudoTime = `<h6>${nome}</h6>${integrantes.map((jogador, index) => '<p>' + index + ' - ' + jogador + '</p>').join('')}`;
    $(`#${idTime}`).empty();
    $(`#${idTime}`).append(conteudoTime);
    $(`#${idTime}`).show(conteudoTime);

}

const sortear = () => {
    const participantes = getQuemVai();
    const timea = []
    const timeb = []

    while(participantes.length > 0){
        let indexSorteado = getRamdomPosition(participantes.length);
        let sorteado = participantes.splice(indexSorteado, 1)[0]
        sorteado = sorteado.replace(/[0-9]/g, '').replace('.','').replace('-', '').trim();

        if(sorteado.toLocaleLowerCase().indexOf('goleiro') === -1){
            timea.length < timeb.length ? timea.push(sorteado) : timeb.push(sorteado);
        }       
    }

    mostrarTime('Pernas de Pau', 'timea', timea)
    mostrarTime('Zaroios', 'timeb', timeb)
    
}