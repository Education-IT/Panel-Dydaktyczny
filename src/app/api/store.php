<?php 
header('Access-Control-Allow-Origin: *');
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim((int)$request->data->Subject_number) === 0 || $request->data->Subject_name === "" ||  $request->data->Subject_summary === "" || $request->data->Subject_homework === "")
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $Subject_number = mysqli_real_escape_string($con, (int)$request->data->Subject_number);
  $Subject_name = mysqli_real_escape_string($con, trim($request->data->Subject_name));
  $Subject_summary = mysqli_real_escape_string($con, trim($request->data->Subject_summary));
  $Subject_homework = mysqli_real_escape_string($con, trim($request->data->Subject_homework));  

  // Store.
  $sql = "INSERT INTO `subjects`(`Subject_number`,`Subject_name`,`Subject_summary`,`Subject_homework`) VALUES ('{$Subject_number}','{$Subject_name}','{$Subject_summary}','$Subject_homework')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $subject = [
      'Subject_number' => $Subject_number,
      'Subject_name' => $Subject_name,
      'Subject_summary'    => $Subject_summary,
      'Subject_homework' => $Subject_homework
    ];
    echo json_encode(['data'=>$subject]);
  }
  else
  {
    http_response_code(422);
  }
}