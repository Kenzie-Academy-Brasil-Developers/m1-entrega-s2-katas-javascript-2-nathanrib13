

// comece a criar a sua função add na linha abaixo

function add (add1,add2){
    return add1 + add2
    
}
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



// comece a criar a sua função multiply na linha abaixo

function multiply(mult1, mult2){
    let resultado = 0
    for(let i = 1; i<=mult2; i++){
        resultado = add(mult1,resultado)
    }
return resultado
}

 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



// comece a criar a sua função power na linha abaixo
function power(x,n){
    let resultado = 1
    for(let i = 0; i<n; i++){
        resultado = multiply(resultado,x)

    }
    return resultado
}

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');



// comece a criar a sua função factorial na linha abaixo

function factorial(n){
    let resultado = n
    for(let i = n-1; i>0; i--){
       resultado = multiply (resultado,i)
    }
    return resultado
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


