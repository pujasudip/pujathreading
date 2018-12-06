<?php
/**
 * Created by IntelliJ IDEA.
 * User: pujasudip
 * Date: 12/4/18
 * Time: 11:53 PM
 */

header("Access-Control-Allow-Origin: *");

$output = [
  'message' => 'hello'
];

print(json_encode($output));

?>
