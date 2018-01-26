<!DOCTYPE html>
    <html>
        <head>
            <?php include 'includes/header.html' ?>
            <title>Nyavigateur</title>
            <script src="js/javascript.js"></script>
        </head>
        <body>
            <div class="div1 container jumbotron text-center">
                <?php $list = scandir('/var/www/navigateur'); 
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
                }?>
            </div>
            <?php include 'includes/base_js.html' ?>
        </body>
    </html>