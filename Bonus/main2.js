//età primo utente
const utente1 = prompt("Inserire l'età del primo utente");
const utente2 = prompt("Inserire l'età del secondo utente");

if(utente1 > utente2){
    document.getElementById("EtaPiuAlta").innerHTML = "Utente 1"
}
else if(utente2 > utente1){
    document.getElementById("EtaPiuAlta").innerHTML = "Utente 2"
}
else{
    alert("le due età sono uguali")
    document.getElementById("EtaPiuAlta").innerHTML = "le due età sono uguali"
}

//gioco pari o dispari
alert("già che ci siamo, facciamo un gioco...");

let Pardisp = prompt("dimmi pari o dispari, io sceglierò l'opposto tuo, vediamo se indovini");
Pardisp = Pardisp.toLowerCase();
let casuale = Math.floor(Math.random() * 9) + 1;
let risultato = null; 

if((Pardisp == "pari") || (Pardisp == "dispari")){
    if((casuale % 2) == 0){
        risultato = "pari";
        if(risultato == Pardisp){
            document.getElementById("ParioDispari").innerHTML = "Hai indovinato, Complimenti!";
        }
        else{
            document.getElementById("ParioDispari").innerHTML = "Sta volta ho vinto io, Ritenta la prossima volta ;) ";
        }
    }
    else{
        risultato = "dispari";
        if(risultato == Pardisp){
            document.getElementById("ParioDispari").innerHTML = "Hai indovinato, Complimenti!";
        }
        else{
            document.getElementById("ParioDispari").innerHTML = "Sta volta ho vinto io, Ritenta la prossima volta ;) ";
        }
    }
}
else{
    document.getElementById("ParioDispari").innerHTML = "Puoi sceglere solo Pari o Dispari non altre parole";
}
