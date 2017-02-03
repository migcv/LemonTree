<?php
	$to = 'info@lemontree.pt';
	$subject = 'Mailing List';
	$message = 'Email:  ' .$_POST['email'];
	$headers = "From: site@lemontree.pt";
	if(!empty($_POST['email'])) {
		mail($to, $subject, $message, $headers);
		header("Location: sent.html");
	} else {
		echo("Error! Make sure that your email is correct.\n"."<a href='index.html'> Return </a>");
	}
?>