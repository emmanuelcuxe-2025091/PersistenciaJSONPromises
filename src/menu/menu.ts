import { agregarProducto } from '../services/productoService';
import { agregarCliente } from '../services/clienteService';
import { Producto } from '../models/producto';
import { Cliente } from '../models/cliente';

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

    console.log("---- PRODUCTOS ----");
    await agregarProducto(producto);

    const cliente: Cliente = {
        id: 1,
        nombre: "Emmanuel",
        apellido: "Cuxé",
        contrasena: "asdw1234",
        telefono: 12345678,
        email: "ecuxe-2025091@kinal.edu.gt",
        tarjetaCredito: 1234567812345678
    };

    console.log("---- CLIENTES ----");
    await agregarCliente(cliente);
    
}