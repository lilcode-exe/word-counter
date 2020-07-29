const textArea = document.getElementById("input");
const countWords = document.getElementById("counter-words");
const countCarac = document.getElementById("counter-carac");
const countOra = document.getElementById("counter-ora");
const countPa = document.getElementById("counter-pa");
let carac;

const counter = ( e ) => {
  e.preventDefault();
  carac = textArea.textLength
  countCarac.textContent = carac;
  let text = textArea.value;
  text = text.replace(/[ ]+/g," "); 
  text = text.replace(/[.]+/g, "."); 
  text = text.replace(/^[ .,\n]/,"");
  text = text.replace(/[\n]+/g, "\n");
  // text = text.replace(/^[.]/g,""); // reducido
  // text = text.replace(/^[.]/g,"");// reducido
  textArea.value = text;
	
  if ( text.split(" ") == "" || text.split(".") == "" || text.split(/\n/g) == "" ) {
      countWords.textContent = 0;
      countOra.textContent = 0;
      countPa.textContent = 0;
      textArea.value = text;

  } else {
      countWords.textContent = (text.split(" ")).length;
      countOra.textContent = ((text.split(".")).length) - 1;
      countPa.textContent = ((text.split(/\n/g)).length) - 1;
      textArea.value = text;

  }
};

const loadEvents = () => textArea.addEventListener('keyup', counter); 

loadEvents();
