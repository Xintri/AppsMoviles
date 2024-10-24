let task = ["Comprar", "Edtudiar", "Limpiar"];

console.log("Lista de tareas: ", task),
task.push("Ir a la escuela");
task.splice(0,2);
task.push("Ir a casa");


//___________________Usando ForEach_________________________//

let CONTADEISHON = ["Regateando en el mercado", "Estudihambre", "Señora ama de casa"];

CONTADEISHON.forEach((task, index) => {
    console.log("Para hacer " + (index + 1 ) + ": " + task);
});
