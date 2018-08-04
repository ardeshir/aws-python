(function(){
    
    let element = document.getElementById("calculator-results");
    
        function buttonPress (value) {
               if(value == "=") {
                    evalResult();
                    return;
                }
                if(value == "#") {
                    element.innerHTML = '';
                    return;
                }
            element.innerHTML += `${value}`;
        }
        
        function evalResult() {
            element.innerHTML = eval(element.innerHTML);
        }
    
    
    document.addEventListener("click", function(e){
        let target = e.target;
        
        if(!target.matches("button[data-value]")) {
            return;
        }
        
        buttonPress(target.getAttribute("data-value"));
        
    });
    
    return {
        buttonPress,
        evalResult
    };
     

     
})();  

// calculator();

    function Person(firstName, lastName, age) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age      = age;
          console.log(this)
    }
     
     let p = new Person("John", "Smith", 43);
     console.log(p);

 /* 
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
    };  */
    