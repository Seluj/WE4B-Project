<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;

if (!$id) {
  http_response_code(400);
  exit(); // Exit the script to prevent further execution
}

$sql = "SELECT * FROM `restaurants` WHERE `user_id` = '{$id}'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  echo json_encode(['data' => $row]);
} else {
  http_response_code(404);
}
