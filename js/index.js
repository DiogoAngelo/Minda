const titulo = document.querySelector('.slogan');



function mostra(){
    const altura = titulo.getBoundingClientRect().top;
    if(altura <= 400){
        titulo.classList.add('ativo')
    }
}

window.addEventListener('scroll', mostra);