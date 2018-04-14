<?php
    $sendto  = "example@yourdomain.com";
    $subject = "Order from Milness";
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $website   = $_POST['website'];
    $message   = $_POST['message'];
    // Header
    $headers  = "From: offer@yourdomain.com" . strip_tags($usermail) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    // Body
    $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>$subject</h2>\r\n";
    $msg .= "<p><strong>Name: </strong> ".$name."</p>\r\n";
    $msg .= "<p><strong>Email: </strong> ".$email."</p>\r\n";
    $msg .= "<p><strong>Message: </strong> ".$message."</p>\r\n";
    $msg .= "</body></html>";
 
    // send
    if(@mail($sendto, $subject, $msg, $headers)){
        $_POST['hidden'] = "";
        echo "true";
    }
?>