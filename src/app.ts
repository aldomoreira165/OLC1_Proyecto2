import express from 'express';
import * as fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Analizador } from './Analizador/Analizador';
import { AST } from './Entorno/AST';
import Gramatica from './AST/Gramatica';
import { Tabla } from './Tabla/Tabla';
import { TablaError } from './Tabla/TablaError';

const app = express();
const port = 3000;

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


app.post('/reporteErrores', (req, res) => {
    res.redirect("/reporteErrores.html")
});

app.post('/reporteSimbolos', (req, res) => {
    res.redirect("/reporteSimbolos.html")
});

app.post('/reporteAST', (req, res) => {
    res.redirect("/reporteAST.html")
});

app.post('/ejecutar', (req, res) => {

    //para la tabla de símbolos
    Tabla.vaciarArreglo();
    TablaError.vaciarArreglo();

    let cadena_codigo = req.body.codigo;
    let analizador = new Analizador(cadena_codigo, "editor");
    let ast: AST = analizador.Analizar();

    crearAST(cadena_codigo);
    crearTabla();
    crearTablaErrores();


    if (ast instanceof AST) {
        if (ast != undefined) {
            res.render('index.ejs', { title: 'InterpreteTS - JISON', salida: ast.getSalida(), codigo: cadena_codigo, svgString: "" });
        }
    } else {
        res.render('index.ejs', { title: 'InterpreteTS - JISON', salida: "Se encontraron errores.", codigo: cadena_codigo });
    }
});

function crearTabla() {

    try {
        const archivoTXT = 'public/TablaSimbolos.txt'
        const archivoSVG = 'public/TablaSimbolos.svg'
        const contenido = `digraph G {
        node[shape=plaintext]
        table [label=<<table border="1" cellspacing="0">
            <tr><td>Identificador</td><td>Tipo</td><td>Tipo</td><td>Linea</td><td>Columna</td></tr>
            ${Tabla.graficarTabla()}
        </table>>]
    }`

        fs.writeFile(archivoTXT, contenido, err => {
            if (err) {
                console.error('Falló escribir el archivo ', err);
            } else console.log('archivo creado correctamente');
        });

        exec(`dot -Tsvg ${archivoTXT} -o ${archivoSVG}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (error) {
        console.log(error);
    }
}

function crearTablaErrores() {

    try {
        const archivoTXT = 'public/TablaErrores.txt'
        const archivoSVG = 'public/TablaErrores.svg'
        const contenido = `digraph G {
        node[shape=plaintext]
        table [label=<<table border="1" cellspacing="0">
            <tr><td>Tipo</td><td>Descripcion</td><td>Linea</td><td>Columna</td></tr>
            ${TablaError.graficarTabla()}
        </table>>]
    }`

        fs.writeFile(archivoTXT, contenido, err => {
            if (err) {
                console.error('Falló escribir el archivo ', err);
            } else console.log('archivo creado correctamente');
        });

        exec(`dot -Tsvg ${archivoTXT} -o ${archivoSVG}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (error) {
        console.log(error);
    }
}

function crearAST(codigo) {
    try {
        let raizAST = Gramatica.parse(codigo);
        const archivoTXT = 'public/AST.txt'
        const archivoSVG = 'public/AST.svg'
        const contenido = `digraph G { 
            graph [ratio=.548];
            node [style=filled, shape=circle, width=1
                fontname=Helvetica, fontweight=bold, fontcolor=black,
                fontsize=10, fixedsize=true];
        `+ raizAST.graficar() + " \n }";

        fs.writeFile(archivoTXT, contenido, err => {
            if (err) {
                console.error('Falló escribir el archivo ', err);
            } else console.log('archivo creado correctamente');
        });

        exec(`dot -Tsvg ${archivoTXT} -o ${archivoSVG}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}
