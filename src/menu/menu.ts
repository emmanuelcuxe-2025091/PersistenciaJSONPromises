import { Producto } from "../models/producto";
import { Cliente } from "../models/cliente";

import {
    leerProductos,
    guardarProductos
} from "../persistence/productoPersistence";

import {
    leerClientes,
    guardarClientes
} from "../persistence/clientePersistence";

export async function mostrarMenu(): Promise<void> {

    const producto: Producto = {
        id: 1,
        nombre: "Leche",
        descripcion: "Leche Entera",
        precio: 10,
        stock: 20,
        marca: "Dos Pinos",
        estado: "Activo",
        categoria: "Bebidas"
    };

    const productos = await leerProductos();

    productos.push(producto);

    await guardarProductos(productos);

    console.log("===== PRODUCTOS =====");
    console.log(await leerProductos());

    const cliente: Cliente = {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        contrasena: "123456",
        telefono: 12345678,
        email: "juan@email.com",
        tarjetaCredito: 1234567812345678
    };

    const clientes = await leerClientes();

    clientes.push(cliente);

    await guardarClientes(clientes);

    console.log("===== CLIENTES =====");
    console.log(await leerClientes());
    
}