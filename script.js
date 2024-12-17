let wordToFind = "Dictionnaire"
let arrayBase = wordToFind.split("")
let arrayWord = word.split("");
let wellPlaced = [];
let notInWord = [];
let missplaced = [];


function firstLetter(){  
  document.getElementById("word").value = arrayBase[0];
  console.log(arrayBase[0])
}
firstLetter()

function numbersOfLetters(){
  document.getElementById("letters").innerHTML = "Nombre de lettres du mot : " + arrayBase.length
}
numbersOfLetters()

function isWellPlaced(){
  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] === arrayWord[i]) {
      wellPlaced.push(arrayWord[i]);
    }
}
return {wellPlaced: wellPlaced}
}


function isMissPlaced(){
  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] != arrayWord[i]){
      missplaced.push(arrayWord[i]);
    } 
}
return {missplaced: missplaced}
}

function notInTheWord(){
  for (const char of arrayWord) {
    if (arrayBase.includes(char) === false) {
      notInWord.push(char);
    }
  }
  return {
    notInWord : notInWord
  }
}


function tryWord(word, wordToFind) {
  // TODO: fix jeu sensible à la casse.
  if (word === wordToFind) {
    return true;
  } else {
    isWellPlaced()
    isMissPlaced()
    notInTheWord()  
}
}

function guess() {
  let word = document.getElementById("word").value;
  let result = tryWord(word, wordToFind);
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}
