<?php
include "model/BookModel.php";
?>

<!DOCTYPE html>
<html>
<head>

    <title>Library Management System</title>

    <link rel="stylesheet" href="view/style.css">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

</head>

<body>

<h1>Library Management System</h1>

<div class="form-container">

    <input type="hidden" id="book_id">

    <input type="text" id="title" placeholder="Book Title">

    <input type="text" id="author" placeholder="Author Name">

    <input type="text" id="category" placeholder="Category">

    <select id="status">
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
    </select>

    <button id="addBtn">Add Book</button>

    <button id="updateBtn">Update Book</button>

</div>

<br>

<table border="1" width="100%" cellpadding="10">

    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Action</th>
    </tr>

    <tbody id="bookTable">

    <?php

    $books = getAllBooks();

    while($row = mysqli_fetch_assoc($books)){

    ?>

    <tr>

        <td><?php echo $row['id']; ?></td>

        <td><?php echo $row['title']; ?></td>

        <td><?php echo $row['author']; ?></td>

        <td><?php echo $row['category']; ?></td>

        <td><?php echo $row['status']; ?></td>

        <td>

            <button class="editBtn" data-id="<?php echo $row['id']; ?>">Edit</button>

            <button class="deleteBtn" data-id="<?php echo $row['id']; ?>">Delete</button>

        </td>

    </tr>

    <?php
    }
    ?>

    </tbody>

</table>

<script src="js/script.js"></script>

</body>
</html>