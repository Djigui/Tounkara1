const numer = (ban,limit) => {
const numer1 = [];
let a =2;
while(numer1.length <= limit) {
if (a % ban === 0) {

    numer1.push(a);
   
} 
a++;

}
return numer1;
}
let i = 10; let ea =12; let salif =11; 
let total= "   la vita " + i + ea * salif + " amore è uno ";
console.log(numer(2,10));
console.log(total);

for(i=1;i<= 10; i++) {
console.log("ripetizioni " + i);
}