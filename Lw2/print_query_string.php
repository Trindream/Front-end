<?php
header("Content-Type: text/plaine");
echo "Query string = \"", $_SERVER['QUERY_STRING'], "\"\n\n";
foreach($_GET as $name => $value){
    echo "$name = $value\n";
}
?>