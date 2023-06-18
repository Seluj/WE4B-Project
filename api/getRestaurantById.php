<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;

if (!$id) {
  return http_response_code(400);
}

$sql = "SELECT `nom`, `adresse`, `image`, `description`, `prix`, `date_edit` FROM `restaurants` WHERE `id` = '{$id}'";

if(mysqli_query($conn, $sql)) {
  $row = mysqli_fetch_assoc(mysqli_query($conn, $sql));
  echo json_encode(['data' => $row]);
} else {
  http_response_code(404);
}

