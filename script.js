console.log("Inizio esecuzione");
function elabora(){
   let numero = document.getElementById(elemntid,"inNumeri").value;
   let output= document.getElementById("output");
   
       if (numero >= 0 && numero <= 255) {
       output.innerText = "Numero valido: " + numero;
   } else {
        output.innerText ="Numero non valido. Inserisci un valore tra 0 e 255.";
       
   }
   alert(numero);
    
  }
  function reset(){
      document.getElementById("inNumber").value = "";
  }
