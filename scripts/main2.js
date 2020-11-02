function checkform()
{
       const nombreyapellidos = document.getElementById('nombreyapellidos');
       const fecha = document.getElementById('fecha');
       const direccion = document.getElementById('direccion');
       const codigopostal = document.getElementById('codigopostal');
       const provincia = document.getElementById('provincia');
       const municipio = document.getElementById('municipio');

       if(nombreyapellidos === null || fecha === null || direccion === null || codigopostal === null || provincia === null || municipio === null){
            document.theform.submitbutton= disabled;
       }
       else {
        document.theform.submitbutton= enabled;
       }
}