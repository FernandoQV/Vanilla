/* 
javascript es asincrono, osea que no espera a se resuelva una funcion, este sigue su camino,tiene una pilla de llamadas ,es no bloqueante,un solo hilo,mejor dicho si dentro del flujo hay un objeto que demora su procedimiento,javascript va a seguir los demas objetos del flujo y ejecutara la funcion segun la pila de llamadas
*/

/* usod ecallbacks */

const doubleEntero=(value,callback)=>{
    setTimeout(() => {
        callback(value,2*value)
    },0| 1000);
}

doubleEntero(3,(value,double)=>{
    console.log(value,double);
})

console.log('inico');