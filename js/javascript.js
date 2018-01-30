var chemin = '/var/www/navigateur'
var cheminActu = cheminAfficher;
var cheminAfficher = chemin;


function majChemin(){
  var idx = cheminAfficher.lastIndexOf('/');
  //console.log (idx);
  cheminAfficher = cheminAfficher.substring(0, idx);
  //console.log (cheminAfficher);
}

function listClick(id){

    cheminAfficher = cheminAfficher + "/" + id;
    chemin = chemin + "/" + id;
    $('#chemin').html(chemin);//affiche chemin le span d'id chemin
    var testId = id;
    if(testId == '..' ){
      //dirname();
      //var idx = cheminAfficher.lastIndexOf('/');
      //cheminAfficher = cheminAfficher.substring(0, idx);
      majChemin();
      majChemin();
      //cheminAfficher = cheminAfficher.replace(/\/./ ,"");
      $('#chemin').html(cheminAfficher);
    }
    else {
      $('#chemin').html(cheminAfficher);//affiche chemin dans span d'id chemin
    }


    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
            $('ul').html(output);

        }
    });
}

/*function dirname(cheminAfficher) {
      return cheminAfficher.match( '..' );
      echo (cheminAfficher.match);
 }*/

    $(document).ready(function(){
        $('#chemin').html(chemin);
        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: chemin},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    setInterval(function(){

                        $("li[id]").on('click',(function(){
                            var id = $(this).attr('id');
                            listClick(id);
                            BindEventHandlers();
                            //data : {action :'maj'}
                          }));
                    }, 1000);
                }
            });
        });
