<?php

#https://www.youtube.com/watch?v=6QkgXcRMTq0
$Client_email = $_POST['client_email'];
$Client_name = $_POST['clent_name'];
$Subject = $_POST['email_subject'];
$Message = $_POST['description'];
$To = "krystian.osinski@education-it.pl";
$TXT = "Od: ". $Client_email . "\r\n Imię: " . $Client_name . "\r\n Treść: \n". $Message;
$Headers = "Email ze strony education-it.pl";

if($Client_email!=null){

mail($To,$Subject,$TXT,$Headers);
}


echo "<script> let confirmAction = confirm('Dziękuję za wysłanie maila! Czy wrócić do poprzedniej strony?');
    if (confirmAction) {
   history.go(-2);
        
    }


</script>"; 
//header("Location:../");
?>