const multiplo= (number, limit) => {
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
console.log(multiplo(4, 200));

/*for(let i = 2; i++;) {
console.log(i)
}
*/
const nMultiplisof1 = (number1, limit1) => {
    let samori = [];
    let z=1;
    while(samori.length <= limit1) {
        if(z % number1 === 0) {
            samori.push(z)
        }
     z++;
    }
   return samori;
}
console.log(nMultiplisof1(3, 30));

//let sam = 20;
//for(let i = sam; i++;) {
    //console.log(i);
//} 
  const mamadou = (oumou, bassi) => {
 const hakanda = [];
 let m = 1;
while(hakanda.length <= bassi) {
 if(m % oumou === 0) {
     hakanda.push(m)

          }
     m++;     
      }
      return hakanda;
  }
  console.log(mamadou(2, 10));

  const persona = {
    nome: "sambana",
    cognome: "tounkara",
    interesi: ["uscire", "andare in bici", "ballare"],
via: "ormea",
civico: "22 bis",
citta: "torino",

  }
  let last  = persona.interesi.push('viaggiare')
  console.log(persona);
console.log(persona.interesi);
persona.interesi.forEach(element =>{
    console.log(element);
});

  const nazionalita = age => {
      let myAge =19;
      if (myAge == age) {
          console.log("can you go");
      } if (myAge <= age) {
          console.log("i'm very ungo"); 
}
else {
    console.log("ci siamo fino alla fine ");
}

 }         
          
 nazionalita(18);
      
  