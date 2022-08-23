let result = 1;
let data = 10
while (data) {  
    result *= data--;
    if (data === 1) {
        break;
    }   
}
console.log(result)