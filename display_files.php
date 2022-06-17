<?php
echo "ici";
$dir = "gallery/*.*";
echo $dir;
//get the list of all files with .jpg extension in the directory and safe it in an array named $images
$images = glob( $dir );
$html = "";
//extract only the name of the file without the extension and save in an array named $find
foreach( $images as $image ):
    $html .="
    <div class='gallery-img'>
    <a target='_blank' href='".$image."'>
        <img src='".$image."' width='600' height='400'>
    </a>
    </div>";
endforeach;

echo $html;
?>