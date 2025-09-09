// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
  try {
    const response = await fetch(getServerURL() + "/users");
    const users = await response.json();
    console.log(users); // imprime toda la lista completa
  } catch (error) {
    console.error("Error en listUsers:", error);
  }
}

