<?php 
$errors = '';
$myemail = 'kuldeep.kaur@gloabalic.in';//<-----Put Your email address here.

	
	$email = $_POST['email'];
	


if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Interested in online session-Global IC";
	$email_body = '<html>
					
<body>


<h1> Online Session Email Id</h1>
  <table style="border: 1px solid #ddd;padding:20px;border-collapse: collapse;">
    <tr>
      <th  style="border: 1px solid #ddd;text-align:left;width : 50%;padding : 10px;"> Email Id : </th><td  style="border: 1px solid #ddd;text-align:left;width : 50%;padding : 10px;">'. strip_tags($email) .'</td>
    </tr>
  </table>
    
    </body>
</html>
';
	
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: ielts.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>
</body>
</html>