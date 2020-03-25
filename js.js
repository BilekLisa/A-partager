function verif_formulaire() {
    if (document.formulaire.nom.value == "") {
        alert("Veuillez entrer votre nom!");
        document.formulaire.nom.focus();
        return false;
    }
    if (document.formulaire.pnom.value == "") {
        alert("Veuillez entrer votre Prenom!");
        document.formulaire.pnom.focus();
        return false;
    }
    if (document.formulaire.mail.value == "") {
        alert("Veuillez mettre l'@!");
        document.formulaire.mail.focus();
        return false;
    }
    if (document.formulaire.mail.value.indexOf('@') == -1) {
        alert("Veuillez mettre l'@!");
        document.formulaire.mail.focus();
        return false;
    }

    if (document.formulaire.ntel.value == "") {
        alert("le numero doit être un nombre!");
        document.formulaire.ntel.focus();
        return false;
    }

    var chkZ = 1;

    for (i = 0; i < document.formulaire.ntel.value.length; ++i) {
        if (document.formulaire.ntel.value.charAt(i) < "0" ||
            document.formulaire.ntel.value.charAt(i) > "9") {
            chkZ = -1;
        }
        if (chkZ == -1) {
            alert("votre numero n'est pas correct veuillez mettre un nombre !!!");
            document.formulaire.ntel.focus();
            return false;
        }
    }
}