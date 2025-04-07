

function cekPalindrom(kalimat){
    const clean = kalimat.toLowerCase().replace(/[^a-z]/g, '');
    const reversed = [...clean].reverse().join("");

    return clean == reversed ? "eureeka!" : "suka blyat";
}

console.log(cekPalindrom("Angsa")); // suka blyat
console.log(cekPalindrom("KataK")); // eureeka!
console.log(cekPalindrom("kasur empuk")); // suka blyat
console.log(cekPalindrom("Aku Suka Kamu")); // suka blyat
console.log(cekPalindrom("Ibu Ratna antar ubi.")); // eureeka!
