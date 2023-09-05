<?php
$password= $_POST["password"];
$correctPassword = "geta";
if ($password==$correctPassword)
{
echo "login succesfull";
include(geta-project.html);
}
else echo "login UNsuccesfull";
?>