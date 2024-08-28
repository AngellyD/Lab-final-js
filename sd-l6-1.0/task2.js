// Task 2: listUsers()
import { getServerURL } from './task1.js';

export async function listUsers() {
    // usamos 'fetch' con el 'method: "GET" para resivir una respuesta del servidor 
    const respuesta = await fetch(`${getServerURL()}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    const users = await respuesta.json(); // Convierte la respuesta a JSON
    const usersList = users.map(user => `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}` ).join(',\n');
    console.log(`[\n${usersList}\n]`);
    return users; // Retorna la lista de usuarios para usarla en otros lugares del código.
}