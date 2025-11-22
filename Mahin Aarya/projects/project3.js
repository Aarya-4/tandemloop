    function problem3(a) {
    //  if number is equal make it odd by % `reminder after devision or module operator

        if(a%2===0) {
            a=a-1;
        }
        
        let result=[ ];
        
        for(let i=1 ;i<=2*a-1 ;i+=2){
            result.push(i);
        }
    console.log(result.join(", "));
    }
    // the function does not function by itself that's why we use this .and it is  used as function (problem3(a)) that's  why a's value is given here
    problem3 (1);
    problem3 (2);
    problem3 (3);
    problem3 (4);
    problem3 (5);
    problem3 (6);    
