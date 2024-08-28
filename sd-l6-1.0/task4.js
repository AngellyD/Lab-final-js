// Task 4: delUser(number)
import { getServerURL } from './task1.js';

export function delUser(id) {
    // usamos 'fetch' con el 'method: "DELETE"  para eliminar al usuario con ese ID
    fetch(`${getServerURL()}/users/${id}`, {
        method: "DELETE"
    });
}
