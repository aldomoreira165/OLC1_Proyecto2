import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Analizador } from './Analizador/Analizador';
import { AST } from './Entorno/AST';
import Gramatica from './AST/Gramatica';
import { Tabla } from './Tabla/Tabla';

const app = express();
const port = 5000;

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../public')));



// ===================================== RUTAS
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Servidor funcionando en puerto: ${port}`);
});


app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'TypeWise', salida: '', codigo: "" });
});

app.post('/ejecutar', (req, res) => {

    //para la tabla de símbolos
    Tabla.vaciarArreglo();

    let cadena_codigo = req.body.codigo;
    let analizador = new Analizador(cadena_codigo, "editor");
    let ast: AST = analizador.Analizar();

    //para el arbol
    /*let raizAST = Gramatica.parse(cadena_codigo);
    const contenido = `digraph G { 
        graph [ratio=.548];
        node [style=filled, shape=circle, width=1
            fontname=Helvetica, fontweight=bold, fontcolor=black,
            fontsize=10, fixedsize=true];
    `+ raizAST.graficar() + " \n }";
    console.log(contenido);*/

    //mostrando la tabla de simbolso
    Tabla.mostrarTabla();
    const contenido = `digraph G {
        node[shape=plaintext]
        table [label=<<table border="1" cellspacing="0">
            <tr><td>Identificador</td><td>Tipo</td><td>Tipo</td><td>Linea</td><td>Columna</td></tr>
            ${Tabla.graficarTabla()}
        </table>>]
    }`
    console.log(contenido);

    if (ast != undefined) {
        res.render('index.ejs', { title: 'TypeWise', salida: ast.getSalida(), codigo: cadena_codigo });
    } else {
        res.render('index.ejs', { title: 'TypeWise', salida: 'ERROR al procesar cadena', codigo: cadena_codigo });
    }
});


