console.log("Inizio esecuzione");
let d = new Date();
console.log(d);
document,getElementById("saluto").innerHTML=
   d.getDay();



function elabora(){
   let numero = document.getElementById(elemntid,"inNumeri").value;
   let output= document.getElementById("output");
   
       if (numero >= 0 && numero <= 255) {

          colori.push(numero);
       
          output.innerText = "Numero valido: " + numero;
           
   } else {
        output.innerText ="Numero non valido. Inserisci un valore tra 0 e 255.";
       
   }
   alert(numero);
    
  }
  function reset(){
      document.getElementById("inNumber").value = "";
  }

