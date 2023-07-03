function calculate(){

    var num1 = parseFloat(prompt("Enter First Number"))
    var num2 = parseFloat(prompt("Enter Second Number"))

    var operator = prompt("Enter Operator, e.g., +, -, *, /")

    if(operator == "+"){

        num3 = num1 + num2

    }else if(operator == "-"){

        num3 = num1 - num2

    }else if(operator == "*"){

        num3 = num1 * num2

    }else if(operator == "/"){

        num3 = num1 / num2

    }else{

        document.write("Operator is not valid.")

    }

    document.write(`<p>The result of the calculation is: <b>${num3}</b></p>`)

    if(num3 % 2 == 0){

        document.write("The resultant is an <b>EVEN</b> number.")

    }else{

        document.write("The resultant is an <b>ODD</b> number.")

    }

}