import { readFile, writeFile } from 'fs/promises';
import { Producto } from '../models/producto';

export async function leerProductos(): Promise<Producto[]> {
    const data = await readFile("./src/data/producto.json", "utf-8");

    return JSON.parse(data) as Producto[];
}

export async function guardarProductos(productos: Producto[]): Promise<void> {
    await writeFile(
        "./src/data/producto.json",
        JSON.stringify(productos, null, 2),
        "utf-8"
    );
}