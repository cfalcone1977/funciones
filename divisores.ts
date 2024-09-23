/*
Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior
*/

import * as readlineSync from "readline-sync";
let entero,divisores: number;

function esMultiplo(dDendo:number,dSor:number):boolean
{
let resultado:boolean;
if (dDendo % dSor === 0) {
                           resultado = true;
                         } else {
                                  resultado = false;
                                }
return resultado;
}

function cantidadDeDivisores(nro:number):number
{
let cantidad,indice:number;
cantidad=0;
for (indice = 1; indice <= nro; indice=indice+1) 
    {
    if (esMultiplo(nro,indice)) {
                                 cantidad=cantidad+1;   
                                }
    
    }
return cantidad;
}


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

console.clear();
DibujarGuiones(80,"");
DibujarGuiones(80,"DIVISORES");
DibujarGuiones(80,"Este programa devuelve la cantidad de divisores del nro ingresado");
DibujarGuiones(80);
entero = readlineSync.questionInt("Ingrese un numero: ");
divisores = cantidadDeDivisores(entero);
console.log("\n");
DibujarGuiones(80);
console.log(`El numero ${entero} tiene ${divisores} divisores`);
DibujarGuiones(80);



