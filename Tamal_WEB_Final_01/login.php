<?php
session_start();


if(isset($_SESSION['username'])){
    header("Location: dashboard.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tamal Login Page</title>
</head>
<body>

<h2>Tamal Login Page</h2>

<form method="post" action="">
    Username: <input type="text" name="username" placeholder="Enter your username" required><br><br>
    Password: <input type="password" name="password" placeholder="Enter your password" required><br><br>
    <input type="submit" name="login" value="Login">
</form>

<?php
if(isset($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    if($username == "Tamal" && $password == "123"){
        
        
        $_SESSION['username'] = $username;

     
        header("Location: dashboard.php");
        exit();

    } else {
        echo "<p style='color:red;'>Invalid Username or Password</p>";
    }
}
?>

</body>
</html>