
const argument = process.argv.slice(2);
let pi = 3.14;
function alanHesapla(yaricap) {
    let alan = pi * yaricap * yaricap;
    console.log(alan);
}

alanHesapla(argument[0] * 1, argument[1] * 1);