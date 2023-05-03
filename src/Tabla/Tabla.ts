import { Symbol } from "./Symbol";

export class Tabla {
    static miArregloEstatico: Symbol[] = [];

    static vaciarArreglo(): void {
        this.miArregloEstatico = [];
    }

    static insertarSimbolo(sim: Symbol): void {
        let cond = false;
        for (let i = 0; i < this.miArregloEstatico.length; i++) {
            if (this.miArregloEstatico[i].id == sim.id) {
                cond = true
            } else {
                cond = false
            }
        }
        if (cond == false) {
            this.miArregloEstatico.push(sim);
        }
    }

    static mostrarTabla(): void {
        for (let index = 0; index < this.miArregloEstatico.length; index++) {
            console.log(this.miArregloEstatico[index])
        }
    }

    static graficarTabla(): string {
        let cadena: string;
        for (let index = 0; index < this.miArregloEstatico.length; index++) {
            cadena += `<tr><td>${this.miArregloEstatico[index].id}</td><td>${this.miArregloEstatico[index].tipo}</td><td>${this.miArregloEstatico[index].tipoVariable}</td><td>${this.miArregloEstatico[index].linea}</td><td>${this.miArregloEstatico[index].columna}</td></tr>\n`;
        }
        return cadena;
    }
}