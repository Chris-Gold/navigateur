$(document).ready(function(){
    /*$(".div1").load("../navigateur/", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });

    $('.div1').fileTree({
        root: '/some/folder/',
        script: 'jqueryFileTree.asp',
        expandSpeed: 1000,
        collapseSpeed: 1000,
        multiFolder: false
    }, function(file) {
        alert(file);
    });*/


    $(document).ready(function(){
        $.ajax({ url: 'html/check.php',
                 data: {action: 'folder'},
                 type: 'post',
                 success: function(output) {
                            $('ul').html(output);
                          }
        });
    });

});
