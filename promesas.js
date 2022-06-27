// crear una promesa.
/*
const miPromesa = new Promise((resolve, reject) => {
    let estado = true;
    if (estado) {
        resolve('Todo bien');
    }else{
        reject( new Error('Todo mal'));
    }
});
*/

// ejecutar la promesa.
/*
miPromesa.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});*/
/*
const promesa = new Promise((resolve, reject) => {
    let estado = true;
    setTimeout(() => {
        if (estado) {
            resolve('Todo bien');
        }else{
            reject( new Error('Todo mal'));
        }
    }, 9000);
})

promesa.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('Finalizo');
})
*/
/*
const promesa = () => {
    setTimeout(() => {
        console.log('hola')
    }, 5000);
}

console.log(promesa());*/
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 5);
})

promesa.then(valor1 => {
    console.log(valor1);
    return valor1 *2;
}).then(valor2 => {
    console.log(valor2);
    return valor2 *2;
}).then(valor3 => {
    console.log(valor3);
    return valor3 *3;
})*/

// promise.all
/*
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Primera promesa');
})

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Segunda promesa');
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Tercera promesa');
})

let promesas = [promesa1, promesa2, promesa3];
/*
Promise.all(promesas).then(valores => {
    console.log(valores);
}, error => {
    console.log(error);
})*/
/*
Promise.race(promesas).then(valor=>{
    console.log(valor)
},error=>{
    console.log(error)
})*/

// funciones asincronas
/*
function primerProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 3000, 'Primera proceso');
    })
}

function segundoProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 5000, 'Segundo proceso');
    })
}

function tercerProceso(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 4000, 'Tercer proceso');
    })
}

async function llamarProcesos(){
    let resultado1 = await primerProceso()
    let resultado2 = await segundoProceso()
    let resultado3 = await tercerProceso()
    console.log(resultado1)
    console.log(resultado2)
    console.log(resultado3)
}

llamarProcesos();
*/

const https = require('https');


function requestJsonPlaceholder(){
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

//console.log(requestJsonPlaceholder());
//requestJsonPlaceholder()

async function hacerPeticion(){
    let result = await requestJsonPlaceholder();
    console.table(result);
    console.error()
}


hacerPeticion();
console.log(hacerPeticion())
