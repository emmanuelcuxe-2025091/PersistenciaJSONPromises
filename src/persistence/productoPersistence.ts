import { readFile, writeFile } from 'fs/promises';
import { Producto } from '../models/producto';

export async function leerProductos(): Promise<Producto[]> {
    try {
        const data = await readFile("./src/data/producto.json", "utf-8");
        return JSON.parse(data) as Producto[];
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

export async function guardarProductos(productos: Producto[]): Promise<void> {
    try {
        await writeFile(
            "./src/data/producto.json",
            JSON.stringify(productos, null, 2),
            "utf-8"
        );
    } catch (error) {
        console.error("Error:", error);
    }
}