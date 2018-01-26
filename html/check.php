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
    $list = scandir('/var/www/navigateur');
    $max = sizeof($list);
    //
    print_r($list[3]);
    for ($i=0; $i < $max; $i++) {
        if(strpos($list[$i],".") == true){
            print $list[$i] . "</br>";
        }
        else{
            print "<a href=" .$list[$i].">" .$list[$i]. "</a>"."</br>";
        }
    }
  }
?>
