function verify(nr: number): void{
    if(nr % 3 == 0 && nr % 5 != 0){
        if(nr % 7 == 0)
            console.log('FizzBang');
        else
            console.log('Fizz');
    }
    else if(nr % 5 == 0 && nr % 3 != 0){
        if(nr % 7 == 0)
            console.log('BuzzBang');
        else
            console.log('Buzz');
    }
    else if (nr % 15 == 0)
        console.log('FizzBuzz');
    else if (nr % 7 == 0)
        console.log('Bang');
    else console.log(nr);
}

for(let i = 0; i <= 100; i++){
    verify(i);
}