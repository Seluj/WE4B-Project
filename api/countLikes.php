<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$id = ($_GET['id_restaurant'] !== null && (int)$_GET['id_restaurant'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['id_restaurant']) : false;

if (!$id) {
  http_response_code(400);
  exit(); // Exit the script to prevent further execution
}

$sql = "SELECT count(id) FROM `likes` WHERE `restau_id` = '{$id}'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  echo json_encode($row);
} else {
  http_response_code(404);
}
