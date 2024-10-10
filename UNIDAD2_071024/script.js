//funcion para agrgar un valor a la pantalla de la calculadora
function appendToDisplay(value) {
    //obtiene el elemento de entrada por su ID y añade el valor final al resultado
    document.getElementById('display').value += value;
    }
    
//funcion para limpiar el resultado de la calculadora
function clearDisplay() {
    //establece el valor como vacio
    document.getElementById('display').value = '';
}
//funcoin para borrar el último caracter ingrsado en la calculadora
function deleteLast() {
    //obtiene el valor de la pantalla
    let displayValue = document.getElementById('display').value;
    // actualiza el valor de la pantalla eliminado el último caracter al discriminar el ultimo
    document.getElementById('display').value = displayValue.slice(0, -1);
}
//funcion para calcular el resultado
function calculateResult() {
    try {
        //Valida la expresion matemática en la pantalla y almacena el resultado
        let result = eval(document.getElementById('display').value);
        //muestra el resultado en el display
        document.getElementById('display').value = result;
        //muestra un mensaje de error en caso de haber uno
    } catch (error) {
        alert('Expresión inválida');
    }
}