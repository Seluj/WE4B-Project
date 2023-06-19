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

$typeConditions = [];
if ($type1 == 'true' || $type2 == 'true' || $type3 == 'true') {
  $orConditions = [];
  if ($type1 == 'true') {
    $orConditions[] = "type = 1";
  }

  if ($type2 == 'true') {
    $orConditions[] = "type = 2";
  }

  if ($type3 == 'true') {
    $orConditions[] = "type = 3";
  }

  $typeConditions[] = "(" . implode(" OR ", $orConditions) . ")";
}

if (!empty($conditions) || !empty($typeConditions)) {
  $sql .= " WHERE ";

  if (!empty($conditions)) {
    $sql .= implode(" AND ", $conditions);
  }

  if (!empty($conditions) && !empty($typeConditions)) {
    $sql .= " AND ";
  }

  if (!empty($typeConditions)) {
    $sql .= implode(" AND ", $typeConditions);
  }
}


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
