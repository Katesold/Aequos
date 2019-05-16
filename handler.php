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
// $mailer->SMTPAuth   = true;
// $mailer->SMTPSecure = "tls";
// $mailer->Host       = "smtp.gmail.com";
// $mailer->Username   = "Katalap";
// $mailer->Password   = "Katesoldika901";
// $mailer->Port   = 587;

$mailer->setFrom('aequos.co.uk', 'Test Form');

// $pp->sendEmailTo(['kata@22design.co.uk', 'katalap@gmail.com', 'info@aequos.co.uk']);
$pp->sendEmailTo(['kata@22design.co.uk', 'shabrul.uddin@aequos.co.uk', 'info@aequos.co.uk', 'andy.weedon@aequos.co.uk']); // ← Your email here

echo $pp->process($_POST);