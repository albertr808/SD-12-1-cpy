// Task 4: delUser(number)
// task4.js
import { getServerURL } from "./task1.js";

export async function delUser(id) {
  try {
    const response = await fetch(getServerURL() + `/users/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar usuario con ID ${id}: ${response.status}`);
    }

    console.log(`Usuario con ID ${id} eliminado correctamente`);
  } catch (error) {
    console.error("Error en delUser:", error);
  }
}
