// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';
import { listUsers } from './task2.js';

export async function addUser(first_name, last_name, email) {
    const users = await listUsers(); // Esperamos la lista de usuarios actuales
    const ids = users.map(user => user.id).filter(id => id !== null); //Extraemos los ids con el .map() y filtramos los ids nulos con el .filter()
    const newId = Math.max(...ids, 0) + 1; // Incrementa el mayor ID existente o empieza desde 1

    // usamos 'fetch' con el 'method: "POST" para agregar nuevos datos a la base de datos
    fetch(`${getServerURL()}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ id: String(newId), first_name, last_name, email })
    });
}
