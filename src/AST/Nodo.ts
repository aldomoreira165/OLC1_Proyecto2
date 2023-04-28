export class Nodo {
    ID: number = 0;
    nombre: string = "";
    hijos: Nodo[] = [];
  
    constructor(nombre: string, linea: number, columna: number) {
      this.nombre = nombre;
      this.ID = Math.floor(Math.random() * (99999 - 1 + 1) + 1);;
    }
  
    graficar(): string {
      let salida: string = `n${this.ID} [label="${this.nombre}"];\n `;
      for (let i = 0; i < this.hijos.length; i++) {
        salida += `n${this.ID} -> n${this.hijos[i].ID} ; \n`;
        salida += this.hijos[i].graficar();
        console.log(this.nombre);
      }
      return salida;
    }
  }