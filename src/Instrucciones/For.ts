import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Nodo } from "../Entorno/Nodo";
import { Variable } from "../Entorno/Simbolos/Variable";

export class For extends Instruccion {

    inicializador: Instruccion;
    condicion: Expresion;
    actualizacion: Instruccion;
    sentencias: Nodo[];

    constructor(inicializador: Instruccion, condicion: Expresion, actualizacion: Instruccion, sentencias: Nodo[], linea: number, columna: number) {
        super(linea, columna);
        this.inicializador = inicializador;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.sentencias = sentencias;
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
    let ambito_local = new Ambito(actual);
        this.inicializador.ejecutar(ambito_local, global, ast);

        while (this.condicion.getValor(ambito_local, global, ast)) {
            for (let sentencia of this.sentencias) {
                if (sentencia instanceof Instruccion) {
                    sentencia.ejecutar(ambito_local, global, ast);
                }
                if (sentencia instanceof Expresion) {
                    sentencia.getValor(ambito_local, global, ast);
                }
            }
            this.actualizacion.ejecutar(ambito_local, global, ast);
        }
    }

}