document.addEventListener('DOMContentLoaded', () => {
    
    var Boton1 = document.getElementById('boton1');
    var Boton2 = document.getElementById('boton2');
    var BotonForm = document.getElementById('submitbutton');
    var onButtonClick = () => {};
    
    const s1 = document.getElementsByClassName('s1');
    const s2 = document.getElementsByClassName('s2');

    Boton1.addEventListener("click", onButtonClick);
    Boton1.addEventListener("click", () => {
        [...s1].forEach(elem => elem.style.display = 'none');
        [...s2].forEach(elem => elem.style.display = 'grid');
        });
    Boton2.addEventListener("click", onButtonClick);
    Boton2.addEventListener("click", () => {
        [...s1].forEach(elem => elem.style.display = 'grid');
        [...s2].forEach(elem => elem.style.display = 'none');
        });
        
    BotonForm.addEventListener("submitbutton", onButtonClick);
        
    });