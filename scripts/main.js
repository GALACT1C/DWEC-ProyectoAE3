document.addEventListener('DOMContentLoaded', () => {
    
    const Boton1 = document.getElementById('boton1');
    const Boton2 = document.getElementById('boton2');
    const Boton3 = document.getElementById('boton3');
    const onButtonClick = () => {};
    
    const s1 = document.getElementsByClassName('s1');
    const s2 = document.getElementsByClassName('s2');
    const s3 = document.getElementsByClassName('s3');

    const nombre = document.getElementById('nombre').value;
    const date = document.getElementById('date').value;
    const direccion = document.getElementById('direccion').value;
    const codigopostal = document.getElementById('codigopostal').value;
    const provincia = document.getElementById('provincia').value;
    const municipio = document.getElementById('municipio').value;
    
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
    Boton3.addEventListener("click", onButtonClick);
    Boton3.addEventListener("click", () => {
        [...s2].forEach(elem => elem.style.display = 'none');
        [...s3].forEach(elem => elem.style.display = 'grid');

        const obj = { nombre: nombre, date: date, direccion: direccion, codigopostal: codigopostal, provincia: provincia, municipio: municipio };
        const objeto = JSON.stringify(obj);
        var newP = document.createElement("p");
        newP.textContent = objeto;
        document.body.appendChild(newP);
        });
        
    });