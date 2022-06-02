<?php
if(isset($_POST['send'])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = "New Contact Form Submission";
	$content = $_POST["content"];

	$toEmail = "erkisonodih@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-view.php";
?>