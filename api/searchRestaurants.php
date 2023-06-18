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

// Construct the SQL query based on the search parameters
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
  $conditions[] = "adresse LIKE '%$adresse%'";
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

// Execute the query
$result = mysqli_query($conn, $sql);

// Check if any results are found
if (mysqli_num_rows($result) > 0) {
  $rows = [];

  // Fetch the results as an associative array
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  $data = [
    'data' => $rows,
  ];

   echo json_encode($data);
} else {
  $data = [
    'error' => 'No matching restaurants found.',
  ];

  echo json_encode($data);
}