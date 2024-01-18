const tareas = [
    { descripcion: 'levantarme 06:00 AM', completado: false },
    { descripcion: 'ducharme 06:15 AM', completado: false },
    { descripcion: 'tomar desayuno 06:45 AM', completado: false }
];


function mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea.descripcion}</span>
            <input type="checkbox" onchange="marcarComoCompletada(${index})" ${tarea.completado ? 'checked' : ''}>
            <button onclick="borrarTarea(${index})">Eliminar</button>
        `;
        listaTareas.appendChild(li);
    });

    actualizarTareas();
}


function agregarTarea() {
    const descripcionInput = document.getElementById('descripcionTarea');
    const descripcion = descripcionInput.value.trim();

    if (descripcion !== '') {
        tareas.push({ descripcion, completado: false });
        descripcionInput.value = '';
        mostrarTareas();
    }
}


function borrarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
}


function marcarComoCompletada(index) {
    tareas[index].completado = !tareas[index].completado;
    mostrarTareas();
}

function actualizarTareas() {
    const totalTareas = document.getElementById('totalTareas');
    const tareasCompletadas = document.getElementById('tareasCompletadas');

    totalTareas.textContent = tareas.length;
    tareasCompletadas.textContent = tareas.filter(tarea => tarea.completado).length;
}

mostrarTareas();
console.log(mostrarTareas)


// 1. agregar 3 tareas definidas
//2. realizar la funcion para ordenar las tareas y agregarlas (utilizar for o forEach)
// 3.crear una funcion para agregar tarea
// 4. crear una funcion para eliminar tareas
// 5. crear funcion para marcar las tareas completadas
// 6. crear una funcion para actualizar las estadisticas de total de tareas y tareas completadas.