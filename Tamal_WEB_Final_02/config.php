<?php
$conn = new mysqli("localhost", "root", "", "Tamal_Final_web_02");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>