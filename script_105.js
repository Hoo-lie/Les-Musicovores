var numCase  = 0

dataMusic.forEach(function (afficher) {
    console.log("musique :" + " " + afficher);
    document.querySelector('.liste-musiques').innerHTML += "<section>" + identif[numCase]+ "<h2>" 
    + afficher + 
    "</h2>" + '<p><div class="sum"><a href="#haut">Sommaire &#9757; </a></div></p>'  +  ImageMusiques[numCase] +"<br><br><br>"  +"<p>" + descriptionMusiques[numCase] + "</p> " + "<br><br>" + audioMusiques[numCase] + "<button class='play'>&#9205;</button><button class='stop'>&#9208;</button><br><br>" + "<p>" + LienMusiques[numCase] + "</p>" + "</section><br><br><br><br><br><br><br>";
    // créer la page à l'aide de concaténation";
    console.log(numCase);
    console.log(descriptionMusiques[numCase]);
    numCase ++; 

});

document.querySelectorAll('.stop').forEach(function(stopButton, index) {
  stopButton.addEventListener("click", function () {
      // Récupère l'audio associé et met en pause
      const audio = document.querySelectorAll('audio')[index];
      audio.pause();

      stopButton.classList.remove('.stop');
      stopButton.classList.add('.play')

  });
});


document.querySelectorAll('.play').forEach(function(playButton, index) {
  playButton.addEventListener("click", function () { 
      // on récupère l'audio associé et active audio
      const audio = document.querySelectorAll('audio')[index];
      audio.play();

      playButton.classList.remove('.play');
      playButton.classList.add('.stop');

  });
});


document.addEventListener('DOMContentLoaded', function () {
  const titreInput = document.getElementById('titre-musique');
  const urlInput = document.getElementById('urlAudio');
  const imgInput = document.getElementById('imageplus');
  const descInput = document.getElementById('desc');


// récupère info mis par user dans le formulaire
var infouser = document.getElementById('titre-musique').value

// détecte que le bouton a été relâché 
document.getElementById('titre-musique').addEventListener('keyup', function () {
  console.log(infouser)
});


  
  // Éléments de preview
  const previewTitre = document.getElementById('previewtitre');
  const previewDesc = document.getElementById('previewdesc');
  const previewAudio = document.getElementById('previewaudio');
  const previewImg = document.getElementById('previewimg');
  const previewSection = document.getElementById('preview-section');
  
  // Met à jour la preview en fonction des inputs
  titreInput.addEventListener('input', function () {
      previewTitre.innerText = titreInput.value;
  });

  descInput.addEventListener('input', function () {
      previewDesc.innerText = descInput.value;
  });

  urlInput.addEventListener('input', function () {
      const audioUrl = urlInput.value;
      previewAudio.src = audioUrl;
  });

  imgInput.addEventListener('input', function () {
    previewImg.src = imgInput.value;
});

 
  // Fonction soumission du formulaire
  document.getElementById('newmusic').addEventListener('submit', function (formu) {
      formu.preventDefault(); // Empêcher la soumission du formulaire

      // Récupérer les valeurs des champs
      const titremusique = titreInput.value;
      const urlAudio = urlInput.value;
      const imageplus = imgInput.value;
      const desc = descInput.value;
      

  
      dataMusic.push(titremusique);
      ImageMusiques.push(imageplus);
      descriptionMusiques.push(desc);
      audioMusiques.push(`<audio src="${urlAudio}" controls></audio>`);



      // crée la section de musique à afficher
      const musicSection = `
          <section>
              <h2>${titremusique}</h2> 
              ${imageplus}
              <p>${desc}</p><br><br>
              <audio src="${urlAudio}" controls></audio>
              <button class="play">&#9205;</button>
              <button class="stop">&#9208;</button><br><br>
          </section><br><br><br><br><br><br><br>
      `;
      
      // ajoute la nouvelle section à liste-musiques
      document.querySelector('.liste-musiques').innerHTML += musicSection;

      // réinitialise le formulaire après soumission
      titreInput.value = '';
      imgInput.value = '';
      urlInput.value = '';
      descInput.value = '';

      // cache la préview après avoir ajouté
      previewSection.style.display = 'none';
  });
});


// cache la preview quand on charge la page
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('maModale').style.display = 'none';
});

// Fonction pour ouvrir la modale
function ouvrirModale() {
  document.getElementById('maModale').style.display = 'block';
}

// Fonction pour fermer la modale
function fermerModale() {
  document.getElementById('maModale').style.display = 'none';
}


 // Récupérer le login du formulaire
 var login = document.getElementById('login').value;
            
 // créer l'URL de l'API avec les paramètres
 var Urlvisitee = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&?login=madissoueke&?courriel=philippe.gambette@u-pem.frmessage=Test&' + encodeURIComponent(login);

 fetch(urlVisitee).then(function(response) {
  response.json().then(function(data){
      console.log("Réponse reçue : ")
      console.log(data);
  })
})













