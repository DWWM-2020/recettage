// Jquery selection des colonnes au clic
$('.column')
    .on('click', selectOrMoveTopDisc);
// Jquery selection de la difficulté au clic
$('.difficulty-btn')
    .on('click', playGame); // Choix de la difficulté / debut du jeu

// MODE DARK / LIGHT
var darkEnabled = false; 
$(document).ready(function() {
        $("#dark").on("click", switchDarkMode);
        }
      );
      
      function switchDarkMode(){
        darkEnabled = !darkEnabled;
        if(darkEnabled){
          $("body").addClass("darkmode");
		  $("#switch").addClass("darkmode");
		  $("#gameBoard").addClass("darkmode");
		  $("#hanoi-header").addClass("darkgreymode");
		  $("#dark").addClass("lightmode");
		   $("#dark").text("Light Mode");
        } else {
          $("body").removeClass("darkmode");
		  $("#switch").removeClass("darkmode");
		  $("#gameBoard").removeClass("darkmode");
		  $("#hanoi-header").removeClass("darkgreymode");
		  $("#dark").removeClass("lightmode");
		  $("#dark").text("Dark Mode");
        }
      }





function selectOrMoveTopDisc() {
    var selectedColumns = $('#gameBoard').find('.column.selected'); //Selection du Disque

    var $selectedColumn = (selectedColumns.length > 0) ? $(selectedColumns.get(0)) : null; // Verifie si la colonne est vide ou pas
    var $thisColumn = $(this);
    
    if (!$selectedColumn) { 
        if($thisColumn.children('.disc:first-of-type').length < 1) {
            return;
        }
        $thisColumn.toggleClass('selected'); 
        return;
    }
    if ($selectedColumn.attr('id') === $thisColumn.attr('id')) {
        $thisColumn.toggleClass('selected');
        return;   
    }

    
    if (_validMove($selectedColumn, $thisColumn)) { // Verifie si le deplacement est valide
    	var $disc = $($selectedColumn.children('.disc:first-of-type').get(0)).detach();
    	$thisColumn.prepend($disc); // Depose le disque dans la colonne
	    $selectedColumn.removeClass('selected');
        incrementCounter(); // Augmente le nombre de mouvements
        _checkWin(); // Verifie si on a fini
    }
}
// Verifie si le mouvement est correct
function _validMove($from, $to) {
    if ($to.children('.disc').length == 0) return true;
    if ($from.children('.disc').length == 0) return false;
    var $topOfTo = $($to.children('.disc:first-of-type').get(0));
    var $topOfFrom = $($from.children('.disc:first-of-type').get(0));
    return +$topOfTo.data('layer') > +$topOfFrom.data('layer');
}
//Verification si on gagne
function _checkWin() {
    if ($('#column1').children('.disc').length == 0 && $('#column2').children('.disc').length == 0) { // si colonne1 et colonne 2 vide
        $('.column').fadeTo(1000, 0); // Occultation des colonnes
        $('#scoreboard').fadeTo(1000, 0); // Occultation du score
        $('#win').fadeTo(1000, 1).css( 'zIndex', 20); // Apparition de l'Ecran de Fin
    }
}

function playGame() {
    var layerCount = +$(this).data('layers');
    for (var i = 1; i <= layerCount; i++) { 
        $('#column1').append('<div class="disc layer' + i + '" data-layer="' + i + '"></div>');
    } // Creation des Disques en fonction de la difficulté
    $('#options').hide(function() {
		$('.column').fadeTo(1000, 1); // Apparition des colonnes et du score
        $('#scoreboard').fadeTo(1000, 1);
    });
    $('#gameBoard').data('score', 0);
    
}
// Incrementation du score en fonction des déplacements
function incrementCounter() {
    var score = $('#gameBoard').data('score') + 1;
    $('#gameBoard').data('score', score);
    $('.score-display').html(score);
}
// Rejouer
function playAgain() {
  location.reload();
}