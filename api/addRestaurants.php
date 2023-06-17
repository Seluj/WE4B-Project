<?php

include_once("databaseFunctions.php");
$conn = connectDatabase();
$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
  $request = json_decode($postData);
  $nom = trim($request->data->nom);
  $adresse = trim($request->data->adresse);
  $image = trim($request->data->image);
  $description = trim($request->data->description);
  $prix = trim($request->data->prix);
  $user_id = trim($request->data->user_id);
  $popularite = trim($request->data->popularite);

  $sql = "INSERT INTO `restaurants` (`id`, `date_edit`, `nom`, `adresse`, `image`, `description`, `prix`, `user_id`) VALUES (null, timestamp() , '{$nom}', '{$adresse}', '{$image}', '{$description}', '{$prix}', '{$popularite}')";

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
