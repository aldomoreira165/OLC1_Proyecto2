%{
    let Nodo                        =   require("./Nodo").Nodo;
%}
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%options case-sensitive

digit                       [0-9]
cor1                        "["
cor2                        "]"
esc                         "\\"
int                         (?:[0-9]|[1-9][0-9]+)
exp                         (?:[eE][-+]?[0-9]+)
frac                        (?:\.[0-9]+)

%%

\s+                             {/* skip whitespace */}
<<EOF>>                         {return 'EOF';}

/* COMENTARIOS */
"//".*                                 {/* IGNORE */}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]    {/* IGNORE */}

/* =================== PALABRAS RESERVADAS =================== */
"true"                          {   return 'ttrue';     }
"false"                         {   return 'tfalse';    }
"int"                           {   return 'tinteger';  }
"boolean"                       {   return 'tboolean';  }
"double"                        {   return 'tdouble';   }
"String"                        {   return 'tstring';   }
"char"                          {   return 'tchar';   }
"if"                            {   return 'tif';       }
"while"                         {   return 'twhile';    }
"for"                           {   return 'tfor';    }
"else"                          {   return 'telse';     }
"void"                          {   return 'tvoid';     }
"return"                        {   return 'treturn';   }
"new"                           {   return 'tnew';     }
"do"                            {   return 'tdo';     }
"list"                          {   return 'tlist';     }                 
"add"                           {   return 'tadd';     }                 
"switch"                        {   return 'tswitch';     }                 
"case"                        {   return 'tcase';     }                 
"default"                        {   return 'tdefault';     }
"toLower"                      {   return 'ttoLower';     }
"toUpper"                      {   return 'ttoUpper';     }
"truncate"                      {   return 'ttruncate';     }
"round"                      {   return 'tround';     }
"length"                      {   return 'tlength';     }
"typeOf"                      {   return 'ttypeOf';     }
"toString"                      {   return 'ttoString';     }
"toCharArray"                      {   return 'ttoCharArray';     }
"main"                          {   return 'tmain';     }
"print"                           {   return 'tPrint';    }
"continue"                           {   return 'tContinue';    }
"break"                           {   return 'tBreak';    }


/* =================== EXPRESIONES REGULARES ===================== */
([a-zA-ZÑñ]|("_"[a-zA-ZÑñ]))([a-zA-ZÑñ]|[0-9]|"_")*             yytext = yytext.toLowerCase();          return 'id';
\"(?:[{cor1}|{cor2}]|["\\"]["bnrt/["\\"]]|[^"["\\"])*\"         yytext = yytext.substr(1,yyleng-2);     return 'cadena';
\'(?:{esc}["bfnrt/{esc}]|{esc}"u"[a-fA-F0-9]{4}|[^"{esc}])\'    yytext = yytext.substr(1,yyleng-2);     return 'caracter'
{int}{frac}\b                                                                                           return 'decimal'
{int}\b                                                                                                 return 'entero'

//Error                                                                                              return 'entero'

/* ======================== SIGNOS ======================= */
"$"                             {return '$'};
"."                             {return '.'};
"++"                            {return '++';}
"--"                            {return '--';}
"+"                             {return '+';}
"-"                             {return '-';}
"*"                             {return '*';}
"/"                             {return '/';}
"^"                             {return '^';}
"%"                             {return '%';}
"("                             {return '(';}
")"                             {return ')';}
"=="                            {return '==';}
"="                             {return '=';}
","                             {return ',';}
":"                             {return ':';}
";"                             {return ';';}
"?"                             {return '?';}
"||"                            {return '||';}
"&&"                            {return '&&';}
"!="                            {return '!=';}
"!"                             {return '!';}
"<="                            {return '<=';}
">="                            {return '>=';}
">"                             {return '>';}
"<"                             {return '<';}
"{"                             {return '{';}
"}"                             {return '}';}
"["                             {return '[';}
"]"                             {return ']';}
. { console.log(`El caracter: "${yytext}" no pertenece al lenguaje`); }


/lex

/* ================= ASOCIATIVIDAD y PRECEDENCIA DE OPERADORES ===============
/*Operaciones logicas*/
%left '||'
%left '&&'
%left '?'
%left ':'
%left '++' '--'
%left '!=' '==' '==='
%left '>' '<' '<=' '>='
 
/*Operaciones numericas*/
%left '+' '-'
%left '*' '/' '%'
%right '^' 
%right negativo '!' '(' 



%start INICIO

%% /* language grammar */

INICIO
    : SENTENCIAS EOF
    {
        let raiz = new Nodo("Inicio");
        raiz.hijos.push($1);
        return raiz
    }
;

SENTENCIAS :    SENTENCIAS SENTENCIA
                {
                      $$ = $1;
                      $$.hijos.push($2);  
                }   
            |   SENTENCIA
                {
                        $$ = new Nodo("Sentencia");
                        $$.hijos.push($1);
                }
;

BLOQUE_SENTENCAS : '{' SENTENCIAS '}'
                {
                        $$ = $2;
                }
                |  '{' '}'
;

//arreglado
SENTENCIA :     DECLARACION ';'
                {
                    $$ = $1;
                }
                //arreglado        
            |   FUNCION
                {
                    $$ = $1;     
                }
                //arreglado                   
            |   LISTA_ADD
                {
                     $$ = $1;  
                }
                //arreglado                   
            |   LISTA_MODIFICAR  ';'
                {
                        $$ = $1;
                }  
                //arreglado      
            |   ASIGNACION       ';'
                {
                        $$ = $1;
                }      
                //arreglado  
            |   VECTOR_ADD 
                {
                    $$ = $1;     
                }
                //arreglado                 
            |   IF
                {
                        $$ = $1;   
                } 
                //arreglado                        
            |   LLAMADA_FUNCION  ';' 
                {
                    $$ = $1;
                } 
            //arreglado     
            |   WHILE
                {
                    $$ = $1;    
                }
                //arreglado                       
            |   FOR
                {
                    $$ = $1;   
                }
                //arreglado                         
            |   DO_WHILE
                {
                    $$ = $1;   
                }
                //arreglado                    
            |   INCREMENTO       ';'
                {
                    $$ = $1;
                }
                //arreglado        
            |   DECREMENTO       ';'
                {
                    $$ = $1;
                } 
            //arreglado       
            |   PRINT       ';'
            {
                $$ = $1;
            } 
            //arreglado                    
            |   MAIN ';'
            {
                $$ = $1;
            }    
            //arreglado                
            |   RETURN
            {
                $$ = $1;
            }
            //arreglado
            |   CONTINUE
            {
                $$ = $1;
            }
            //arreglado
            |   BREAK
            {
                $$ = $1;
            }
            //arreglado
            |   SWITCH 
            {
                $$ = $1;
            }                
;

//arreglado
MAIN : tmain LLAMADA_FUNCION
    {
        let nodoM = new Nodo($1);
        $$ = new Nodo("Main");
        $$.hijos.push(nodoM);
        $$.hijos.push($2);
    }    
;

//arreglado
PRINT : tPrint '(' LISTA_EXP ')'
{
        let nodoPrint = new Nodo($1);
        let nodopi = new Nodo($2);
        let nodopd = new Nodo($4);
        $$ = new Nodo("Print");
        $$.hijos.push(nodoPrint);
        $$.hijos.push(nodopi);
        $$.hijos.push($3);
        $$.hijos.push(nodopd);
}
;

//arreglado
RETURN  :   treturn ';' 
        {
            $$ = new Nodo("Return");
        }                    
        |   treturn EXP ';'
        {
            let nodoR = new Nodo($1);
            $$ = new Nodo("Return");
            $$.hijos.push(nodoR);
            $$.hijos.push($2);
        }                 
;

//arreglado
CONTINUE  :   tContinue ';'
    {
        $$ = new Nodo("Continue");
    } 
;

//arreglado
BREAK  :   tBreak ';'
    {   
        $$ = new Nodo("Break");
    } 
;

//arreglado
INCREMENTO : id '++'
        {
                let nodoId9 = new Nodo($1);
                let nodoIncre = new Nodo($2);
                $$ = new Nodo("Incremento");
                $$.hijos.push(nodoId9)
                $$.hijos.push(nodoIncre);
        }
;

//arreglado
DECREMENTO : id '--'
        {
                let nodoId12 = new Nodo($1);
                let nodoDecre = new Nodo($2);
                $$ = new Nodo("Decremento");
                $$.hijos.push(nodoId12)
                $$.hijos.push(nodoDecre);
        }
;

DECLARACION : TIPO  id  '=' EXP
                {
                        let nodoId = new Nodo($2);
                        let nodoIgual = new Nodo($3)
                        $$ = new Nodo("Declaración");
                        $$.hijos.push($1);
                        $$.hijos.push(nodoId);
                        $$.hijos.push(nodoIgual);
                        $$.hijos.push($4);
                }
            | TIPO  id
                {
                        let nodoId2 = new Nodo($2);
                        $$ = new Nodo("Declaración");
                        $$.hijos.push($1);
                        $$.hijos.push(nodoId2);
                }  
            | TIPO '[' ']' id '=' tnew TIPO '[' entero ']' 
                {
                        let nodoci = new Nodo($2);
                        let nodoci2 = new Nodo($8);
                        let nodocd = new Nodo($3);
                        let nodocd2 = new Nodo($10);
                        let nodoId3 = new Nodo($4);
                        let nodoIgual2 = new Nodo($5);
                        let nodoNew = new Nodo($6);
                        let nodoNumero = new Nodo($9);
                        
                        $$ = new Nodo("Declaración");
                        $$.hijos.push($1);
                        $$.hijos.push(nodoci);
                        $$.hijos.push(nodocd);
                        $$.hijos.push(nodoId3);
                        $$.hijos.push(nodoIgual2);
                        $$.hijos.push(nodoNew);
                        $$.hijos.push($7);
                        $$.hijos.push(nodoci2);
                        $$.hijos.push(nodoNumero);
                        $$.hijos.push(nodocd2);
                }
                
            | TIPO '[' ']' id '=' '{' LISTA_EXP '}'
                {
                        let nodoci3 = new Nodo($2);
                        let nodocd3 = new Nodo($3);
                        let nodoId4 = new Nodo($4);
                        let nodoIgual3 = new Nodo($5);
                        let nodoyi = new Nodo($6);
                        let nodoyd = new Nodo($8);

                        $$ = new Nodo("Declaración");
                        $$.hijos.push($1);
                        $$.hijos.push(nodoci3);
                        $$.hijos.push(nodocd3);
                        $$.hijos.push(nodoId4);
                        $$.hijos.push(nodoIgual3);
                        $$.hijos.push(nodoyi);
                        $$.hijos.push($7);
                        $$.hijos.push(nodoyd);

                }
                
            | tlist '<' TIPO '>' id '=' tnew tlist '<' TIPO '>'
                {
                        let nodoLista = new Nodo($1);
                        let nodoMenor = new Nodo($2);
                        let nodoMayor = new Nodo($4);
                        let nodoId5 = new Nodo($5);
                        let nodoIgual4 = new Nodo($6);
                        let nodonew2 = new Nodo($7);
                        let nodoLista2 = new Nodo($8);
                        let nodoMenor2 = new Nodo($9);
                        let nodoMayor2 = new Nodo($11);

                      $$ = new Nodo("Declaración"); 
                      $$.hijos.push(nodoLista);
                      $$.hijos.push(nodoMenor);
                      $$.hijos.push($3);
                      $$.hijos.push(nodoMayor);
                      $$.hijos.push(nodoId5);
                      $$.hijos.push(nodoIgual4);
                      $$.hijos.push(nodonew2);
                      $$.hijos.push(nodoLista2);
                      $$.hijos.push(nodoMenor2);
                      $$.hijos.push($10);
                      $$.hijos.push(nodoMayor2);
                }

        //!!!!!!!!!!!falta arreglar
            | tlist '<' TIPO '>' id '=' EXP
                {
                      $$ = new Nodo("ID: "+$5);                
                }

        //!!!!!!!!!!!fin de arreglo 
;

//arreglado
ASIGNACION  :    id '=' EXP
        {
                let nodoId7 = new Nodo($1);
                let nodoIgual5 = new Nodo($2);
                $$ = new Nodo("Asignación");
                $$.hijos.push(nodoId7);
                $$.hijos.push(nodoIgual5);
                $$.hijos.push($3);
        }
;

//arreglado
VECTOR_ADD  :   id '[' entero ']' '=' EXP ';'
        {
                let nodoId8 = new Nodo($1);
                let nodoyi2 = new Nodo($2);
                let nodoNumero2 = new Nodo($3);
                let nodoyd2 = new Nodo($4);
                let nodoIgual6 = new Nodo($5);
               $$ = new Nodo("Modificación Vector");
               $$.hijos.push(nodoId8);
               $$.hijos.push(nodoyi2);
               $$.hijos.push(nodoNumero2);
               $$.hijos.push(nodoyd2);
               $$.hijos.push(nodoIgual6);
               $$.hijos.push($6);
        }
;

//arreglado
LISTA_ADD: id '.' tadd '(' EXP ')' ';'
        {
                let nodoId10 = new Nodo($1);
                let nodoPunto = new Nodo($2);
                let nodoAdd = new Nodo($3);
                let nodopi2 = new Nodo($4);
                let nodopd2 = new Nodo($6);
                $$ = new Nodo("Inserción lista");
                $$.hijos.push(nodoId10);  
                $$.hijos.push(nodoPunto);  
                $$.hijos.push(nodoAdd);  
                $$.hijos.push(nodopi2);  
                $$.hijos.push($5);  
                $$.hijos.push(nodopd2);  
        }
;

//arreglado
TERNARIA: EXP '?' EXP ':' EXP
        {
                $$ = new Nodo("Ternario");
                $$.hijos.push($1);
                $$.hijos.push($3);
                $$.hijos.push($5);
        }
;

//arreglado
CASTEO: '(' TIPO ')' EXP
        {
            let nodopi15 = new Nodo($1);
            let nodopd15 = new Nodo($3);
            $$ = new Nodo("Casteo"); 
            $$.hijos.push(nodopi15);
            $$.hijos.push($2);
            $$.hijos.push(nodopd15);
            $$.hijos.push($4);
        }
;

//arreglado
LISTA_MODIFICAR: id '[' '[' entero ']' ']' '=' EXP
        {
                let nodoId13 = new Nodo($1);
                let nodoyi5 = new Nodo($2);
                let nodoyi6 = new Nodo($3);
                let nodoNumero3 = new Nodo($4);
                let nodoyd5 = new Nodo($5);
                let nodoyd6 = new Nodo($6);
                let nodoIgual7 = new Nodo($7);

                $$ = new Nodo("Modificación lista");
                $$.hijos.push(nodoId13);  
                $$.hijos.push(nodoyi5);  
                $$.hijos.push(nodoyi6);  
                $$.hijos.push(nodoNumero3);  
                $$.hijos.push(nodoyd5);  
                $$.hijos.push(nodoyd6);  
                $$.hijos.push(nodoIgual7);  
                $$.hijos.push($8);  
        }
;

//arreglado
IF      :   tif '(' EXP ')' BLOQUE_SENTENCAS
        {

                let nodoIf = new Nodo($1);
                let nodopi3 = new Nodo($2);
                let nodopd3 = new Nodo($4);
                $$ = new Nodo("If");
                $$.hijos.push(nodoIf); 
                $$.hijos.push(nodopi3); 
                $$.hijos.push($3); 
                $$.hijos.push(nodopd3); 
                $$.hijos.push($5); 
        }
        |   tif '(' EXP ')' BLOQUE_SENTENCAS ELSE
        {
                let nodoIf2 = new Nodo($1);
                let nodopi4 = new Nodo($2);
                let nodopd4 = new Nodo($4);
                $$ = new Nodo("If");
                $$.hijos.push(nodoIf2); 
                $$.hijos.push(nodopi4); 
                $$.hijos.push($3); 
                $$.hijos.push(nodopd4); 
                $$.hijos.push($5); 
                $$.hijos.push($6); 
        }
;
 
//arreglado
ELSE    :   telse IF
        {
                $$ = new Nodo("Else");
                $$.hijos.push($2);
        }
        |   telse BLOQUE_SENTENCAS
        {
                $$ = new Nodo("Else");
                $$.hijos.push($2);
        }
;

//arreglado
DO_WHILE : tdo BLOQUE_SENTENCAS twhile '(' EXP ')' ';'
    {
        let nodoDo = new Nodo($1);
        let nodoW = new Nodo($3);
        let nodopi8 = new Nodo($4);
        let nodopd8 = new Nodo($6);
        $$ = new Nodo("Do While");
        $$.hijos.push(nodoDo); 
        $$.hijos.push($2); 
        $$.hijos.push(nodoW); 
        $$.hijos.push(nodopi8); 
        $$.hijos.push($5); 
        $$.hijos.push(nodopd8); 
    }
;

//arreglado
FOR     : tfor '(' DECLARACION ';' EXP ';' ACTUALIZACION_FOR ')' BLOQUE_SENTENCAS
        {
                let nodoFor = new Nodo($1);
                let nodopi6 = new Nodo($2);
                let nodopd6 = new Nodo($8);
                $$ = new Nodo("For");
                $$.hijos.push(nodoFor); 
                $$.hijos.push(nodopi6); 
                $$.hijos.push($3); 
                $$.hijos.push($5); 
                $$.hijos.push($7); 
                $$.hijos.push(nodopd6); 
                $$.hijos.push($9); 
        }
        | tfor '(' ASIGNACION ';' EXP ';' ACTUALIZACION_FOR ')' BLOQUE_SENTENCAS
        {
               let nodoFor2 = new Nodo($1);
                let nodopi7 = new Nodo($2);
                let nodopd7 = new Nodo($8);
                $$ = new Nodo("For");
                $$.hijos.push(nodoFor2); 
                $$.hijos.push(nodopi7); 
                $$.hijos.push($3); 
                $$.hijos.push($5); 
                $$.hijos.push($7); 
                $$.hijos.push(nodopd7); 
                $$.hijos.push($9); 
        }
;

//arreglado
WHILE   : twhile '(' EXP ')' BLOQUE_SENTENCAS
        {
                let nodoWhile = new Nodo($1);
                let nodopi5 = new Nodo($2);
                let nodopd5 = new Nodo($4);

                $$ = new Nodo("While");
                $$.hijos.push(nodoWhile);  
                $$.hijos.push(nodopi5);  
                $$.hijos.push($3);
                $$.hijos.push(nodopd5);  
                $$.hijos.push($5);  
        }
;

//arreglado
FUNCION:        TIPO    id '(' LISTA_PARAM ')' BLOQUE_SENTENCAS
                {
                    let nodoId17 = new Nodo($2);
                    let nodopi9 = new Nodo($3);
                    let nodopd9 = new Nodo($5);
                    $$ = new Nodo("Función");
                    $$.hijos.push($1);
                    $$.hijos.push(nodoId17);
                    $$.hijos.push(nodopi9);
                    $$.hijos.push($4);
                    $$.hijos.push(nodopd9);
                    $$.hijos.push($6);
                }
            |   tvoid   id '(' LISTA_PARAM ')' BLOQUE_SENTENCAS
                {
                    let nodoV = new Nodo($1);
                    let nodoId20 = new Nodo($2);
                    let nodopi10 = new Nodo($3);
                    let nodopd10 = new Nodo($5);
                    $$ = new Nodo("Función");
                    $$.hijos.push(nodoV);
                    $$.hijos.push(nodoId20);
                    $$.hijos.push(nodopi10);
                    $$.hijos.push($4);
                    $$.hijos.push(nodopd10);
                    $$.hijos.push($6);
                }
            |   TIPO    id '('  ')' BLOQUE_SENTENCAS
                {
                    let nodoId21 = new Nodo($2);
                    let nodopi11 = new Nodo($3);
                    let nodopd11 = new Nodo($4);
                    $$ = new Nodo("Función");
                    $$.hijos.push($1);
                    $$.hijos.push(nodoId21);
                    $$.hijos.push(nodopi11);
                    $$.hijos.push(nodopd11);
                    $$.hijos.push($5);
                }
            |   tvoid   id '('  ')' BLOQUE_SENTENCAS
                {
                    let nodoV2 = new Nodo($1);
                    let nodoId22 = new Nodo($2);
                    let nodopi12 = new Nodo($3);
                    let nodopd12 = new Nodo($4);
                    $$ = new Nodo("Función");
                    $$.hijos.push(nodoV2);
                    $$.hijos.push(nodoId22);
                    $$.hijos.push(nodopi12);
                    $$.hijos.push(nodopd12);
                    $$.hijos.push($5);
                }
;

//arreglado
TIPO    :       tinteger
        {
                $$ = new Nodo($1);
        }                    
        |       tboolean
        {
                $$ = new Nodo($1);
        }                    
        |       tstring
        {
                $$ = new Nodo($1);
        }                     
        |       tdouble
        {
                $$ = new Nodo($1);
        }                     
        |       tchar
        {
                $$ = new Nodo($1);;
        }                       
; 

//arreglado
LISTA_PARAM :   LISTA_PARAM ',' TIPO id
            {
                let nodoId19 = new Nodo($4);
                $$ = $1;
                $$.hijos.push($3);
                $$.hijos.push(nodoId19);
            }
            |   TIPO id
            {
                let nodoId18 = new Nodo($2);
                $$ = new Nodo("Parámetro");
                $$.hijos.push($1);
                $$.hijos.push(nodoId18);
            }
;

//arreglado
LISTA_EXP : LISTA_EXP ',' EXP
        {
                $$ = $1;
                $$.hijos.push($3);      
        }
        |   EXP
        {
                $$ = new Nodo("Expresion");
                $$.hijos.push($1);
        }
;

//arreglado
LLAMADA_FUNCION  : id '('  ')'
                {
                    let nodoId23 = new Nodo($1);
                    let nodopi13 = new Nodo($2);
                    let nodopd13 = new Nodo($3);
                    $$ = new Nodo("Llamada Función")
                    $$.hijos.push(nodoId23);
                    $$.hijos.push(nodopi13);
                    $$.hijos.push(nodopd13);
                }
                | id '(' LISTA_EXP ')'
                {
                    let nodoId24 = new Nodo($1);
                    let nodopi14 = new Nodo($2);
                    let nodopd14 = new Nodo($4);
                    $$ = new Nodo("Llamada Función")
                    $$.hijos.push(nodoId24);
                    $$.hijos.push(nodopi14);
                    $$.hijos.push($3);
                    $$.hijos.push(nodopd14);
                }
;

//arreglado
ACTUALIZACION_FOR: id '++'
        {
            let nodoId14 = new Nodo($1);
            let nodoIncre2 = new Nodo($2);
            $$ = new Nodo("Incremento");
            $$.hijos.push(nodoId14);
            $$.hijos.push(nodoIncre2);
        }
        | id '--'
        {
            let nodoId15 = new Nodo($1);
            let nodoDecre2 = new Nodo($2);
            $$ = new Nodo("Decremento");
            $$.hijos.push(nodoId15);
            $$.hijos.push(nodoDecre2);
        }
        | id '=' EXP
        {
            let nodoId16 = new Nodo($1);
            let nodoIgual8 = new Nodo($2);
            $$ = new Nodo("Asignación");
            $$.hijos.push(nodoId16);
            $$.hijos.push(nodoIgual8);
            $$.hijos.push($3);
        }
;


SWITCH
  : tswitch '(' EXP ')' BLOCK_SWITCH
  {
    let nodoSwitch = new Nodo($1);
    let nodopi24 = new Nodo($2);
    let nodopd24 = new Nodo($4);

    $$ = new Nodo("Switch");
    $$.hijos.push(nodoSwitch);
    $$.hijos.push(nodopi24);
    $$.hijos.push($3);
    $$.hijos.push(nodopd24);
    $$.hijos.push($5);
  }
;

BLOCK_SWITCH
  : '{'  L_CASE '}'
    {
        $$ = $2;
    }
  | '{' '}'
;

L_CASE
  : L_CASE CASES
    {
        $$ = $1;
        $$.hijos.push($2);
    }
  | CASES
    {
        $$ = $1;
    }
;

CASES
  : tcase EXP BLOCK_CASES
    {
        let nodoCase = new Nodo($1);
        $$ = new Nodo("Case");
        $$.hijos.push(nodoCase);
        $$.hijos.push($2);
        $$.hijos.push($3);
    }
  | tdefault BLOCK_CASES
    {
        let nodoDefaul = new Nodo($1);
        $$ = new Nodo("Default");
        $$.hijos.push(nodoDefaul);
        $$.hijos.push($2);
    }
;

BLOCK_CASES
  : ':' SENTENCIAS
    {
        $$ = $2;
    }
  | ':'
;


//arreglado
FUNCIONES_LENGUAJE
    : ttoLower '(' EXP ')'
    {
        let nodopi16 = new Nodo($2);
        let nodopd16 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi16);
        $$.hijos.push(nodopd16);
    }
    | ttoUpper '(' EXP ')' 
    {
        let nodopi17 = new Nodo($2);
        let nodopd17 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi17);
        $$.hijos.push(nodopd17);
    }
    | ttruncate '(' EXP ')'
    {
        let nodopi18 = new Nodo($2);
        let nodopd18 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi18);
        $$.hijos.push(nodopd18);
    } 
    | tround '(' EXP ')'
    {
        let nodopi19 = new Nodo($2);
        let nodopd19 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi19);
        $$.hijos.push(nodopd19);
    }  
    | ttoCharArray '(' EXP ')'
    {
        let nodopi20 = new Nodo($2);
        let nodopd20 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi20);
        $$.hijos.push(nodopd20);
    }
    | ttoString '(' EXP ')'
    {
        let nodopi21 = new Nodo($2);
        let nodopd21 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi21);
        $$.hijos.push(nodopd21);
    }
    | ttypeOf '(' EXP ')'  
    {
        let nodopi22 = new Nodo($2);
        let nodopd22 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi22);
        $$.hijos.push(nodopd22);
    }
    | tlength '(' EXP ')'
    {
        let nodopi23 = new Nodo($2);
        let nodopd23 = new Nodo($4);
        $$ = new Nodo($1);
        $$.hijos.push($3);
        $$.hijos.push(nodopi23);
        $$.hijos.push(nodopd23);
    }
;

EXP :   EXP '+' EXP
        {
                $$= new Nodo("+"); 
                $$.hijos.push($1);
                $$.hijos.push($3);
        }                     
    |   EXP '-' EXP
    {
        $$= new Nodo("-"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }           
    |   EXP '*' EXP
    {
        $$= new Nodo("*"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                     
    |   EXP '/' EXP
    {
        $$= new Nodo("/"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                     
    |   EXP '^' EXP
    {
        $$= new Nodo("^"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                    
    |   EXP '%' EXP
    {
        $$= new Nodo("%"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                    
    |   '-' EXP %prec negativo
    {
        $$= new Nodo("-"); 
        $$.hijos.push($1);
        $$.hijos.push($2);
    }          
    |   '(' EXP ')'
    {
        $$ = $2;
    }                     
    |   EXP '=='  EXP
    {
        $$= new Nodo("=="); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '!='  EXP
    {
        $$= new Nodo("!="); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '<'   EXP
    {
        $$= new Nodo("<"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '>'   EXP
    {
        $$= new Nodo(">"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '<='  EXP
    {
        $$= new Nodo("<="); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '>='  EXP
    {
        $$= new Nodo(">="); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '&&'  EXP
    {
        $$= new Nodo("&&"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                   
    |   EXP '||'  EXP 
    {
        $$= new Nodo("||"); 
        $$.hijos.push($1);
        $$.hijos.push($3);
    }                  
    |   id
    {
        $$ = new Nodo($1);
    }
    //arreglado                             
    |   id '[' EXP ']'
    {
        let nodoId6 = new Nodo($1);
        let nodoci4 = new Nodo($2);
        let nodocd4 = new Nodo($4);
        $$ = new Nodo("Acceso Vector");
        $$.hijos.push(nodoId6);
        $$.hijos.push(nodoci4);
        $$.hijos.push($3);
        $$.hijos.push(nodocd4);
    }
    //arreglado                  
    |   id '[' '[' EXP ']'']'
    {
        let nodoId11 = new Nodo($1);
        let nodoyi3 = new Nodo($2);
        let nodoyi4 = new Nodo($3);
        let nodoyd3 = new Nodo($5);
        let nodoyd4 = new Nodo($6);
        $$ = new Nodo("Acceso Lista");
        $$.hijos.push(nodoId11);
        $$.hijos.push(nodoyi3);
        $$.hijos.push(nodoyi4);
        $$.hijos.push($4);
        $$.hijos.push(nodoyd3);
        $$.hijos.push(nodoyd4);
    }           
    |   LLAMADA_FUNCION 
    {
        $$ = $1;
    }                 
    |   entero
    {
        $$ = new Nodo($1);
    }                    
    |   decimal
    {
        $$ = new Nodo($1);
    }                         
    |   caracter
    {
        $$ = new Nodo($1);
    }                        
    |   cadena
    {
        $$ = new Nodo($1);
    }                          
    |   ttrue
    {
        $$ = new Nodo($1);
    }                           
    |   tfalse
    {
        $$ = new Nodo($1);
    }                          
    |   TERNARIA
    {
        $$ = $1;
    }                       
    |   CASTEO
    {
        $$ = $1;
    }                         
    |   FUNCIONES_LENGUAJE  
    {
        $$ = $1;
    }            
;