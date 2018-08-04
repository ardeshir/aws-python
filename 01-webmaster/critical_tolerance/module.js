let calculator = (function(){
    
    let memory = [];
    let calc = {};
    
    function storeResult(result) {
        if (calc.store) {
            memory.push(result);
        }
        console.log(memory)
    }
    calc.store = true;
    calc.add = function(a,b) {
        
        let result = a+b;
        storeResult(result);
        return result
    };
    
    calc.minus = function(a,b) {
        let result = a-b;
        storeResult(result);
        return result
    };
    
    return calc;
     
}) ();  

calculator.add(1,2)
calculator.store = false
calculator.add(2,3)
