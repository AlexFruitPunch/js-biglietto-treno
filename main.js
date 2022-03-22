//introduzione alla pagina
alert("Benvenuto nel nostro servizio di biglietteria !");

//inserimento dati personali per il biglietto
const nome = prompt("inserisci il tuo nome");
const cognome = prompt("inserisci il tuo cognome");
const eta = prompt("Quanti anni hai ?");
const kilometri = prompt("Quanti kilometri deve percorrere ?");

//prezzo del biglietto
let sconto;
let prezzo = 0.21 * kilometri;
if(eta <= 17){
    
    sconto = (prezzo * 20)/100;
    prezzo = prezzo - sconto;
    document.getElementById("PrezzoBiglietteria").innerHTML = prezzo; 
}
else if(eta > 65){
    
    sconto = (prezzo * 40)/100;
    prezzo = prezzo - sconto;
    document.getElementById("PrezzoBiglietteria").innerHTML = prezzo; 
}
else{
    document.getElementById("PrezzoBiglietteria").innerHTML = prezzo; 
}

//dati biglietto
document.getElementById("Nome").innerHTML = nome;
document.getElementById("Cognome").innerHTML = cognome;

