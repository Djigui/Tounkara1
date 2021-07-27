const nMultiplisof = (number, limit) => {
    let multiplies = [];
    let i = 1;
    while(multiplies.length <= limit) {

    if(i % number === 0) {

        multiplies.push(i);
    }
    i++;
}
return multiplies;
} 
console.log(nMultiplisof(4, 200));
