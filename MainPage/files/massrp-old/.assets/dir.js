var files = <?php $out = array();
foreach (glob('../*.*') as $filename) {
    $p = pathinfo($filename);
    $n = $p['filename'] . '.' . $p['extension'];
    if ($n != 'index.html'){
        $out[] = $n;
    }
}
echo json_encode($out);?>;
