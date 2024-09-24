//Obtener el botón del DOM
const btnColor = document.getElementById('cambiarColor')

//Añadir un listener al boton para manejar el evento click
btnColor.addEventListener('click', () => 
    {
        //Generar u color aleatoreo
        const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

        //Cambiar el color del fondo del body
        document.body.style.backgroundColor = colorAleatorio;
    }
)