<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$restau_id = ($_GET['restau_id'] !== null && (int)$_GET['restau_id'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['restau_id']) : false;
$user_id = ($_GET['user_id'] !== null && (int)$_GET['user_id'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['user_id']) : false;

if (!$restau_id AND !$user_id) {
  http_response_code(400);
  exit(); // Exit the script to prevent further execution
}

$sql = "INSERT INTO `likes` (`id`, `user_id`, `restau_id`) VALUES (null, '{$user_id}','{$restau_id}')";

if ($result = mysqli_query($conn, $sql)) {
  $row = mysqli_fetch_assoc($result);

  echo json_encode($row);

} else {
  http_response_code(404);
}
