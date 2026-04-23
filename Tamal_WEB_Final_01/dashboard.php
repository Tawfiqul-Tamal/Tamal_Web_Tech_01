<?php
session_start();


if(!isset($_SESSION['username'])){
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tamal Dashboard</title>
</head>
<body>

<h2>Dashboard</h2>

<?php

echo "Welcome, " . $_SESSION['username'] . "!";
?>

<br><br>

<a href="logout.php">Logout</a>

</body>
</html>