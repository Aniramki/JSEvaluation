
class Client {
    constructor(demande, message, prenom, nom, email, photo) {
        this.demande = demande;
        this.message = message;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.photo = photo;
    }
}

let form = document.getElementById('myForm');

form.addEventListener('change', function () {

    let demande = document.getElementById('demande').value;
    let message = document.getElementById('message').value;
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let photo = document.getElementById('photo').value;
    
let client = new Client(demande, message, prenom, nom, email, photo);

    
    console.log(client);
});

function changePhoto () {
    let choixPhoto = document.getElementById('photo').value;
    console.log(choixPhoto)
    document.getElementById('img').src = choixPhoto;
}
let select = document.getElementById('photo');
select.addEventListener('change', changePhoto, false);
