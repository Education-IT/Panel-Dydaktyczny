<?php

header('Access-Control-Allow-Origin: *');
// db credentials
define('DB_HOST', 'education-it.pl');
define('DB_USER', 'u184503022_EducationIT');
define('DB_PASS', 'Nemanaja1999');
define('DB_NAME', 'u184503022_EducationIT');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();