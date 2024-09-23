/*
Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso 
según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero
*/



import * as readlineSync from "readline-sync";
let dividendo,divisor: number;
let multiplo: boolean;

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
DibujarGuiones(70,"");
DibujarGuiones(70,"Multiplos");
DibujarGuiones(70,"Este programa verifica si un numero es multiplo de otro");
DibujarGuiones(70);
dividendo = readlineSync.questionInt("Ingrese dividendo: ");
divisor = readlineSync.questionInt("Ingrese divisor:   ");
multiplo = esMultiplo(dividendo,divisor);
console.log("\n\n");
DibujarGuiones(70);
console.log(`El numero ${dividendo} es multiplo de ${divisor} ? ${multiplo} `);
DibujarGuiones(70);



