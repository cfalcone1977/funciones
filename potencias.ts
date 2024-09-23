/*
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 
*/


import * as readlineSync from "readline-sync";

let base,exponente,calculo: number;


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

/* funcion que considera 4 operaciones SUMA-RESTA-MULTIPLICACION-DIVISION y devuelve el resultado del calculo*/
function potencia(B:number, E:number):number
{
  let resultado,indice:number;
  resultado=1;
  for (indice=1; indice <= E; indice=indice+1) 
    {
     resultado=resultado * B;
    }
  return resultado;
}


exponente=-1;
console.clear();
DibujarGuiones(40,"");
DibujarGuiones(40,"Calculo POTENCIAS");
DibujarGuiones(40,"");
base = readlineSync.questionInt("Ingrese la base:      ");
while (exponente < 0) 
        {
        exponente = readlineSync.questionInt("Ingrese es exponente: ");
        if (exponente < 0) 
            {
             console.log(" *** ERROR EL EXPONENTE DEBER SER MAYOR O IGUAL A 0(CERO) ***");
            } else {
                    calculo = potencia(base,exponente);
                    DibujarGuiones(40);
                    DibujarGuiones(40,`El resultado de ${base} a la ${exponente} es: ${calculo}`);
                    DibujarGuiones(40,);
                   }

        }



  

