// function verify(nr: number): void{
//     if(nr % 11 === 0){
//         console.log("Bong");
//         return;
//     }
//     let check13 = 1;
//     let check17 = 0;
//     let result = "";
//
//     if(nr % 3 === 0){
//         check13 = 0;
//         if(nr % 17 != 0){
//             result += "Fizz";
//         }
//         else check17 = 1;
//
//         if(nr % 7 === 0 && nr % 13 === 0){
//             if(check17 === 1){
//                 result += "BangFezzFizz";
//             }
//             else result += "FezzBang";
//         }
//         else if(nr % 13 === 0){
//             if(check17 === 1){
//                 result += "FezzFizz";
//             }
//             else result += "Fezz";
//         }
//         else if(nr % 7 === 0){
//             if(check17 === 1){
//                 result += "BangFizz";
//             }
//             result += "Bang";
//         }
//     }
//     if(nr % 5 === 0 && nr % 13 === 0){
//         check13 = 0;
//         result += "FezzBuzz";
//         if(nr % 7 === 0){
//             result += "Bang";
//         }
//     }
//     else if(nr % 5 === 0){
//         result += "Buzz";
//         check13 = 0;
//     }
//     if(check13 === 1 && nr % 13 === 0){
//         result += "Fezz";
//     }
//
//     console.log(result || nr);
// }
//


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