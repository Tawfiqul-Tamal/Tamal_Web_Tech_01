
# User Registration & Login System using PHP & MySQL

This is a simple web application developed using PHP, MySQL, HTML, and XAMPP that allows users to register, log in, and access a protected dashboard page. The system demonstrates basic authentication and session management concepts used in web development.

Users can create an account by providing their name, email, and password. The password is securely stored in the database using hashing. After successful registration, users can log in using their email and password. PHP sessions are used to maintain user login state and protect the dashboard page from unauthorized access.

The dashboard displays a personalized welcome message with the user’s name and shows the last login time using cookies. A cookie is also used to remember the user's email for convenience during future logins. The system includes a logout feature that securely destroys the session and redirects the user to the login page.
