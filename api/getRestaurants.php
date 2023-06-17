<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$restaurants = [];
$sql = "SELECT * FROM restaurants";

if ($result = mysqli_query($conn, $sql)) {
  $i = 0;
  while ($row = mysqli_fetch_assoc($result)) {
    $restaurants[$i]['id'] = $row['id'];
    $restaurants[$i]['nom'] = $row['nom'];
    $restaurants[$i]['adresse'] = $row['adresse'];
    $restaurants[$i]['image'] = $row['image'];
    $restaurants[$i]['description'] = $row['description'];
    $restaurants[$i]['prix'] = $row['prix'];
    $restaurants[$i]['date_edit'] = $row['date_edit'];
    $restaurants[$i]['user_id'] = $row['user_id'];
    $i++;
  }
  echo json_encode(['data' => $restaurants]);

} else {
  http_response_code(404);
}
