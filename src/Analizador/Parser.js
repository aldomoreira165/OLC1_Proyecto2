/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,17],$V2=[1,18],$V3=[1,19],$V4=[1,15],$V5=[1,20],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[5,9,22,32,37,38,41,42,43,44,45],$Va=[1,32],$Vb=[1,34],$Vc=[1,36],$Vd=[22,25],$Ve=[2,17],$Vf=[1,42],$Vg=[1,49],$Vh=[1,51],$Vi=[1,48],$Vj=[1,47],$Vk=[1,52],$Vl=[1,53],$Vm=[1,54],$Vn=[1,55],$Vo=[1,56],$Vp=[1,73],$Vq=[1,74],$Vr=[1,75],$Vs=[1,76],$Vt=[1,77],$Vu=[1,78],$Vv=[1,79],$Vw=[1,80],$Vx=[1,81],$Vy=[1,82],$Vz=[1,83],$VA=[1,84],$VB=[9,11,26,34,46,47,48,49,50,51,52,53,54,55,56,57,58],$VC=[1,90],$VD=[9,34,46],$VE=[1,97],$VF=[1,99],$VG=[34,46],$VH=[9,11,26,34,46,47,48,51,52,53,54,55,56,57,58],$VI=[9,11,26,34,46,51,52,57,58],$VJ=[9,11,26,34,46,51,52,53,54,55,56,57,58],$VK=[5,9,22,32,36,37,38,41,42,43,44,45],$VL=[1,145];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"BLOQUE_SENTENCAS":7,"{":8,"}":9,"DECLARACION":10,";":11,"FUNCION":12,"ASIGNACION":13,"VECTOR_ADD":14,"IF":15,"LLAMADA_FUNCION":16,"WHILE":17,"INCREMENTO":18,"DECREMENTO":19,"FOR":20,"TIPO":21,"id":22,"=":23,"EXP":24,"[":25,"]":26,"tnew":27,"entero":28,"LISTA_EXP":29,"++":30,"--":31,"tif":32,"(":33,")":34,"ELSE":35,"telse":36,"twhile":37,"tfor":38,"ACTUALIZACION_FOR":39,"LISTA_PARAM":40,"tvoid":41,"tinteger":42,"tboolean":43,"tstring":44,"tdouble":45,",":46,"+":47,"-":48,"*":49,"/":50,"==":51,"!=":52,"<":53,">":54,"<=":55,">=":56,"&&":57,"||":58,"decimal":59,"caracter":60,"cadena":61,"ttrue":62,"tfalse":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"{",9:"}",11:";",22:"id",23:"=",25:"[",26:"]",27:"tnew",28:"entero",30:"++",31:"--",32:"tif",33:"(",34:")",36:"telse",37:"twhile",38:"tfor",41:"tvoid",42:"tinteger",43:"tboolean",44:"tstring",45:"tdouble",46:",",47:"+",48:"-",49:"*",50:"/",51:"==",52:"!=",53:"<",54:">",55:"<=",56:">=",57:"&&",58:"||",59:"decimal",60:"caracter",61:"cadena",62:"ttrue",63:"tfalse"},
productions_: [0,[3,2],[4,2],[4,1],[7,3],[7,2],[6,2],[6,1],[6,2],[6,1],[6,1],[6,2],[6,1],[6,2],[6,2],[6,1],[10,4],[10,2],[10,10],[10,8],[13,3],[18,2],[19,2],[14,7],[15,5],[15,6],[35,2],[35,2],[17,5],[20,9],[20,9],[39,2],[39,2],[12,6],[12,6],[12,5],[12,5],[21,1],[21,1],[21,1],[21,1],[40,4],[40,2],[29,3],[29,1],[16,4],[24,3],[24,3],[24,3],[24,3],[24,2],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,1],[24,4],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        console.log("Parse de Jison entrada: OK ");
        let raiz = new Raiz($$[$0-1]);
        this.$ = raiz;
        return raiz;
    
break;
case 2:

                $$[$0-1].push($$[$0]);
                this.$ = $$[$0-1];
            
break;
case 3:

                let lstsent = [];
                lstsent.push($$[$0]);
                this.$ = lstsent;
            
break;
case 4:

                       this.$ = $$[$0-1];
                
break;
case 5:

                        this.$ = [];
                
break;
case 6: case 8: case 11: case 13: case 14:
 this.$ = $$[$0-1]; 
break;
case 7: case 9: case 10: case 12: case 15: case 62:
 this.$ = $$[$0]; 
break;
case 16:

                this.$ = new DeclararVariable($$[$0-3], $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 17:

                this.$ = new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0].first_line, _$[$0].first_column);
            
break;
case 18:

                this.$ = new DeclararArreglo($$[$0-9], $$[$0-6], $$[$0-3],undefined, $$[$0-1], _$[$0-8].first_line, _$[$0-8].first_column);
            
break;
case 19:

                this.$ = new DeclararArreglo($$[$0-7], $$[$0-4],undefined, $$[$0-1],undefined, _$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 20:

                this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 21:

                this.$ = new Incremento($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column)
            
break;
case 22:

                this.$ = new Decremento($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column)
            
break;
case 23:

                this.$ = new AsignacionVector($$[$0-6], $$[$0-1], $$[$0-4],_$[$0-6].first_line, _$[$0-6].first_column);
            
break;
case 24:

            this.$ = new If($$[$0-2], $$[$0], [], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 25:

            this.$ = new If($$[$0-3], $$[$0-1], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 26:

            let else_sent = [];
            else_sent.push($$[$0]);
            this.$ = else_sent;
        
break;
case 27:

            this.$ = $$[$0];
        
break;
case 28:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column );
        
break;
case 29: case 30:

            this.$ = new For($$[$0-6], $$[$0-4], $$[$0-2], $$[$0], _$[$0-8].first_line, _$[$0-8].first_column );
        
break;
case 31:

           this.$ = new Incremento($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column)
        
break;
case 32:

           this.$ = new Decremento($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column) 
        
break;
case 33:

                this.$ = new DeclararFuncion($$[$0-5], $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 34:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 35:

                this.$ = new DeclararFuncion($$[$0-4], $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 36:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 37:
 this.$ = new Tipo(TipoPrimitivo.Integer); 
break;
case 38:
 this.$ = new Tipo(TipoPrimitivo.Boolean); 
break;
case 39:
 this.$ = new Tipo(TipoPrimitivo.String);  
break;
case 40:
 this.$ = new Tipo(TipoPrimitivo.Double);  
break;
case 41:

                $$[$0-3].push( new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-3].first_line, _$[$0-3].first_column) );
                this.$ = $$[$0-3];
            
break;
case 42:

                let decla1 = new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-1].first_line, _$[$0-1].first_column);
                let params = [];
                params.push(decla1);
                this.$ = params;
            
break;
case 43:

            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 44:
 
            let lista_exp = [];
            lista_exp.push($$[$0]);
            this.$ = lista_exp;
        
break;
case 45:
 this.$ = new LlamadaFuncion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);    
break;
case 46: case 47: case 48: case 49:
 this.$ = new OperacionAritmetica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 50:
 this.$ = $$[$0];
break;
case 51:
 this.$ = $$[$0-1];
break;
case 52: case 53: case 54: case 55: case 56: case 57:
 this.$ = new OperacionRelacional($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 58: case 59:
 this.$ = new OperacionLogica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 60:
 this.$ = new AccesoVariable($$[$0], _$[$0].first_line, _$[$0].first_column);        
break;
case 61:
 this.$ = new AccesoVector($$[$0-3], $$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column);        
break;
case 63:
 this.$ = new Valor($$[$0], "integer", _$[$0].first_line, _$[$0].first_column);
break;
case 64:
 this.$ = new Valor($$[$0], "double", _$[$0].first_line, _$[$0].first_column); 
break;
case 65:
 this.$ = new Valor($$[$0], "char", _$[$0].first_line, _$[$0].first_column);   
break;
case 66:
 this.$ = new Valor($$[$0], "string", _$[$0].first_line, _$[$0].first_column); 
break;
case 67:
 this.$ = new Valor($$[$0], "true", _$[$0].first_line, _$[$0].first_column);   
break;
case 68:
 this.$ = new Valor($$[$0], "false", _$[$0].first_line, _$[$0].first_column);  
break;
}
},
table: [{3:1,4:2,6:3,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:13,21:14,22:$V0,32:$V1,37:$V2,38:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},{1:[3]},{5:[1,24],6:25,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:13,21:14,22:$V0,32:$V1,37:$V2,38:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},o($V9,[2,3]),{11:[1,26]},o($V9,[2,7]),{11:[1,27]},o($V9,[2,9]),o($V9,[2,10]),{11:[1,28]},o($V9,[2,12]),{11:[1,29]},{11:[1,30]},o($V9,[2,15]),{22:[1,31],25:$Va},{22:[1,33]},{23:$Vb,25:[1,35],30:[1,37],31:[1,38],33:$Vc},{33:[1,39]},{33:[1,40]},{33:[1,41]},o($Vd,[2,37]),o($Vd,[2,38]),o($Vd,[2,39]),o($Vd,[2,40]),{1:[2,1]},o($V9,[2,2]),o($V9,[2,6]),o($V9,[2,8]),o($V9,[2,11]),o($V9,[2,13]),o($V9,[2,14]),{11:$Ve,23:$Vf,33:[1,43]},{26:[1,44]},{33:[1,45]},{16:50,22:$Vg,24:46,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{28:[1,57]},{16:50,22:$Vg,24:59,28:$Vh,29:58,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{11:[2,21]},{11:[2,22]},{16:50,22:$Vg,24:60,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:61,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{10:62,13:63,21:64,22:[1,65],42:$V5,43:$V6,44:$V7,45:$V8},{16:50,22:$Vg,24:66,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{21:69,34:[1,68],40:67,42:$V5,43:$V6,44:$V7,45:$V8},{22:[1,70]},{21:69,34:[1,72],40:71,42:$V5,43:$V6,44:$V7,45:$V8},{11:[2,20],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{16:50,22:$Vg,24:85,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:86,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},o($VB,[2,60],{25:[1,87],33:$Vc}),o($VB,[2,62]),o($VB,[2,63]),o($VB,[2,64]),o($VB,[2,65]),o($VB,[2,66]),o($VB,[2,67]),o($VB,[2,68]),{26:[1,88]},{34:[1,89],46:$VC},o($VD,[2,44],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA}),{34:[1,91],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{34:[1,92],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{11:[1,93]},{11:[1,94]},{22:[1,95],25:$Va},{23:$Vb},{11:[2,16],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{34:[1,96],46:$VE},{7:98,8:$VF},{22:[1,100]},{23:[1,101]},{34:[1,102],46:$VE},{7:103,8:$VF},{16:50,22:$Vg,24:104,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:105,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:106,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:107,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:108,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:109,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:110,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:111,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:112,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:113,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:114,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:115,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},o($VB,[2,50]),{34:[1,116],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{16:50,22:$Vg,24:117,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{23:[1,118]},o($VB,[2,45]),{16:50,22:$Vg,24:119,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{7:120,8:$VF},{7:121,8:$VF},{16:50,22:$Vg,24:122,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{16:50,22:$Vg,24:123,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},{11:$Ve,23:$Vf},{7:124,8:$VF},{21:125,42:$V5,43:$V6,44:$V7,45:$V8},o($V9,[2,35]),{4:126,6:3,9:[1,127],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:13,21:14,22:$V0,32:$V1,37:$V2,38:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},o($VG,[2,42]),{8:[1,129],27:[1,128]},{7:130,8:$VF},o($V9,[2,36]),o($VH,[2,46],{49:$Vr,50:$Vs}),o($VH,[2,47],{49:$Vr,50:$Vs}),o($VB,[2,48]),o($VB,[2,49]),o($VI,[2,52],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,53:$Vv,54:$Vw,55:$Vx,56:$Vy}),o($VI,[2,53],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,53:$Vv,54:$Vw,55:$Vx,56:$Vy}),o($VJ,[2,54],{47:$Vp,48:$Vq,49:$Vr,50:$Vs}),o($VJ,[2,55],{47:$Vp,48:$Vq,49:$Vr,50:$Vs}),o($VJ,[2,56],{47:$Vp,48:$Vq,49:$Vr,50:$Vs}),o($VJ,[2,57],{47:$Vp,48:$Vq,49:$Vr,50:$Vs}),o([9,11,26,34,46,57,58],[2,58],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy}),o([9,11,26,34,46,58],[2,59],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz}),o($VB,[2,51]),{26:[1,131],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{16:50,22:$Vg,24:132,28:$Vh,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},o($VD,[2,43],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA}),o($V9,[2,24],{35:133,36:[1,134]}),o($V9,[2,28]),{11:[1,135],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},{11:[1,136],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},o($V9,[2,33]),{22:[1,137]},{6:25,9:[1,138],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:12,20:13,21:14,22:$V0,32:$V1,37:$V2,38:$V3,41:$V4,42:$V5,43:$V6,44:$V7,45:$V8},o($VK,[2,5]),{21:139,42:$V5,43:$V6,44:$V7,45:$V8},{16:50,22:$Vg,24:59,28:$Vh,29:140,33:$Vi,48:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo},o($V9,[2,34]),o($VB,[2,61]),{11:[1,141],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA},o($V9,[2,25]),{7:143,8:$VF,15:142,32:$V1},{22:$VL,39:144},{22:$VL,39:146},o($VG,[2,41]),o($VK,[2,4]),{25:[1,147]},{9:[1,148],46:$VC},o($V9,[2,23]),o($V9,[2,26]),o($V9,[2,27]),{34:[1,149]},{30:[1,150],31:[1,151]},{34:[1,152]},{28:[1,153]},{11:[2,19]},{7:154,8:$VF},{34:[2,31]},{34:[2,32]},{7:155,8:$VF},{26:[1,156]},o($V9,[2,29]),o($V9,[2,30]),{11:[2,18]}],
defaultActions: {24:[2,1],37:[2,21],38:[2,22],148:[2,19],150:[2,31],151:[2,32],156:[2,18]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    let Raiz                        =   require("../Entorno/Raiz").Raiz;
    let Tipo                        =   require("../Entorno/Simbolos/Tipo").Tipo;
    let TipoPrimitivo               =   require("../Entorno/Simbolos/TipoPrimitivo").TipoPrimitivo;
    let DeclararVariable            =   require("../Instrucciones/DeclararVariable").DeclararVariable; 
    let DeclararFuncion             =   require("../Instrucciones/DeclararFuncion").DeclararFuncion;
    let DeclararArreglo             =   require("../Instrucciones/DeclararArreglo").DeclararArreglo;
    let Asignacion                  =   require("../Instrucciones/Asignacion").Asignacion;
    let AsignacionVector            =   require("../Instrucciones/AsignacionVector").AsignacionVector;
    let If                          =   require("../Instrucciones/If").If;
    let Parametro                   =   require("../Instrucciones/Parametro").Parametro;
    let AccesoVariable              =   require("../Expresiones/AccesoVariable").AccesoVariable;
    let AccesoVector                =   require("../Expresiones/AccesoVector").AccesoVector;
    let LlamadaFuncion              =   require("../Expresiones/LlamadaFuncion").LlamadaFuncion;
    let OperacionAritmetica         =   require("../Expresiones/OperacionAritmetica").OperacionAritmetica;
    let OperacionLogica             =   require("../Expresiones/OperacionLogica").OperacionLogica;
    let OperacionRelacional         =   require("../Expresiones/OperacionRelacional").OperacionRelacional;
    let While                       =   require("../Instrucciones/While").While;
    let Valor                       =   require("../Expresiones/Valor").Valor;
    let Incremento                  =   require("../Instrucciones/Incremento").Incremento;
    let Decremento                  =    require("../Instrucciones/Decremento").Decremento;
    let For                         =    require("../Instrucciones/For").For;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 5;
break;
case 2:/* IGNORE */
break;
case 3:/* IGNORE */
break;
case 4:   return 62;     
break;
case 5:   return 63;    
break;
case 6:   return 42;  
break;
case 7:   return 43;  
break;
case 8:   return 45;   
break;
case 9:   return 44;   
break;
case 10:   return 32;       
break;
case 11:   return 37;    
break;
case 12:   return 38;    
break;
case 13:   return 36;     
break;
case 14:   return 41;     
break;
case 15:   return 'treturn';   
break;
case 16:   return 27;     
break;
case 17:yy_.yytext = yy_.yytext.toLowerCase();          return 22;
break;
case 18:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 61;
break;
case 19:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 60
break;
case 20:return 59
break;
case 21:return 28
break;
case 22:return '$'
break;
case 23:return 30;
break;
case 24:return 31;
break;
case 25:return 47;
break;
case 26:return 48;
break;
case 27:return 49;
break;
case 28:return 50;
break;
case 29:return '%';
break;
case 30:return 33;
break;
case 31:return 34;
break;
case 32:return 51;
break;
case 33:return 23;
break;
case 34:return 46;
break;
case 35:return ':';
break;
case 36:return 11;
break;
case 37:return 58;
break;
case 38:return 57;
break;
case 39:return 52;
break;
case 40:return '!';
break;
case 41:return 55;
break;
case 42:return 56;
break;
case 43:return 54;
break;
case 44:return 53;
break;
case 45:return 8;
break;
case 46:return 9;
break;
case 47:return 25;
break;
case 48:return 26;
break;
case 49:return 'num';
break;
case 50:
break;
}
},
rules: [/^(?:\s+)/,/^(?:$)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:true\b)/,/^(?:false\b)/,/^(?:int\b)/,/^(?:boolean\b)/,/^(?:double\b)/,/^(?:String\b)/,/^(?:if\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:else\b)/,/^(?:void\b)/,/^(?:return\b)/,/^(?:new\b)/,/^(?:([a-zA-ZÑñ]|(_[a-zA-ZÑñ]))([a-zA-ZÑñ]|[0-9]|_)*)/,/^(?:"(?:[(\[)|(\])]|["\\"]["bnrt/["\\"]|[^"["\\"])*")/,/^(?:'(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])')/,/^(?:((?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))\b)/,/^(?:((?:[0-9]|[1-9][0-9]+))\b)/,/^(?:\$)/,/^(?:\+\+)/,/^(?:--)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:==)/,/^(?:=)/,/^(?:,)/,/^(?::)/,/^(?:;)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:!=)/,/^(?:!)/,/^(?:<=)/,/^(?:>=)/,/^(?:>)/,/^(?:<)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:digit\b)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Parser;
exports.Parser = Parser.Parser;
exports.parse = function () { return Parser.parse.apply(Parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}