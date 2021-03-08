
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

//invoco funzione
console.log(checkPalindromo(input));