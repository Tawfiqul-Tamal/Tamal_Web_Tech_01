<?php

include "../model/BookModel.php";

if(isset($_POST['action'])){

    $action = $_POST['action'];

    // ADD BOOK
    if($action == "add"){

        $title = $_POST['title'];
        $author = $_POST['author'];
        $category = $_POST['category'];
        $status = $_POST['status'];

        $result = insertBook($title, $author, $category, $status);

        if($result){
            echo "success";
        }else{
            echo "failed";
        }
    }

    // DELETE BOOK
    if($action == "delete"){

        $id = $_POST['id'];

        deleteBook($id);
    }

    // EDIT BOOK
    if($action == "edit"){

        $id = $_POST['id'];

        $result = getBookById($id);

        $row = mysqli_fetch_assoc($result);

        echo json_encode($row);
    }

    // UPDATE BOOK
    if($action == "update"){

        $id = $_POST['id'];
        $title = $_POST['title'];
        $author = $_POST['author'];
        $category = $_POST['category'];
        $status = $_POST['status'];

        updateBook($id, $title, $author, $category, $status);
    }
}

?>