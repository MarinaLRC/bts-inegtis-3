console.log("hello");

let nom ="Marina";
nom ="test";
console.log(nom);
let nom_bis ="test";
console.log(nom);


const age = "24"
console.log(age);

let prenom = "Marina";//string
let nombre = "24";// number
let estvrais = false;// boolean
console.log(prenom+nombre)
let test = null;//null
console.log(test);//null

let rien;
console.log(rien); //undefined

//exemple pour le object (objet) mais on peut faire pour autre 
let voiture = {
    model: "polo",
    annee: "2022",
    couleur: "rouge"
};

console.log(voiture.couleur); //affiche la couleur de la voiture
let tableau = [1, 2, 3, 4, 5];//array
console.log(tableau[0]);// affiche le premier element du tableau

let salaire ="5000";//number
console.log(salaire);//affiche le salaire

let salairebis ="5000";//string
console.log(salairebis);// affiche le salaire sous forme de string

let res = salaire + salairebis; //conversion implicite number + string = string
console.log(res); //affiche le resultat de la conversion implicite
let res2 = salaire * salairebis; // conversion implicite number * string = number (si string convertible en nombre)
console.log(res2);// affiche le resultat de la conversion implicite

// conversion explicite

let nb = prompt("saisir le 1er nb");
nb = Number(nb)
let operation = prompt("saisir l'operation (+, *, -, /)");

let nb_deux =prompt("saisir le 2eme nb");
nb_deux = Number(nb_deux)

let resBIS = nb + operation + nb_deux
console.log(res)

//les conditions si sisnon si sion if else if else

if(operation ==="+"){

    res = nb + nb_deux;
    console.log(nb + nb_deux);

}  else{
    console.log("operation inexistante");
}

// reproduire l'équivalent d'une calculatrice simple ( division, addition, soustraction, multiplication et modulo)
//les opération arithmétique
//+ ADDITION, *MULTIPLICATION, /DIVISION, %MODULO, **PUISSANCE, ++INCREMENTATION, --DECREMENTATION, -SOUSTRACTION

if(operation ==="+"){

    res = 10 + 20;
    console.log("resultat de l'addition est :" +res)

}else if(operation ==="*"){
    res = 10 * 20;
    console.log("resultat de la multiplication est :" +res)
}else if(operation ==="/"){
    res = 10 / 20;
    console.log("resultat de la division est :" +res)
}

let a = 10
let b = 10
let operationtest = "+"





//manipuler le dom a la place de params (click)
let params = new URLSearchParams(location.search);
console.log(params);
let nb1 = Number(params.get("nb1"));
console.log(nb1);

let nb2 = Number(params.get("nb2"));
console.log(nb2)

let operation = params.get("operation");
console.log(operation);

let resultat;

if(operation === "+"){

    resultat = nb1+nb2;
}

document.getElementById("resultat").textContent ="resultat :" +resultat;


