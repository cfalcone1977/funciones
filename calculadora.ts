/*Realice una calculadora que sume o reste según el pedido del usuario. 
El usuario deberá ingresar 2 números por teclado
Luego ingresará una opción: 
Si ingresa 1 los números se sumarán
Si ingresa 2 los números se restarán
Si ingresa cualquier otra tecla termina el programa
Para informar el resultado de la operación debe usar el siguiente formato (40 guiones ‘-’ ):
*/
import * as readlineSync from "readline-sync";
let num1,num2,calculo: number;
let guiones,opcion:string;

function DibujarGuiones(cantidad:number,mensaje:string="") 
{
  let cantOrig, cantletras, indice: number;
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
function operaciones(numero1:number, numero2:number,operacionTipo:string):number
{
  let resultado:number;
  resultado=0;
  switch (operacionTipo) {
    case "1":
      resultado = numero1 + numero2;   
      break;
    case "2":
      resultado = numero1 - numero2;
      break;
    case "3":
      resultado = numero1 * numero2;
      break;
    case "4":
      resultado = numero1 / numero2;
      break;

    default:
      break;
  }
  return resultado;
}
console.clear();
DibujarGuiones(40,"");
DibujarGuiones(40,"CALCULADORA");
DibujarGuiones(40,"");
num1 = readlineSync.questionFloat("Ingrese primer numero:  ");
num2 = readlineSync.questionFloat("Ingrese segundo numero: ");
opcion = readlineSync.question("Ingrese 1 para SUMAR \nIngrese 2 para RESTAR \n        ");

if (opcion == "1")             
                {
                  calculo = operaciones(num1,num2,opcion);
                  DibujarGuiones(40);
                  console.log("El resultado de la operacion es: ",calculo);
                  DibujarGuiones(40);
                } else if (opcion == "2") {
                                        DibujarGuiones(40);
                                        calculo = operaciones(num1,num2,opcion);
                                        console.log("El resultado de la operacion es: ",calculo);
                                        DibujarGuiones(40);                        
                                        } else {
                                                DibujarGuiones(40,"PROGRAMA TERMINADO");                        
                                               }
/*tambien podria usar switch aqui en la parte del tipo de calculo, suma resta!*/                 

  

