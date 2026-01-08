console.log("inizio esecuzione");

function updateHeaderDatetime() {
  const headerEl = document.getElementById('saluto');
  if (!headerEl) return;

  const now = new Date();
  const locale = 'it-IT';

  const weekday = now.toLocaleDateString(locale, { weekday: 'short' });
  const date = now.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  const time = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit'});

  let tz = Intl.DateTimeFormat(locale, { timeZoneName: 'short' })
    .formatToParts(now)
    .find(p => p.type === 'timeZoneName')?.value;
  if (!tz) tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  headerEl.innerText = `Buongiorno, oggi è ${weekday} ${date} — ${time} (${tz})`;
}

let colori = [];
let numeriInseriti = [];


updateHeaderDatetime();
setInterval(updateHeaderDatetime, 1000);
function verifica() {
  const input = document.getElementById("inNumber");
  const output = document.getElementById("output");

  const raw = input.value;
  const numero = Number(raw);

  if (raw === "" || !Number.isFinite(numero)) {
    output.innerText = "Numero non valido. Inserisci un numero tra 0 e 255.";
    return;
  }

  if (numero >= 0 && numero <= 255) {
    if (numeriInseriti.length < 3) {
      numeriInseriti.push(numero);
    }
    
    output.innerText = "Hai inserito il numero : " + numero + "\n\nNumeri inseriti: " + numeriInseriti.join(", ");
    
    if (numeriInseriti.length === 3) {
      const [r, g, b] = numeriInseriti;
      const titleEl = document.querySelector('#header h1');
      if (titleEl) {
        titleEl.style.color = `rgb(${r}, ${g}, ${b})`;
      }
    }
  } else {
    output.innerText = "Numero non valido. Inserisci un valore tra 0 e 255.";
  }
}

function reset() {
  const input = document.getElementById("inNumber");
  const output = document.getElementById("output");
  const titleEl = document.querySelector('#header h1');
  
  input.value = "";
  output.innerText = "";
  numeriInseriti = [];
  if (titleEl) {
    titleEl.style.color = '';
  }
}
        

