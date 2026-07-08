import { Estado } from './estado';
import { Categoria } from './categoria';

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    marca: string;
    estado: Estado;
    categoria: Categoria;
};