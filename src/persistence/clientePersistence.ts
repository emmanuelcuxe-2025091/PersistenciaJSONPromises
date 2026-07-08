import { readFile, writeFile } from "fs/promises";
import { Cliente } from "../models/cliente";

export async function leerClientes(): Promise<Cliente[]> {
    const data = await readFile("./src/data/cliente.json", "utf-8");
    
    return JSON.parse(data) as Cliente[];
}

export async function guardarClientes(clientes: Cliente[]): Promise<void> {
    await writeFile(
        "./src/data/cliente.json",
        JSON.stringify(clientes, null, 2),
        "utf-8"
    );
}