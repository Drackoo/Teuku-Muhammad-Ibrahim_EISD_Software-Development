
function decoder(teks){
   return hasil = [...teks].map(char =>{
        const lower = char.toLowerCase();
        if (char === " ") return " ";
        if (!/[a-z]/.test(lower)) return char; 
        const kode = lower.charCodeAt() - 97;
        const geser = (kode - 5 + 26) % 26; 
        return String.fromCharCode(geser + 97); 
    } ).join("")

}
console.log(decoder('xfqfr bfmdz')); 
console.log(decoder('gjxtp lzj rfz ifkyfw jxi snm ')); 
console.log(decoder('gwt, gjxtp qz rfz rfpfs in bfwlty lfp?')); 
console.log(decoder('fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz')); 
console.log(decoder('dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu')); 
