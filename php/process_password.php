<?php
if (isset($_POST["password"])) {
    $password = $_POST["password"];
    $correctPasswordHash = password_hash("geta_verify", PASSWORD_DEFAULT);

    if (password_verify($password, $correctPasswordHash)) {
        echo "Login successful";
        // Redirect to your protected project page or provide access here.
    } else {
        echo "Login unsuccessful";
    }
} else {
    echo "Login unsuccessful";
}
?>
