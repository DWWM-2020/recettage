
window.onload = function()
{
// Effet machine à écrire
    function extraire() {
        character = message.substring(I, I=I+1) ;
        if ( character == "-" &&  message.substr(I, 5) == "stop-" ) {             
            character = "<br>" ;
            I = I + 5;
        }
        auto_text.innerHTML += character;
        if ( I < message.length ) setTimeout(extraire, 100);
    }
    I = 0 ;
    message = "J'aime cuisiner pour ma Famille et mes Amis...";
    extraire();
}

