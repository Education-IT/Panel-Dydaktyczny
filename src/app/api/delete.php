<?php

require 'connect.php';

// Extract, validate and sanitize the id.
$Subject_number = ($_GET['Subject_number'] !== null && (int)$_GET['Subject_number'] > 0)? mysqli_real_escape_string($con, (int)$_GET['Subject_number']) : false;

if(!$Subject_number)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `subjects` WHERE `Subject_number` ='{$Subject_number}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}