
let memory = [];
let store = true;
 
function stored(value) {
    store = value;
}

function storeResult(result) {
    if (store) {
            memory.push(result);
    }
    console.log(memory)
}

function  add(a,b) {
    let result = a+b;
    storeResult(result);
    return result
}
          
function minus(a,b) {
    let result = a-b;
    storeResult(result);
    return result
} 

export {add, minus, stored };


