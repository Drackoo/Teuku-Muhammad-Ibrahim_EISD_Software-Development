function adaDuplikat(arr) {
    const unik = new Set(arr);
    return unik.size !== arr.length;
  }

  console.log(adaDuplikat([20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19]))
  console.log(adaDuplikat([1,2,3,4,5]))