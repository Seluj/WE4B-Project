<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0) ? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;

if (!$id) {
  http_response_code(400);
  exit(); // Exit the script to prevent further execution
}

$sql = "SELECT * FROM `restaurants` WHERE `id` = '{$id}'";


if ($result = mysqli_query($conn, $sql)) {
  $i = 0;
  while ($row = mysqli_fetch_assoc($result)) {
    $restaurants['id'] = $row['id'];
    $restaurants['nom'] = $row['nom'];
    $restaurants['adresse'] = $row['adresse'];
    $restaurants['image'] = $row['image'];
    $restaurants['description'] = $row['description'];
    $restaurants['prix'] = $row['prix'];
    $restaurants['type'] = $row['type'];
    $restaurants['date_edit'] = $row['date_edit'];
    $restaurants['user_id'] = $row['user_id'];
    $restaurants['message'] = "Restaurant trouvé";
    $i++;
  }
  if ($i == 0) {
    $utilisateurs['message'] = "Aucun restaurant trouvé";
  }
  echo json_encode($restaurants);

} else {
  http_response_code(404);
}


/*
if ($result && mysqli_num_rows($result) > 0) {




  $row = mysqli_fetch_assoc($result);
  echo json_encode(['data' => $row]);
} else {
  http_response_code(404);
}
*/
