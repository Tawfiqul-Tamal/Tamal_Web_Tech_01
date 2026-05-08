# 📚 Library Management System

A simple and responsive **Library Management System** developed using **PHP, MySQL, AJAX, HTML, CSS, and JavaScript** following the **MVC (Model-View-Controller)** architecture.  

This project allows users to perform dynamic CRUD operations for managing library books without reloading the webpage using AJAX.

---

## 🚀 Features

- ➕ Add New Books
- 📖 View All Books
- ✏️ Update Book Information
- ❌ Delete Books
- ⚡ AJAX-Based CRUD Operations
- 🗂️ MVC Folder Structure
- 🔗 Procedural MySQL Database Connection
- 🎨 Simple and Responsive User Interface

---

## 🛠️ Technologies Used

- PHP
- MySQL
- HTML5
- CSS3
- JavaScript
- jQuery AJAX
- XAMPP

---

## 📂 Project Structure

```bash
Tamal_WEB_Final_03/

├── ajax/
│   └── bookAjax.php
│
├── controller/
│   └── BookController.php
│
├── model/
│   ├── db.php
│   └── BookModel.php
│
├── view/
│   └── style.css
│
├── js/
│   └── script.js
│
└── index.php
```

---

## 🗄️ Database Information

### Database Name

```sql
tamal_final_web_03
```

### Table Name

```sql
books
```

### SQL Query

```sql
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    category VARCHAR(100),
    status VARCHAR(50)
);
```

---

## ▶️ How to Run the Project

### Step 1: Install XAMPP

Download and install XAMPP.

### Step 2: Start Server

Start:

- Apache
- MySQL

from the XAMPP Control Panel.

### Step 3: Move Project Folder

Move the project folder into:

```bash
C:\xampp\htdocs\
```

### Step 4: Create Database

Open phpMyAdmin:

```bash
http://localhost/phpmyadmin
```

Create a database named:

```sql
tamal_final_web_03
```

Then create the `books` table using the provided SQL query.

### Step 5: Run the Project

Open browser and run:

```bash
http://localhost/Tamal_Web_Tech_01/Tamal_WEB_Final_03/
```

---

## 🔄 CRUD Operations

| Operation |     Description       |
|-----------|-----------------------|
|  Create   | Add New Book          |
|  Read     | Display All Books     |
|  Update   | Edit Book Information |
|  Delete   | Remove Book           |

---

## 🧩 MVC Architecture

### 📌 Model
Handles all database operations and functions.

### 📌 View
Handles the user interface using HTML and CSS.

### 📌 Controller
Processes user requests and communicates with the Model.

---

## ⚡ AJAX Functionality

All CRUD operations are performed asynchronously using AJAX without refreshing the webpage.

Examples:
- Add Book
- Update Book
- Delete Book

---

## 👨‍💻 Author

**Md. Tawfiqul Islam Tamal**  
Department of Computer Science and Engineering (CSE)  
American International University-Bangladesh (AIUB)

---

## 🎯 Project Purpose

This project was developed for academic learning purposes to demonstrate:

- MVC Architecture
- AJAX CRUD Operations
- PHP Backend Development
- MySQL Database Management
- Dynamic Web Application Development

---

## 📌 License

This project is developed for educational and learning purposes.
