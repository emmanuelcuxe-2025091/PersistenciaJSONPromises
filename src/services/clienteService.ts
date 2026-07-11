import { Cliente } from '../models/cliente';
import { leerClientes, guardarClientes } from '../persistence/clientePersistence';

export function validarCliente(cliente: Cliente): boolean {

    if (cliente.id <= 0) {
        console.log("El ID debe ser mayor que 0.");
        return false;
    }

    if (cliente.nombre.trim() === "") {
        console.log("El nombre es obligatorio.");
        return false;
    }

    if (cliente.apellido.trim() === "") {
        console.log("El apellido es obligatorio.");
        return false;
    }

    if (cliente.contrasena.trim() === "") {
        console.log("La contraseña es obligatoria.");
        return false;
    }

    if (cliente.contrasena.length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres.");
    return false;
    }

    if (cliente.telefono <= 0) {
        console.log("El teléfono no es válido.");
        return false;
    }

    if (cliente.telefono.toString().length !== 8) {
    console.log("El teléfono debe tener 8 dígitos.");
    return false;
    }

    if (cliente.email.trim() === "") {
        console.log("El correo electrónico es obligatorio.");
        return false;
    }

    if (!cliente.email.includes("@")) {
        console.log("El correo electrónico no es válido.");
        return false;
    }

    if (cliente.tarjetaCredito <= 0) {
        console.log("La tarjeta de crédito no es válida.");
        return false;
    }

    if (cliente.tarjetaCredito.toString().length !== 16) {
    console.log("La tarjeta de crédito debe tener 16 dígitos.");
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