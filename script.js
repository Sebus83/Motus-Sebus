let wordToFind = "Dictionnaire";
let arrayBase = wordToFind.split("");
let word = document.getElementById("word").value;
let arrayWord = word.split("");
let wellPlaced = [];
let notInWord = [];
let missplaced = [];
let result = {};

function firstLetter() {
  document.getElementById("word").value = arrayBase[0];
}
firstLetter();

function numbersOfLetters() {
  document.getElementById("letters").innerHTML = "Le nombre de lettre est : " + arrayBase.length;
}
numbersOfLetters();



function tryWord(word, wordToFind) {
  // Réinitialisation des tableaux
  
  wellPlaced = [];
  missplaced = [];
  notInWord = [];
  wordToFind = "Dictionnaire";
  let arrayWordToFind = wordToFind.split("")

  // afficher de la longueur
  document.getElementById("letters").innerHTML = arrayWordToFind.length;
  

  // Afficher la première lettre
  document.getElementById("word").value = arrayWordToFind[0];

  // Conversion en minuscules
  word = word.toLowerCase();
  wordToFind = wordToFind.toLowerCase();



  // Appel des différentes fonctions de vérification
  checkWin(word, wordToFind);
  checkWellPlaced(word, wordToFind);
  checkMissPlaced(word, wordToFind);
  checkNotInWord(word, wordToFind);

  // Mise à jour de l'affichage
  updateDisplay();
  
  // Retour du résultat
  return {
    wellPlaced: wellPlaced,
    missplaced: missplaced,
    notInWord: notInWord
  };
}

function checkWin(word, wordToFind) {
  if (word === wordToFind) {
    document.getElementById("win").innerText = "Vous avez gagné !";
    return true;
  }
  return false;
}

function checkWellPlaced(word, wordToFind) {
  wellPlaced = []; // Réinitialisation
  const baseArray = wordToFind.split('');
  const wordArray = word.split('');

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === baseArray[i]) {
      wellPlaced.push(wordArray[i]);
    }
  }

  return wellPlaced;
}

function checkMissPlaced(word, wordToFind) {
  missplaced = []; // Réinitialisation
  const baseArray = wordToFind.split('');
  const wordArray = word.split('');
  
  // Créer une copie modifiable de baseArray
  let remainingBase = [...baseArray];

  for (let i = 0; i < wordArray.length; i++) {
    // Si la lettre n'est pas bien placée
    if (wordArray[i] !== baseArray[i]) {
      // Chercher si la lettre existe ailleurs
      const index = remainingBase.indexOf(wordArray[i]);
      if (index !== -1) {
        missplaced.push(wordArray[i]);
        // Marquer cette lettre comme utilisée
        remainingBase[index] = null;
      }
    }
  }

  return missplaced;
}

function checkNotInWord(word, wordToFind) {
  notInWord = []; // Réinitialisation
  const baseArray = wordToFind.split('');
  const wordArray = word.split('');

  for (const char of wordArray) {
    if (!baseArray.includes(char)) {
      notInWord.push(char);
    }
  }

  return notInWord;
}

function updateDisplay() {
  document.getElementById("well").innerText = "Bien placé: " + wellPlaced.join(", ");
  document.getElementById("miss").innerText = "Mal placé: " + missplaced.join(", ");
  document.getElementById("not").innerText = "Pas dans le mot: " + notInWord.join(", ");
}

function guess() {
  // Mettre à jour word et arrayWord avant d'appeler tryWord
  word = document.getElementById("word").value.toLowerCase();
  arrayWord = word.split("");
  
  tryWord(word, wordToFind);
  
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  firstLetter()
}