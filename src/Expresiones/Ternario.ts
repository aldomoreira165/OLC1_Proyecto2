import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";

export class Ternario extends Expresion {

    exp_condicion: Expresion;
    sentencias: Expresion;
    sentencias_else: Expresion;

    constructor(exp_condicion: Expresion, sentencias: Expresion, sentencias_else: Expresion, linea: number, columna: number) {
        super(linea, columna);
        this.exp_condicion = exp_condicion;
        this.sentencias = sentencias;
        this.sentencias_else = sentencias_else;
    }

    public getValor(actual: Ambito, global: Ambito, ast: AST) {

        let condicion = this.exp_condicion.getValor(actual, global, ast);

        if (condicion) {
            let valorTrue = this.sentencias.getValor(actual, global, ast);
            return valorTrue;
        }else{
            let valorFalse = this.sentencias_else.getValor(actual, global, ast);
            return valorFalse;
        }
    }
}