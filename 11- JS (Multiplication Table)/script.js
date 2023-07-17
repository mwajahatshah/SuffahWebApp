num1 = prompt("Enter Your Table Number")
num2 = prompt("Enter the count of rows")

for(i=0; i<num2; i++){
    document.write(`${num1} x ${i+1} = ${num1*(i+1)} </br>`)
}