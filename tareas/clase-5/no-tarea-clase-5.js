//document.querySelector('#calcular-salario-mensual').onclick = function(){
document.querySelector('#boton-enviar').onclick = function(){

     const nombre1 = document.querySelector('#nombre-usuario').value,
           nombre2 = document.querySelector('#nombre-2-usuario').value,
           apellido = document.querySelector('#apellido-usuario').value,
           edad = document.querySelector('#edad-usuario').value;

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('textArea');
    const linea1 = document.createTextNode("Nombre: "+nombre1+ " "+nombre2+" "+apellido+"\ntiene "+edad+" años");
    nuevoParrafo.appendChild(linea1);
    nodoPagina.appendChild(nuevoParrafo);
//    nodoPagina.appendChild(linea2);
    nuevoParrafo.rows = "4";
    nuevoParrafo.cols = "50";

    document.querySelector('h1').textContent="Bienvenido "+nombre1+"!";
    document.querySelector('#formulario').setAttribute('hidden', "");
 }