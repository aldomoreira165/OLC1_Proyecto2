import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";
import { Variable } from "../Entorno/Simbolos/Variable";
import { Symbol } from "../Tabla/Symbol";
import { Tabla } from "../Tabla/Tabla";

export class DeclararVariable extends Instruccion{
    

    tipo:   Tipo;
    id:     string;
    exp:    Expresion;

    constructor(tipo: Tipo, id: string, exp: Expresion, linea: number, columna: number) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.exp = exp;
    }

    private establecerTipo(){
        let valor = this.tipo.getPrimitivo();
    
        switch (valor) {
            case 0:
                return "Entero"
            case 1: 
                return "Double"
            case 2:
                return "Char"
            case 3: 
                return "String"
            case 4: 
                return "Null"
            case 5: 
                return "Boolean"
            case 6: 
                return "Void"
        }
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        
        // Verificar que no exista variable
        let res;
        if(this.exp != undefined) {
                res = this.exp.getValor(actual, global, ast);
                if(this.tipo.getPrimitivo() != this.exp.tipo.getPrimitivo()) {
                    // * ERROR *
                    throw new Error("Tipo de variable declarada no es igual al tipo de la expresion: " + this.linea + " , " + this.columna);
                }
        } else{
            if(this.tipo.getPrimitivo() === TipoPrimitivo.Integer){
                res = 0;
            }else if(this.tipo.getPrimitivo() === TipoPrimitivo.Double){
                res = 0.0;
            } else if(this.tipo.getPrimitivo() === TipoPrimitivo.String) {
                res = "";
            } else if(this.tipo.getPrimitivo() === TipoPrimitivo.Char) {
                res = '';
            }else if (this.tipo.getPrimitivo() === TipoPrimitivo.Boolean) {
                res = true;
            }
        }

        console.log(res);
        let nueva_var = new Variable(this.tipo, this.id, res);
        actual.insertarVariable(this.id,nueva_var);
        Tabla.insertarSimbolo(new Symbol(this.id, "Variable", this.establecerTipo(), (this.linea).toString(), (this.columna).toString()));
    }
}