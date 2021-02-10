const matricula = document.querySelector('[data-modal="matricula"]');
const fechar = document.querySelector('[data-modal="fechar2"]');
const container = document.querySelector('[data-modal="container2"]');

function abrirMatricula(event){
    event.preventDefault();
    container.classList.add('ativo');
}
function modalFechar(){
    container.classList.remove('ativo');
}
matricula.addEventListener('click', abrirMatricula);
fechar.addEventListener('click', modalFechar)