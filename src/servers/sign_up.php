<?php
/**
 * Created by IntelliJ IDEA.
 * User: pujasudip
 * Date: 12/12/18
 * Time: 5:19 PM
 */

header("Access-Control-Allow-Origin: *");

$output = $_REQUEST['controls'];

print(json_encode($output));

?>
