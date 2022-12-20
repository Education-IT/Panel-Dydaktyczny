<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if (trim((int)$request->data->Subject_number) < 1 ||trim( $request->data->Subject_name) == '' ||  trim($request->data->Subject_summary) == '' || trim($request->data->Subject_homework) == ''){
    return http_response_code(400);
  }
    
  // Sanitize.
  $Subject_number    = mysqli_real_escape_string($con, (int)$request->data->Subject_number);
  $Subject_name = mysqli_real_escape_string($con, trim($request->data->Subject_name));
  $Subject_summary = mysqli_real_escape_string($con, trim($request->data->Subject_summary));
  $Subject_homework = mysqli_real_escape_string($con, trim($request->data->Subject_homework));
  // Update.
  $sql = "UPDATE `subjects` SET `Subject_name`='$Subject_name',`Subject_summary`='$Subject_summary' ,`Subject_homework`='$Subject_homework' WHERE `Subject_number` = '{$Subject_number}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}