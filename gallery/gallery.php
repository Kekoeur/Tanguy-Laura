<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tanguy et Laura - Galerie</title>
    <link rel="stylesheet" href="./css/style.css">
    
</head>
<body id="body">
    <section id="gallery">
        <div>
          <h3>Galerie Photo</h3>
          <a class="button-30" href="./gallery.php">Accueil</a>
        </div>
    </section>
    <section id="img">
    <?php
    $dir = "./gallery/*.*";
    //get the list of all files with .jpg extension in the directory and safe it in an array named $images
    $images = glob( $dir );

    //extract only the name of the file without the extension and save in an array named $find
    foreach( $images as $image ):
        echo "
        <div class='gallery-img'>
        <a target='_blank' href='".$image."'>
            <img src='".$image."' width='600' height='400'>
        </a>
        </div>";
    endforeach;
    ?>
    </section>
</body>
</html>