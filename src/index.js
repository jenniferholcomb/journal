import Journal from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleJournalForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length2 = parseInt(document.querySelector('#length2').value);
  const length1 = parseInt(document.querySelector('#length1').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const journal = new Journal("A cat", "My cat is fluffy, and small.");
  const numChar = journal.numberOfCharacters();
  console.log(numChar);
  const numVowels = journal.vowels(numChar);
  console.log(numVowels);
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#journal-checker-form").addEventListener("submit", handleJournalForm);
});