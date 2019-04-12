<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n\n Phone: $phone \n\n Message: $message";
$recipient = "kata@22design.co.uk, $email";
$subject = "Contact Form";
//$headers = 'From: info@aequos.co.uk, Organisation: Aequos';
// $headers .= "Organization: Sender Organization\r\n";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader, $message) or die("Error!");
echo "<script> location.href='index.html#contact_section'; </script>";
exit;
?>