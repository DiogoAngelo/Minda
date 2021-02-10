const tituloTurmas = document.querySelector('.grupo-titulo');
const alunos = document.querySelector('.alunos');

const alturaNova = window.innerHeight * .8;
function animaMostra() {
    const alturaTitulo = tituloTurmas.getBoundingClientRect().top;
    if(alturaTitulo <= alturaNova){     
      tituloTurmas.classList.add('ativo');
    }
    const alturaAlunos = alunos.getBoundingClientRect().top;
    if(alturaAlunos <= alturaNova){
        alunos.classList.add('ativo')
    }
}

window.addEventListener('scroll', animaMostra);