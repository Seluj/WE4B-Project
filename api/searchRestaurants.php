<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$cheap = $_GET['cheap'];
$moderate = $_GET['moderate'];
$expensive = $_GET['expensive'];
$adresse = $_GET['adresse'];
$type1 = $_GET['type1'];
$type2 = $_GET['type2'];
$type3 = $_GET['type3'];

$restaurants = [];
$sql = "SELECT * FROM restaurants";

$conditions = [];

if ($cheap == 'true') {
  $conditions[] = "prix = 1";
}

if ($moderate == 'true') {
  $conditions[] = "prix = 2";
}

if ($expensive == 'true') {
  $conditions[] = "prix = 3";
}

if ($adresse !== '') {
  $conditions[] = "adresse LIKE '%{$adresse}%'";
}

if ($type1 == 'true') {
  $conditions[] = "type = 1";
}

if ($type2 == 'true') {
  $conditions[] = "type = 2";
}

if ($type3 == 'true') {
  $conditions[] = "type = 3";
}

if (!empty($conditions)) {
  $sql .= " WHERE ";
}
$sql .= implode(" OR ", $conditions);


// Check if any results are found
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
