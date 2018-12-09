<?php
/**
 * Created by IntelliJ IDEA.
 * User: pujasudip
 * Date: 12/4/18
 * Time: 11:53 PM
 */

header("Access-Control-Allow-Origin: *");

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

require_once('mysqlconnect.php');

$output = [
  'success'=> false
];

if(empty($username)){
  print_r(json_encode($output));
  exit();
}
if(empty($password)){
  print_r(json_encode($output));
  exit();
}

$query = "SELECT * FROM `users` WHERE `username`='$username' && `password`='$password'";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result)>0){
  while($row = mysqli_fetch_assoc($result)){
    $output['success'] = true;
    $output['username'] = $username;
  }
}
print_r(json_encode($output));
?>
