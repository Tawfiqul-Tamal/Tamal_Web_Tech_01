<?php
include "config.php";

if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    
    if ($conn->query($sql)) {
        echo "Registered Successfully! <a href='login.php'>Login</a>";
    } else {
        echo "Error!";
    }
}
?>

<form method="POST">
    Name: <input type="text" name="name" placeholder="Enter your full name" required><br><br>
    Email: <input type="email" name="email" placeholder="Enter your email address" required><br><br>
    Password: <input type="password" name="password" placeholder="Create a password" required><br><br>
    <button name="register">Register</button>
</form>