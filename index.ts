
function fizzbuzz(nr: number): void {
    let result: string[] = [];
    if (nr % 11 === 0) {
        if(nr % 13 === 0){
            result.push("Fezz");
        }
        result.push("Bong");
        if (nr % 17 === 0) {
            result.reverse();
        }
        console.log(result.join(""));
        return
    }
    if (nr % 3 === 0)
        result.push("Fizz");

    if (nr % 5 === 0)
        result.push("Buzz");

    if (nr % 7 === 0)
        result.push("Bang");

    if (nr % 13 === 0){
        result.push("Fezz");

        let bIndex = result.findIndex(word => word.startsWith("B"));
        if (bIndex !== -1) {
            let fezzIndex = result.findIndex(word => word === "Fezz");
            result.splice(fezzIndex,1);
            result.splice(bIndex, 0, "Fezz");
        }
    }


    if(nr % 17 === 0)
        result.reverse();

    console.log(result.length > 0 ? result.join(""): nr);
}

for(let i = 0; i <= 255; i++){
    fizzbuzz(i);
}