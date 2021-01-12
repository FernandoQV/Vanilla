import {data} from '../data.mjs'
const mydata=JSON.stringify(data[0])
console.log(data[0]);
console.log(mydata);
const dat=JSON.parse(mydata)
console.log(dat);

/*
 json.parse => convierte uan cadena de texto en JSON si se puede
json.stringify => convierte un objeto de javascript en u TEXTO json
 */