console.log('*****Elementos del DOM*****');
console.log(window.document);
console.log(document);
console.log(document.head);
/* ver el atributo href de link con el metodo getAttribute */
console.log(document.querySelectorAll(".link-menu")[1].getAttribute('href'));
/* cambiando el lenguaje del html */
document.documentElement.lang='en'
/* el mejor metdo para cambiar atributos */
document.documentElement.setAttribute('lang','es-peru')

const $linkDOM=document.querySelectorAll('.link-menu')[1]
$linkDOM.setAttribute('target','_blank')
$linkDOM.setAttribute('rel','noopener')
$linkDOM.setAttribute('href','https://www.google.com.pe')
console.log($linkDOM.hasAttribute('rel'));

const link =document.querySelectorAll('.link-menu')[0]
console.log(link.getAttribute('style'));
console.log(link.style);
console.log(link.style.color);
console.log(window.getComputedStyle(link));
console.log(getComputedStyle(link).getPropertyValue('color'));

link.style.setProperty('text-decoration','none')
link.style.setProperty('display','block')
link.style.width='50%'
link.style.textAlign='center'
link.style.border='1px solid red'
/* revisar que lo que ya habiamos impreso con getAttribute se actualiza con los estilos asi sea depues de imprimirlo */


/* custom Variables Css */

const $html=document.documentElement;
const $body=document.body;

let varFontColor=getComputedStyle($html).getPropertyValue('--colorFont');
let varBgBody=getComputedStyle($html).getPropertyValue('--BgBody');

$body.style.background=varBgBody;
$body.style.color=varFontColor;

/* law wevada es que cuando actualizamos el color de las variables desde javazcript se tiene que actualizar manualmente todos los elementos afectados */