<?php
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];

    switch($action) {
        case 'folder' :
        folder();
        break;
    }
}
function folder(){

    $chemin = shell_exec("pwd");
    echo $chemin;


    $list = scandir('/var/www/navigateur');
    $max = sizeof($list);
    $li = "<li class=\"list-group-item d-flex align-items-center\">" ;
    $a = "<a href=";
    $iconFile = "<i class=\"fas fa-file col-2\"></i>";
    $iconFolder = "<i class=\"far fa-folder col-2\"></i>";

    for ($i=0; $i < $max; $i++) {
        if(strpos($list[$i],".") == true){
            print $li .  $iconFile . $list[$i] . "</li>";
        }
        else{
            print $li . $iconFolder . $a .$list[$i].">" . $list[$i] . "</a>"."</li>";
        }
    }
  }
?>
