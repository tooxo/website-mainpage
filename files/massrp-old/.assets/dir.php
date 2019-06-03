<?php header('Content-Type: application/javascript');?>
var files = <?php $out = array();
foreach (glob('../*.*') as $filename) {
    $p = pathinfo($filename);
    $n = $p['filename'] . '.' . $p['extension'];
    $n2 = filemtime($filename);
    $n3 = filesize($filename);
    if (strpos($n, "index.html") !== false){

    }else {
        $out[] = $n;
        $out[] = $n2;
        $out[] = $n3;
    }

}
echo json_encode($out);?>;
