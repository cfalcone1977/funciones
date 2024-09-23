/*Realice un programa que devuelva el área del triángulo usando los siguientes pares de base-altura:
(1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
Implemente un método llamado calcularAreaTriangulo que reciba dos números por parámetro (uno llamado base y otro altura)

*/

import * as readlineSync from "readline-sync";
let base,altura,area,indice: number;

function areatriangulo(b:number,h:number):number
{
let area:number;
area=(b*h)/2;
return area;
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

console.clear;
DibujarGuiones(40,"");
DibujarGuiones(40,"AREAS TRIANGULOS");
DibujarGuiones(40,"");

for (indice = 1; indice <= 7; indice=indice + 1) 
{
area = areatriangulo(indice,indice+indice);    
DibujarGuiones(60);
console.log(`El area de un triangulo de base=${indice} con altura=${indice+indice} es: ${area}`);
DibujarGuiones(60);    
}

