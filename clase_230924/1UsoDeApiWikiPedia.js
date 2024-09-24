const terminoBusqueda = 'Programacion'; // término que deseas buscar
const url = `https://es.wikipedia.org/w/api.php?action=query&srsearch=${terminoBusqueda}&format=json&origin=*`;

// Función para obtener los resultados de Wikipedia
async function buscarEnWikipedia() {
    try {
        const respuesta = await fetch(url); // hace la petición
        const datos = await respuesta.json(); // convierte la respuesta en JSON

        // Si hay resultados, mostrarlos en una lista
        const resultados = datos.query.search;

        if (resultados.length > 0) {
            document.getElementById('resultados').textContent = `Resultados de la búsqueda para "${terminoBusqueda}"`;
            const listaResultados = document.getElementById('listaResultados');
            listaResultados.innerHTML = ''; // Limpiar resultados anteriores

            // Recorrer los resultados y crear una lista de artículos
            resultados.forEach(resultado => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="https://es.wikipedia.org/wiki/${resultado.title}" target="_blank">${resultado.title}</a> - ${resultado.snippet}`;
                listaResultados.appendChild(li); // Agregar el elemento a la lista
            });
        } else {
            document.getElementById('resultados').textContent = 'No se encontraron resultados.';
        }
    } catch (error) {
        document.getElementById('resultados').textContent = 'Error al obtener los datos de la Wiki.';
        console.error('Error: ', error);
    }
}

// Llamar a la función para hacer la búsqueda cuando la página se carga
buscarEnWikipedia();
