$(document).ready(function(){

    // ADD BOOK
    $("#addBtn").click(function(){

        var title = $("#title").val();
        var author = $("#author").val();
        var category = $("#category").val();
        var status = $("#status").val();

        $.ajax({

            url: "ajax/bookAjax.php",
            type: "POST",

            data: {
                action: "add",
                title: title,
                author: author,
                category: category,
                status: status
            },

            success: function(){

                alert("Book Added Successfully");

                location.reload();
            }

        });

    });

    // DELETE BOOK
    $(".deleteBtn").click(function(){

        var id = $(this).data("id");

        $.ajax({

            url: "ajax/bookAjax.php",
            type: "POST",

            data: {
                action: "delete",
                id: id
            },

            success: function(){

                alert("Book Deleted");

                location.reload();
            }

        });

    });

    // EDIT BOOK
    $(".editBtn").click(function(){

        var id = $(this).data("id");

        $.ajax({

            url: "ajax/bookAjax.php",
            type: "POST",

            data: {
                action: "edit",
                id: id
            },

            success: function(response){

                var data = JSON.parse(response);

                $("#book_id").val(data.id);
                $("#title").val(data.title);
                $("#author").val(data.author);
                $("#category").val(data.category);
                $("#status").val(data.status);
            }

        });

    });

    // UPDATE BOOK
    $("#updateBtn").click(function(){

        var id = $("#book_id").val();

        var title = $("#title").val();
        var author = $("#author").val();
        var category = $("#category").val();
        var status = $("#status").val();

        $.ajax({

            url: "ajax/bookAjax.php",
            type: "POST",

            data: {
                action: "update",
                id: id,
                title: title,
                author: author,
                category: category,
                status: status
            },

           success: function(response){

           alert(response);

        location.reload();
}

        });

    });

});