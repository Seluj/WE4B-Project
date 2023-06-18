<?php
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include_once("databaseFunctions.php");
$conn = connectDatabase();
$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
  $request = json_decode($postData);

  $id = trim($request->data->id);
  $nom = trim($request->data->nom);
  $adresse = trim($request->data->adresse);
  $image = trim($request->data->image);
  $description = trim($request->data->description);
  $prix = trim($request->data->prix);
  $popularite = trim($request->data->popularite);
  $date_edit = trim($request->data->date_edit);

  $sql = "INSERT INTO `restaurants` (`id`, `nom`, `adresse`, `image`, `description`, `prix`, `date_edit`) VALUES (null, '{$nom}','{$adresse}','{$image}','{$description}', '{$prix}', '{$date_edit}')";

  if ($conn->query($sql)) {
    $data = [
      'nom' => $nom,
      'adresse' => $adresse,
      'image' => $image,
      'description' => $description,
      'prix' => $prix,
      'date_edit' => $date_edit
    ];
    echo json_encode($data);
  } else {
    http_response_code(422);
  }
}
