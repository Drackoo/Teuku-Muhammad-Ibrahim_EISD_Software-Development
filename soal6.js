const agk = {
  tipe: "makanan",
  harga: 15000
};
const app = {
  tipe: "makanan",
  harga: 13000
};  
const ayambakar = {
  tipe: "makanan",
  harga: 20000
};
const esteh = {
  tipe: "minuman",
  harga: 5000
};
const esjeruk = {
  tipe: "minuman",
  harga: 7000
};


function total_pesanan(pesanan) {
    let total = 0;
    for (const item of pesanan) {
      const pajak = item.tipe === "makanan" ? 0.05 : 0.03;
      total += item.harga + (item.harga * pajak);
    }
    total += total * 0.15;
    return total;
}



let pesanan_rehan = [ayambakar,ayambakar,esteh]
let pesanan_amba = [app, esteh, esteh, esteh]
let pesanan_faiz = [agk, app, ayambakar, esteh, esjeruk]

console.log(total_pesanan(pesanan_rehan))
console.log(total_pesanan(pesanan_amba))
console.log(total_pesanan(pesanan_faiz))