function adaDuplikat(arr) {
    const unik = new Set(arr);
    return unik.size !== arr.length;
  }

  