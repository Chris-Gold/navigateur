var chemin = '/home'
var cheminAfficher = chemin;

//Mise à jour du chemin
function majChemin(){
    var idx = cheminAfficher.lastIndexOf('/');
    //console.log (idx);
    cheminAfficher = cheminAfficher.substring(0, idx);
    //console.log (cheminAfficher);
}

//Fonction sur le clic-souris
function listClick(id){
    cheminAfficher = cheminAfficher + "/" + id;
    chemin = chemin + "/" + id;
    $('#chemin').html(chemin);//affiche chemin le span d'id chemin
    var testId = id;
    if(testId == '..' ){
        majChemin();//efface le premier "/"
        majChemin();//efface la chaine precedente
        $('#chemin').html(cheminAfficher);
        new Audio('sound/no.mp3').play();
    }
    else {
        $('#chemin').html(cheminAfficher);//affiche chemin dans span d'id chemin
        new Audio('sound/yes.mp3').play();
    }

    //Navigation dans le dossier
    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
          $('ul').html(output);
        }
    });
}

// URL Manuel

//Fonction sur le bouton search au clic
function listClick2(inputPath){
    var chemin1 = inputPath;

    $('#chemin').html(chemin1);//affiche chemin le span d'id chemin

    if(chemin1 != '' ){

        //majChemin();//efface la chaine precedente
        $('#chemin').html(chemin1);
        new Audio('sound/no.mp3').play();
    }
    else {

        $('#chemin').html(chemin1);//affiche chemin dans span d'id chemin
        new Audio('sound/yes.mp3').play();
    }

    //Navigation dans le dossier
    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: inputPath},
        type: 'post',
        success: function(output) {
            $('ul').html(output);

        }
    });
}

// Champ de saisie

function inputPath(inputPath){
    $.ajax({ url:'html/check.php',
        data: {action: 'search', chemin: chemin},
        type: 'post',
        success: function(output){
            $('ul').html(output);
        }
    })

    if( $("#ul0").children().length > 0) {
        listClick2(inputPath);
    }
    else{
        alert("Boulet!!!");
        inputPath(chemin);
        listClick(id);
}




}


    $(document).ready(function(){
        new Audio('sound/chant.mp3').play();
        $('#chemin').html(chemin);
        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: chemin},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    setInterval(function(){//permet de recliquer

                        $("li[id]").on('click', (function(){
                            var id = $(this).attr('id');
                            listClick(id);
                            BindEventHandlers();//provoque une erreur qui stope la boucle
                          }));
                        $("#search").on('click', (function(){
                            var pathInput = $('#urlLink').val();
                                if(pathInput != ''){
                                inputPath(pathInput);
                                }
/*                                if( $("#ul0").children().length > 0) {

                                inputPath(pathInput);

                                }
                                else{
                                    alert("Boulet!!!");
                                inputPath(chemin);
                                listClick(id);
                            }*/

                            BindEventHandlers();
                        }))

                    //}, 1000);

                }
            });
        });

// popup
// Get the modal
/*function popup(){
var popup = document.getElementById('popup');

    var popupImg = "images/forbidden.png";


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    forbidden();
    function forbidden(){
        popup.style.display = "block";
        popupImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        popup.style.display = "none";
    }
}
popup();
*/
