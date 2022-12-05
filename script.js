const inputs = document.querySelectorAll ('.input');

const maoslivres = ({ target } )=> {
    const span = target.previousElementSiling;
    span.classList.add('span-ativo');
}


inputs.forEach((input) => input.addEventListener('focus', maoslivres));
