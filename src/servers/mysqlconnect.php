<?php
/**
 * Created by IntelliJ IDEA.
 * User: pujasudip
 * Date: 12/6/18
 * Time: 3:03 PM
 */
$conn = mysqli_connect('localhost', 'root', 'root', 'pujaThreadingCustDB', '3306');

if($conn->connect_error){
  print('Connection failed:' . $conn->connect_error);
}
