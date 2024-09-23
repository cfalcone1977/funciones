/*
Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados en una variable de tipo string. 
El string devuelto debe imprimirse por consola.

Refactorizar el método dibujarGuiones utilizado para el ejercicio de la calculadora realizado anteriormente 
*/

import * as readlineSync from "readline-sync";
let name,lastname,nombrecompleto: string;

function DibujarGuiones(cantidad:number,mensaje:string="") 
{
  let cantOrig, cantletras, indice: number;
  let guiones:string;
  cantOrig = cantidad;
  /*
  agregue la posibilidad de enviar un mensaje adaptativo entre los guiones!!. si envio mensaje a la funcion, 
  esta centra entre los guiones el mensaje (cantidades pares de guiones).
  */
  if (mensaje!="") {
                    cantletras = mensaje.length;  
                    cantidad=(cantidad - cantletras) / 2;
                    guiones = "";
                    for (indice = 1; indice <=cantidad; indice=indice +1) 
                      {
                      guiones = guiones + "-";
                      }
                    if (cantletras % 2 != 0) {
                                             console.log(`${guiones}${mensaje}${guiones}-`);
                                             } else {
                                                     console.log(`${guiones}${mensaje}${guiones}`); 
                                                    }
                  } else {
                          guiones = ""  ;
                          for (indice = 1; indice <=cantidad; indice=indice +1) 
                                              {
                                              guiones = guiones + "-";
                                              } 
                                            console.log(guiones);
                         }
}

function imprimirNombre(nombre:string,apellido:string):string
{
let nombreyapellido:string;
nombreyapellido = nombre + " " + apellido;
return nombreyapellido;
}

console.clear();
DibujarGuiones(80,"");
DibujarGuiones(80,"Impresion de Nombre");
DibujarGuiones(80,"Este programa concatena dos variables en una");
DibujarGuiones(80);
name = readlineSync.question("Ingrese su nombre:   ");
lastname = readlineSync.question("Ingrese su apellido: ");
nombrecompleto = imprimirNombre(name,lastname);
console.log("\n");
DibujarGuiones(80);
console.log(`Hola ${nombrecompleto} bienvenido`);
DibujarGuiones(80);