<?php
/**
 * Created by IntelliJ IDEA.
 * User: pujasudip
 * Date: 12/10/18
 * Time: 9:54 AM
 */
require_once("mysqlconnect.php");

$output = [
  "success"=>false,
  "data"=>[]
];

$query = "SELECT * FROM `products`";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
  $output["success"] = true;
  while($row = mysqli_fetch_assoc($result)){
    $output["data"][] = $row;
  }
}

print($output);
