
const phrase = document.querySelector('[data-typewriter="typewriter"]');

function typeWrite(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 80 * i);
    });
}

typeWrite(phrase);