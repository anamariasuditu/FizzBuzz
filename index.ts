function verify(nr: number): void{
    if(nr % 11 === 0){
        console.log("Bong");
        return;
    }
    let ok = 1;
    let result = "";

    if(nr % 3 === 0){
        ok = 0;
        result += "Fizz";
        if(nr % 7 === 0 && nr % 13 === 0){
            result += "FezzBang";
        }
        else if(nr % 13 === 0){
            result += "Fezz";
        }
        else if(nr % 7 === 0){
            result += "Bang";
        }
    }
    if(nr % 5 === 0 && nr % 13 === 0){
        ok = 0;
        result += "FezzBuzz";
        if(nr % 7 === 0){
            result += "Bang";
        }
    }
    else if(nr % 5 === 0){
        result += "Buzz";
        ok = 0;
    }
    if(ok === 1 && nr % 13 === 0){
        result += "Fezz";
    }

    console.log(result || nr);
}

for(let i = 0; i <= 100; i++){
    verify(i);
}