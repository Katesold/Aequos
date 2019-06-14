<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['Name','Email'])->areRequired()->maxLength(50);
$validator->field('Email')->isEmail();
$validator->field('Message')->maxLength(6000);

$mailer = $pp->getMailer();

//Using Aamazon AWS SES SMTP account
// $mailer->IsSMTP();
$mailer->SMTPAuth   = true;
$mailer->SMTPSecure = "tls";
$mailer->Host       = "smtp.office365.com";
//$mailer->Host = localhost;
$mailer->Username   = "no-reply@aequos.co.uk";
$mailer->Password   = '$D3xprtsW@N2019!';
$mailer->Port   = 25;



$mailer->setFrom('no-reply@aequos.co.uk ', 'Test Form');

$pp->sendEmailTo(['no-reply@aequos.co.uk', 'kata@22design.co.uk', 'Andyweedon64@gmail.com', 'info@aequos.co.uk']); // ← Your email here

echo $pp->process($_POST);

//'andyweedon@btinternet.com'