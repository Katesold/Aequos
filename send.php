<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
 require 'PHPMailer-master/PHPMailerAutoload.php';
if(!$_POST) exit;
			$mail = new PHPMailer;
			$mail->From = 'info@tfmnetworks.com';
			$mail->FromName = 'Aequos';
			
			$mail->addAddress('info@tfmnetworks.com');    
						
			$mail->WordWrap = 50;                   
			$mail->isHTML(true);                                  // Set email format to HTML

			$mail->Subject = 'Contact Form Aeqous';
			
$mail->Body= '<html>
			<body>
			Hello, you have a new message on AEQOUS Website. These are the details: <br /><br />
			

			<b>Name : </b>  '.$_POST['your_name'].'  <br />
			<b>Phone: </b>  '.$_POST['your_phone'].'  <br />		 
			<b>Email address: </b> '.$_POST['your_email'].'<br />
			<b>Message: </b> '.$_POST['your_message'].'<br />
			</body>
			</html>';



if(!$mail->send()) {

				$raspuns= "<span class='error-msg'>An error occured. Please try again later.</span>";

			} else {

				$raspuns= "<span class='success-msg'>Thank you for taking the time to complete this.</span>";

			}

$change = array('raspuns' => $raspuns);
echo json_encode($change);


?>