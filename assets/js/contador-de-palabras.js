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
  text = text.replace(/[ ]+/g," "); text = text.replace(/^ /,"");
  text = text.replace("\n\n", "\n");
  textArea.value = text;
  console.log(text);
  console.log(text.split(" ") == "");
  console.log(text.split(/\n/g));
  if ( text.split(" ") == "" || text.split(".") == "" || text.split(/\n/g) == "" ) {
      countWords.textContent = 0;
      countOra.textContent = 0;
      countPa.textContent = 0;
  } else {
      countWords.textContent = (text.split(" ")).length;
      countOra.textContent = ((text.split(".")).length) - 1;
      countPa.textContent = ((text.split(/\n/g)).length) - 1;
  }
};
const loadEvents = () => textArea.addEventListener('keyup', counter);

loadEvents();

















  // console.log(countOra)
  // console.log(text.split(" "));
  // console.log(text.split(/\n/g));
  // console.log("TEST", ((text.split(/\n/g)).length) - 1)
  // console.log(text)
	//Reemplazamos los espacios seguidos por uno solo
	// text = text.replace(/[ ]+/g," ");
	//Quitarmos los espacios del principio y del final
	
  //Troceamos el texto por los espacios
  // console.log(texArea);

// countWords();