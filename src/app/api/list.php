<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$cars = [];
$sql = "SELECT Subject_number, Subject_name, Subject_summary,Subject_homework FROM subjects";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['Subject_number']    = $row['Subject_number'];
    $cars[$cr]['Subject_name'] = $row['Subject_name'];
    $cars[$cr]['Subject_summary'] = $row['Subject_summary'];
    $cars[$cr]['Subject_homework'] = $row['Subject_homework'];
    $cr++;
  }
    
  echo json_encode(['data'=>$cars]);
  
}
else
{
  http_response_code(404);
}