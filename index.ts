function verify(nr: number): void{
    if(nr % 3 == 0 && nr % 5 != 0)
        console.log('Fizz');
    else if(nr % 5 == 0)
        console.log('Buzz');
    else if (nr % 3 == 0 && nr % 5 == 0)
        console.log('FizzBuzz');
    else console.log(nr);
}

for(let i = 0; i <= 100; i++){
    verify(i);
}