<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

$cheap = isset($_GET['cheap']) ? $_GET['cheap'] : false;
$moderate = isset($_GET['moderate']) ? $_GET['moderate'] : false;
$expensive = isset($_GET['expensive']) ? $_GET['expensive'] : false;
$adresse = isset($_GET['adresse']) ? $_GET['adresse'] : '';
$type1 = isset($_GET['type1']) ? $_GET['type1'] : false;
$type2 = isset($_GET['type2']) ? $_GET['type2'] : false;
$type3 = isset($_GET['type3']) ? $_GET['type3'] : false;

$restaurants = [];
$sql = "SELECT * FROM restaurants WHERE";

$conditions = [];

if ($cheap) {
  $conditions[] = "prix = 1";
}

if ($moderate) {
  $conditions[] = "prix = 2";
}

if ($expensive) {
  $conditions[] = "prix = 3";
}

if ($adresse !== '') {
  $conditions[] = "adresse LIKE '%{$adresse}%'";
}

if ($type1) {
  $conditions[] = "type = 1";
}

if ($type2) {
  $conditions[] = "type = 2";
}

if ($type3) {
  $conditions[] = "type = 3";
}

$sql .= implode(" AND ", $conditions);

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