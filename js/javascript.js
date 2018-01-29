var chemin = '/var/www/navigateur'

function listClick(id){
    chemin = chemin + "/" + id;
    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', chemin: chemin},
        type: 'post',
        success: function(output) {
            $('ul').html(output);
        }
    });
}


    $(document).ready(function(){

        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: chemin},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    setInterval(function(){
                        $("li[id]").click(function(){
                            var id = $(this).attr('id');
                            listClick(id);
                        }); 
                    }, 1000);          
                }
            });
        });
        

        /*$("li").click(function(){
            alert ("fbgkesdlf,gmlskrt");
            $.ajax({ url: 'html/check.php',
                 data: {action: 'folderSuivant'},
                 //type: 'post',
                 success: function(output) {
                            $('ul').html(output);
                    }
            });
        });*/


   //});


