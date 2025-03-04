document.addEventListener("DOMContentLoaded", function() {
    const anniversaire = { mois: 5, jour: 4 };
    
    const aujourdHui = new Date();
    const estAnniversaire = (aujourdHui.getMonth() + 1 === anniversaire.mois) && (aujourdHui.getDate() === anniversaire.jour);
    
    const message = estAnniversaire ? "Non, ce n'est pas encore son anniversaire 🤷‍♂️" : "Oui, c'est l'anniversaire de Pierre ! 🎉";
    
    document.getElementById("message").textContent = message;

    const image = document.getElementById("anniversaire-image");
    image.src = estAnniversaire ? "./images/alice-non-anniversaire.jpg" : "./images/may-the-fourth.jpg";
    image.style.display = "block"; 
});
