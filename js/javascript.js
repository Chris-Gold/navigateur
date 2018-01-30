var chemin = '/var/www/navigateur'

var cheminAfficher = chemin;

function listClick(id){

    cheminAfficher = cheminAfficher + "/" + id;
    chemin = chemin + "/" + id;
    $('#chemin').html(chemin);//affiche chemin le span d'id chemin

    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
            $('ul').html(output);

        }
    });
}

function dirname(cheminAfficher) {
      return cheminAfficher.match( '..' );
      echo (cheminAfficher.match);
 }

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
                        }));
                    }, 1000);
                }
            });
        });
