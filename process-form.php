<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture user input
    $name = htmlspecialchars($_POST['user_name']);
    $email = htmlspecialchars($_POST['user_email']);
    $message = htmlspecialchars($_POST['user_message']);

    // Display user input
    echo "<h2>Your Input:</h2>";
    echo "<strong>Name:</strong> " . $name . "<br>";
    echo "<strong>Email:</strong> " . $email . "<br>";
    echo "<strong>Message:</strong> " . nl2br($message) . "<br>";
} else {
    echo "No data submitted.";
}
?>