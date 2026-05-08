<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "tamal_final_web_03";

$conn = mysqli_connect($host, $user, $password, $database);

if(!$conn){
    die("Connection Failed: " . mysqli_connect_error());
}

?>