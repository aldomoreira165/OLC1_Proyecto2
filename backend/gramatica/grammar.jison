/* Definición Léxica */
%lex

%options case-insensitive
%x string

%%

//--------------------Para comentarios y caracteres en blanco----------------------
"//".*                             {}     // comentario linea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {}     // comentario multilinea
[ \r\t]+            {}                      // espacio en blanco
\n                  {}                      // salto
//---------------------------------------------------------------------------------

//--------------------Para indicadores valores primitivos--------------------------
"int"               return 'PENTERO';
"string"               return 'PSTRING';
"char"               return 'PCHAR';
"boolean"               return 'PBOOLEAN';
"double"               return 'PDOUBLE';
//---------------------------------------------------------------------------------

//-----------------------------Reservadas------------------------------------------
"print"          return 'PPRINT';   // funcion de imprimir
"new"          return 'PNEW';
"list"          return 'PLIST';
"add"           return 'PADD';
"if"           return 'PIF';
"else"           return 'PELSE';
"switch"           return 'PSWITCH';
"case"           return 'PCASE';
"default"           return 'PDEFAULT';
"while"           return 'PWHILE';
"for"           return 'PFOR';
//---------------------------------------------------------------------------------

//--------------------------Para valores primitivos--------------------------------
[a-zA-Z][a-zA-Z0-9_]*   return 'ID';
[0-9]+\b                return 'VENTERO';
[0-9]+("."[0-9]+)\b     return 'VDECIMAL';
"true"              return 'VTRUE';
"false"             return 'VFALSE';

\'((\\\')|[^\n\'])*\'	{ yytext = yytext.substr(1,yyleng-2); return 'VCARACTER'; }
["]                             {cadena="";this.begin("string");}
<string>[^"\\]+                 {cadena+=yytext;}
<string>"\\\""                  {cadena+="\"";}
<string>"\\n"                   {cadena+="\n";}
<string>"\\t"                   {cadena+="\t";}
<string>"\\\\"                  {cadena+="\\";}
<string>"\\\'"                  {cadena+="\'";}
<string>["]                     {yytext=cadena; this.popState(); return 'VCADENA';}
//---------------------------------------------------------------------------------

//-------------------------------------Simbolos------------------------------------
";"                 return 'PTCOMA';
"("                 return 'PARIZQ';
")"                 return 'PARDER';
"."                 return 'PUNTO';
":"                 return 'DOSPUNTOS';
","                 return 'COMA';
"["                 return 'CORIZR';
"]"                 return 'CORDER';
"{"                 return 'LLAVEIZQ';
"}"                 return "LLAVEDER";
"?"                 return 'KLEENE';
//---------------------------------------------------------------------------------

//-------------------------------Aritmetica----------------------------------------
"++"                 return 'INCREMENTO';
"--"                 return 'DECREMENTO';
"+"                 return 'MAS';
"-"                 return 'MENOS';
"*"                 return 'POR';
"/"                 return 'DIVISION';
"^"                 return 'POTENCIA';
"%"                 return 'MODULO';
//---------------------------------------------------------------------------------

//-----------------------------Operadores relacionales-----------------------------
"!="                return 'NOIGUAL';
"<="                return 'MENORIGUALQUE';
">="                return 'MAYORIGUALQUE';
"<"                 return 'MENORQUE';
">"                 return 'MAYORQUE';
"="                 return 'IGUAL';
//---------------------------------------------------------------------------------

//-----------------------------Operadores logicos----------------------------------
"||"                return 'OR';
"&&"                return 'AND';
"!"                 return 'NOT';
//---------------------------------------------------------------------------------

<<EOF>>                 return 'EOF';

//aca se agregan los errores lexicos

. { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex

//aca se hacen las importaciones

%{
  /*// importar tipos
  const {Type} = require('./abstract/Return');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');*/
%}


/*// PRECEDENCIA DE OPERADORES
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUAL' 'NOIGUAL' 'MENORQUE' 'MENORIGUALQUE 'MAYORQUE' 'MAYORIGUALQUE'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%right '++' '--'
%left 'POTENCIA'
%right 'MENOS'
%left 'PAROP' 'PARCLS'*/

//Definición de la gramática

%start INICIO

%%

INICIO
	: INSTRUCCIONES EOF
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION
	| INSTRUCCION
;

INSTRUCCION
    : DECLARACION PTCOMA 
    | ASIGNACION PTCOMA  
    | CASTEO PTCOMA
    | VECTOR PTCOMA
    | ACCESO_VECTOR
    | MODIFICACION_VECTOR PTCOMA
    | LISTA PTCOMA
    | AGREGAR_VALOR_LISTA PTCOMA
    | ACCESO_LISTA PTCOMA
    | MODIFICACION_LISTA PTCOMA
    | SENTENCIA_IF 
    | SENTENCIA_SWITCH
    | SENTENCIA_WHILE
    | SENTENCIA_FOR
    | PRINT
    | error PTCOMA
  {console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);}
;

DECLARACION
    : TIPO ID
    | TIPO ID IGUAL EXPRESION
    | TIPO ID IGUAL CASTEO
    | TIPO ID IGUAL ACCESO_VECTOR
    | TIPO ID IGUAL ACCESO_LISTA
;

ASIGNACION
    : ID IGUAL EXPRESION
;

CASTEO
    : PARIZQ TIPO PARDER EXPRESION {console.log("casteo",$4)}
;

VECTOR
    : TIPO CORIZR CORDER ID IGUAL PNEW TIPO CORIZR EXPRESION CORDER {console.log($9)}
    | TIPO CORIZR CORDER ID IGUAL LLAVEIZQ LISTAVALORES LLAVEDER {console.log($7)}
;

LISTAVALORES
    : LISTAVALORES COMA PRIMITIVO
    | PRIMITIVO
;

ACCESO_VECTOR
    : ID CORIZR EXPRESION CORDER {console.log("acceso", $3)}
;

MODIFICACION_VECTOR
    : ID CORIZR EXPRESION CORDER IGUAL EXPRESION {console.log("modificacion", $3, $6)}
;

LISTA
    : PLIST MENORQUE TIPO MAYORQUE ID IGUAL PNEW PLIST MENORQUE TIPO MAYORQUE {console.log("lista", $5)}
;

AGREGAR_VALOR_LISTA
    : ID PUNTO PADD PARIZQ EXPRESION PARDER {console.log("add lista", $5)}
;

ACCESO_LISTA
    : ID CORIZR CORIZR EXPRESION CORDER CORDER {console.log("acceso lista", $4)}
;

MODIFICACION_LISTA
    : ID CORIZR CORIZR EXPRESION CORDER CORDER IGUAL EXPRESION {console.log("modificacion lista", $8)}
;

SENTENCIA_IF
    : PIF PARIZQ EXPRESION PARDER BLOQUE_IF ELSE_IF
;

//falta que me reconozca cosas como <= o >=
BLOQUE_IF
    : LLAVEIZQ INSTRUCCIONES LLAVEDER
    | LLAVEIZQ LLAVEDER
    | INSTRUCCIONES
;

BLOQUE
    : LLAVEIZQ INSTRUCCIONES LLAVEDER
    | LLAVEIZQ LLAVEDER
;

ELSE_IF 
    : PELSE PIF PARIZQ EXPRESION PARDER BLOQUE ELSE_IF
    | PELSE BLOQUE_IF
    | /*epsilone*/ 
;

//falta agregar el break
SENTENCIA_SWITCH
    : PSWITCH PARIZQ EXPRESION PARDER BLOQUE_SWITCH
;

BLOQUE_SWITCH
    : LLAVEIZQ L_CASE LLAVEDER
    | LLAVEIZQ LLAVEDER
;

L_CASE
    : L_CASE CASES
    | CASES
;

CASES
  : PCASE EXPRESION BLOCK_CASES
  | PDEFAULT BLOCK_CASES
;

BLOCK_CASES
  : DOSPUNTOS INSTRUCCIONES
  | DOSPUNTOS
;

SENTENCIA_WHILE
    : PWHILE PARIZQ EXPRESION PARDER BLOQUE
;

SENTENCIA_FOR
    : PFOR PARIZQ DECLARACION PTCOMA EXPRESION PTCOMA ACTUALIZACION PARDER BLOQUE
    | PFOR PARIZQ ASIGNACION PTCOMA EXPRESION PTCOMA ACTUALIZACION PARDER BLOQUE
;

ACTUALIZACION
  : ID DECREMENTO
  | ID INCREMENTO
;

EXPRESION
    : EXPRESION MAS EXPRESION
    | EXPRESION MENOS EXPRESION
    | EXPRESION POR EXPRESION
    | EXPRESION DIVISION EXPRESION
    | EXPRESION MODULO EXPRESION
    | EXPRESION POTENCIA EXPRESION
    | NOT EXPRESION
    | EXPRESION MENORQUE EXPRESION
    | EXPRESION MAYORQUE EXPRESION
    | EXPRESION AND EXPRESION
    | EXPRESION OR EXPRESION
    | EXPRESION NOIGUAL EXPRESION
    | EXPRESION IGUAL IGUAL EXPRESION
    | EXPRESION MAYORIGUALQUE EXPRESION
    | EXPRESION MENORIGUALQUE EXPRESION
    | PARIZQ EXPRESION PARDER
    | PRIMITIVO
    | ID
;
 
TIPO
    : PENTERO,
    | PDOUBLE,
    | PBOOLEAN,
    | PSTRING,
    | PCHAR
;

PRINT
    : PPRINT PARIZQ PRIMITIVO PARDER PTCOMA  {console.log($3)}
;

PRIMITIVO
  : VENTERO
  | VDECIMAL
  | VCADENA        
  | VCARACTER 
  | VTRUE          
  | VFALSE           
;