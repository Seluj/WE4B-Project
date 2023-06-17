<?php

require 'databaseFunctions.php';
$conn = connectDatabase();

if (isset($_GET['id'])) {
  try {
    $id = $_GET['id'];
    $stmt = $conn->prepare("SELECT `nom`, `adresse`, `image`, `description`, `prix`, `date_edit` FROM `restaurants` WHERE `id` = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $data = [
      'data' => $result,
    ];

    echo json_encode($data);
  } catch (PDOException $e) {
    $data = [
      'error' => $e->getMessage(),
    ];
    echo json_encode($data);
  }
} else {
  $data = [
  'error' => 'No ID provided',
  ];
  echo json_encode($data);
}