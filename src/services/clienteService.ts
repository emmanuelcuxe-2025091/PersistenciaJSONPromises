import { Cliente } from "../models/cliente";
import { leerClientes, guardarClientes } from "../persistence/clientePersistence";

export function validarCliente(cliente: Cliente): boolean {

    if (cliente.nombre.trim() === "") {
        console.log("El nombre es obligatorio.");
        return false;
    }

    if (cliente.apellido.trim() === "") {
        console.log("El apellido es obligatorio.");
        return false;
    }

    if (cliente.email.trim() === "") {
        console.log("El correo es obligatorio.");
        return false;
    }

    return true;
}

export async function agregarCliente(cliente: Cliente): Promise<void> {

    if (!validarCliente(cliente)) {
        return;
    }

    const clientes = await leerClientes();

    clientes.push(cliente);

    await guardarClientes(clientes);

    console.log("Cliente agregado correctamente.");
}