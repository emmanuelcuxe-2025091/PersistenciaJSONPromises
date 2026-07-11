import { Producto } from '../models/producto';
import { leerProductos, guardarProductos } from '../persistence/productoPersistence';

export function validarProducto(producto: Producto): boolean {

    if (producto.nombre.trim() === "") {
        console.log("El nombre es obligatorio.");
        return false;
    }

    if (producto.descripcion.trim() === "") {
        console.log("La descripción es obligatoria.");
        return false;
    }

    if (producto.marca.trim() === "") {
        console.log("La marca es obligatoria.");
        return false;
    }

    if (producto.precio <= 0) {
        console.log("El precio debe ser mayor que 0.");
        return false;
    }

    if (producto.stock < 0) {
        console.log("El stock no puede ser negativo.");
        return false;
    }

    return true;
}

export async function agregarProducto(producto: Producto): Promise<void> {

    if (!validarProducto(producto)) {
        return;
    }

    const productos = await leerProductos();

    productos.push(producto);

    await guardarProductos(productos);

    console.log("Producto agregado correctamente.");
}