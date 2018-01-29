<?php
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];

    switch($action) {
        case 'folder' :
        folder();
        break;
        case 'folderSuivant' :
        folderSuivant();
        break;
    }
}

function folder(){

    if(isset($_POST['chemin']) && !empty($_POST['chemin'])) {
        $chemin = $_POST['chemin'];
        echo $chemin;
    }

    if(isset($_POST['cheminSuite']) && !empty($_POST['cheminSuite'])) {
        $chemin = $chemin."/". $_POST['cheminSuite'];
        echo $chemin;
    }

    $list = scandir($chemin);
    $max = sizeof($list);
    $li = "<li class=\"list-group-item d-flex align-items-center\"" ;
    $iconFile = "<i class=\"fas fa-file col-2\"></i>";
    $iconFolder = "<i class=\"far fa-folder col-2\"></i>";
    $id = "id=\"";

    for ($i=0; $i < $max; $i++) {
        if(strpos($list[$i],".") == true){
            $idLi = substr($list[$i], 0, strpos($list[$i], "."));
            print $li . $id .$idLi. "\">". $iconFile . $list[$i] . "</li>";
        }
        else{
            print $li . $id. $list[$i]. "\">". $iconFolder  .$list[$i] . "</li>";
        }
    }
  }

  function folderSuivant(){

    $list = scandir("/home/laetitia");
    $max = sizeof($list);
    $li = "<li class=\"list-group-item d-flex align-items-center\">" ;
    $iconFile = "<i class=\"fas fa-file col-2\"></i>";
    $iconFolder = "<i class=\"far fa-folder col-2\"></i>";

    for ($i=0; $i < $max; $i++) {
        if(strpos($list[$i],".") == true){
            print $li .  $iconFile . $list[$i] . "</li>";
        }
        else{
            print $li . $iconFolder  .$list[$i] . "</li>";
        }
    }
  }
?>
