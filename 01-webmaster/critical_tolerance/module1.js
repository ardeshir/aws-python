let calculator = (function(){
    
    let memory = [];
    let store = true;
    
    function storeResult(result) {
        if (store) {
            memory.push(result);
        }
        console.log(memory)
    }

   function add(a,b) {
        
        let result = a+b;
        storeResult(result);
        return result
    }
    
   function minus(a,b) {
        let result = a-b;
        storeResult(result);
        return result
    }
    
     return {
         get store(){
             return store;
         },
         set store(value) {
             store = value
         },
         add,
         minus
     };
     
}) ();  

calculator.add(1,2)
calculator.store = false
calculator.add(2,3)
