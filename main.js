
//input da utente
var input = prompt("Inserisci una parola:");

//funzione che verifica palindromo
function checkPalindromo(parola) {
	j = parola.length - 1;
	var check;
	for (var i = 0; i <= j ; i++) {
		if (!(parola[i] == parola [j])){
			check =  false;
			return false;
		} else {
			j--;
			check = true;
		}
	}

	return check;
}
//funzione che genera un numero random tra min e max
function generaNumero(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
//funziona che trasforma input pari e dispari utenti in true e false
function checkPariDispari(pariDispari) {
	switch (pariDispari) {
		case "pari":
			return true;
		case "dispari":
			return false;
	}
}
//funzione che controlla se la somma è pari o dispari, true se è pari
function checkPariInt() {
	 numero = numeroPc + numeroUtente;
	switch (numero%2) {
		case 0:
			return true;

		case 1:
			return false;

	}
}


console.log("La parola inserita è palindroma? (true sì)" + checkPalindromo(input));
//genero numero per il pc
var numeroPc = generaNumero(1,5);
//chiedo numero ad utente
var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5:"));
//chiedo di scegliere pari o dispari
var pariDispari = checkPariDispari(prompt("Pari o dispari?"));
//stampo numeri
console.log("Numero bot: "+numeroPc);
console.log("Numero giocatore: " + numeroUtente);
//verifico se la somma tra pc e utente sia pari o dispari
if (checkPariInt()) {
	console.log("il numero è pari");
} else {
	console.log("il numero è dispari");
}
//riporta cosa ha immesso l'utente
console.log("Hai selezionato (true pari):" + pariDispari);
//controlla se l'input utente è uguale al calcolo del pari o dispari della somma e stampa esito
if (pariDispari === checkPariInt()){
	console.log("Hai vinto!");
} else {
	console.log("Hai perso!");
}
