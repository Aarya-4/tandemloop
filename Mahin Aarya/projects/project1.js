class Calculator {
    
    controler(a ,b,  operation){
        this .a=a
        this .b=b
        this .operation=operation;
    }
    
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    } 
    divide(a, b) {
            return a / b;
    }       

Calculate () {
    switch (this.operation) {
        case "add":
            return this.add(this.a,this.b);
       
            case "subtract":
            return this.subtract(this.a,this.b);
       
            case "multiply":
            return this.multiply(this.a,this.b);
       
            case "divide":
            return this.divide(this.a,this.b);
      
            default:
            throw new Error("Invalid operation.");

        }
    }
}

const calc = new Calculator( );

calc.controler(10, 25, "add"); 
console.log(calc.Calculate());      


calc.controler(30, 15, "subtract");       
console.log(calc.Calculate());

calc.controler(5, 6, "multiply"); 
console.log(calc.Calculate());      

calc.controler(50, 10, "divide");       
console.log(calc.Calculate());


    
    














