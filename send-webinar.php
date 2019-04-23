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

			$mail->Subject = 'Register for our next webinar form Aeqous';
			
$mail->Body= '<html>
			<body>
			Hello, you have a new message on AEQOUS Website. These are the details: <br /><br />
			

			<b>First Name : </b>  '.$_POST['your_first_name'].'  <br />
			<b>Last Name : </b>  '.$_POST['your_last_name'].'  <br />
			<b>Email: </b> '.$_POST['your_email_webinar'].'<br />
			<b>Company Name : </b>  '.$_POST['your_company'].'  <br />
			<b>Company Size : </b>  '.$_POST['your_company_size'].'  <br />
			<b>Business Type : </b>  '.$_POST['your_business'].'  <br />
			<b>Company Website : </b>  '.$_POST['your_company_website'].'  <br />
			<b>Phone: </b>  '.$_POST['your_phone_webinar'].'  <br />		 
			
			
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