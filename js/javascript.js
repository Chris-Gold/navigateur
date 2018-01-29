function listClick(id){
    $.ajax({ url: 'html/check.php',
        data: {action: 'folder', cheminSuite: id},
        type: 'post',
        success: function(output) {
            $('ul').html(output);
        }
    });
}


    $(document).ready(function(){

        $.ajax({ url: 'html/check.php',
                data: {action: 'folder', chemin: '/var/www/navigateur/'},
                type: 'post',
                success: function(output) {
                    $('ul').html(output);
                    $("li[id]").click(function(){
                        var id = $(this).attr('id');
                        listClick(id);
                    });                    
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


