function project4(a) {
    let result = { };

    //create values from 1 to 9 also 0 
    for (let i = 1; i <= 9; i++) {
      result[i]=0;

    }

//for number of multiples count 
for(number of a){
    for(let i=1;i<=9;i++){
     
    if( number % i===0){
            result[i]++;
        }
    }
}

return result;
}
let input=[1,2,8,9,12,46,76,82,15,20,30];
console.log(project4(input));