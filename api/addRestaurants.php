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
  $type = trim($request->data->type);
  $prix = trim($request->data->prix);
  $user_id = trim($request->data->user_id);
  $popularite = trim($request->data->popularite);

  $sql = "INSERT INTO `restaurants` (`id`, `date_edit`, `nom`, `adresse`, `image`, `description`, `prix`, `user_id`, `type`)
VALUES (null, timestamp() , '{$nom}', '{$adresse}', '{$image}', '{$description}', '{$prix}', '{$user_id}', '{$type}')";

  if ($conn->query($sql)) {

    $data = [
      'nom'           => $nom,
      'adresse'       => $adresse,
      'image'         => $image,
      'description'   => $description,
      'prix'          => $prix,
      'user_id'       => $user_id,
      'popularite'    => $popularite
    ];

    echo json_encode($data);
  } else {
    http_response_code(422);
  }
}
