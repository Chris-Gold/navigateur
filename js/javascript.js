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

    $(document).ready(function(){
        new Audio('sound/chant.mp3').play();
        $('#chemin').html(chemin);
        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: chemin},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    setInterval(function(){//permet de recliquer

                        $("li[id]").on('click',(function(){
                            var id = $(this).attr('id');
                            listClick(id);
                            BindEventHandlers();//provoque une erreur qui stope la boucle
                          }));
                    }, 1000);
                }
            });
        });
