<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Form Mailer</title>
</head>

<body>
<?php 
if(isset($_POST['submit'])) { 
$to = "legends@jw-webb.com, huittrabel@gmail.com"; 
$subject = "Form Tutorial"; 
$name_field = $_POST['name']; 
$email_field = $_POST['email']; 
$message = $_POST['message']; 
  
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message"; 
  
echo "Data has been submitted to $to!"; 
mail($to, $subject, $body);
} else { 
echo "yikes it failed!";
} 
?>

</body>
</html>