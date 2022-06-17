<?php
$dir = "gallery/*.*";
//get the list of all files with .jpg extension in the directory and safe it in an array named $images
$files = glob( $dir );
$html = "";
//extract only the name of the file without the extension and save in an array named $find
foreach( $files as $file ):
    $fileinfo = pathinfo($file);
    switch ($fileinfo['extension']) {
        case 'jpg': case 'jpeg': case 'png': case 'gif': case 'webp': case 'svg':
            $html .="
            <div class='gallery-img'>
            <a target='_blank' href='".$file."'>
                <img src='".$file."' width='600' height='400'>
            </a>
            </div>";
            break;
        
            case 'webm' : case 'mp4' : case 'm4v' : case 'mov' : case 'qt' : case 'avi' : case 'flv' : case 'wmv' : case 'asf' : case 'mpeg' : case 'mpg' : case 'vob' : case 'mkv' : case 'asf' : case 'wmv' : case 'rm' : case 'rmvb' : case 'vob' : case 'ts' : case 'dat' :
                $html .="
                <div class='gallery-video'>
                <a target='_blank' href='".$file."'>

                    <video width='320' height='240' controls>
                        <source src='".$file."' type='video/".$fileinfo['extension']."'>
                    Your browser does not support the video tag.
                    </video>
                </a>
                </div>";
                break;

        default:
            $html .= "<p>Fichier non reconnu : ".$file."</p>";
            break;
    }
    
endforeach;

echo $html;
?>

