document.addEventListener("DOMContentLoaded", function() {
    const anniversaire = { mois: 5, jour: 4 };
    
    const aujourdHui = new Date();
    const estAnniversaire = (aujourdHui.getMonth() + 1 === anniversaire.mois) && (aujourdHui.getDate() === anniversaire.jour);
    
    const message = estAnniversaire ? "Oui, c'est l'anniversaire de Pierre ! 🎉" : "Non, ce n'est pas encore son anniversaire 🤷‍♂️";
    
    document.getElementById("message").textContent = message;

    const image = document.getElementById("anniversaire-image");
    image.src = estAnniversaire ? "./images/may-the-fourth.jpg" : "./images/alice-non-anniversaire.jpg";
    image.style.display = "block"; 
});
