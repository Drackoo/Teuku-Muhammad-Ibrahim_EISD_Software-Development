

function minmaxavg(ratings){
    const maximum = Math.max(...ratings);
    const minimum = Math.min(...ratings);
    const avg = ratings.reduce((acc, val) => acc + val , 0) / ratings.length;
    return [minimum, maximum, parseFloat(avg.toFixed(2))];
}

const ratings = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]  ;
console.log(minmaxavg(ratings));