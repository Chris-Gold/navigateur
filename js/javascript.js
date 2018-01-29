var chemin = '/var/www/navigateur'

function listClick(id){
    chemin = chemin + "/" + id;
    $('#chemin').html(chemin);
    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
            $('ul').html(output);

        }
    });
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
