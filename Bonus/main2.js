//età primo utente
const utente1 = prompt("Inserire l'età del primo utente");
const utente2 = prompt("Inserire l'età del secondo utente");

if(utente1 > utente2){
    alert("l'utente con l'età più alta è", utente1)
}
else if(utente2 > utente1){
    alert("l'utente con l'età più alta è", utente2)
}
else{
    alert("le due età sono uguali")
}

