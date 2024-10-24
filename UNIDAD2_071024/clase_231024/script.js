let task = ["Comprar", "Edtudiar", "Limpiar"];

console.log("Lista de tareas: ", task),

task.push("Ir a la escuela");

task.splice(0,2);

task.push("Ir a casa");


//___________________Usando ForEach_________________________//

let Count = ["Comprar", "Edtudiar", "Limpiar"];

Count.forEach((task, index) => {
    console.log("Tarea " + index + ": " + task);
});