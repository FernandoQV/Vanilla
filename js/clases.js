/* lectiras de las clsed dee leementos */

const $ulMenu=document.querySelector('#menu-Nav')
console.log($ulMenu);
console.log($ulMenu.className);//devuelbe todas las clases que contiene ele  elemtno
console.log($ulMenu.classList);//devuelve array con los nombres y va,ores de las clases que conetine el elemento
console.log($ulMenu.classList.contains('roate'));//devuelve si el elemento contiene o no la clase que se indica
console.log($ulMenu.classList.add('rotate90'));//agrega clase nueva al elemento,pieden ser varias a la vex solo separadas por comas
console.log($ulMenu.classList.remove('rotate'));//quita la clase indica al elemento
console.log($ulMenu.classList.toggle('rotate'));//agrega o quita la clase indicada,=>si la tiene la quita y si no la tiene la agrega
console.log($ulMenu.classList.replace('roate45','rotate90'));//reemplaza una clase porf otra

