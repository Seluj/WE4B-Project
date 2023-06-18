<?php
//header("Access-Control-Allow-Origin: *");
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
  $prenom = trim($request->data->prenom);
  $nom = trim($request->data->nom);
  $email = trim($request->data->email);
  $mdp = trim($request->data->mdp);
  $restaurateur = trim($request->data->restaurateur);

  $sql = "SELECT * FROM `utilisateurs` WHERE `mail` = '$email' AND `mdp` = '$mdp'";


  if ($result = mysqli_query($conn, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
      $utilisateurs['message'] = "OK";

      $utilisateurs['id'] = $row['id'];
      $utilisateurs['prenom'] = $row['prenom'];
      $utilisateurs['nom'] = $row['nom'];
      $utilisateurs['mdp'] = null;
      $utilisateurs['email'] = $row['mail'];
      $utilisateurs['restaurateur'] = $row['restaurateur'];
      $i++;
    }
    if ($i == 0) {
      $utilisateurs['message'] = "Email ou mot de passe incorrect";
    }
    echo json_encode($utilisateurs);
  } else {
    http_response_code(404);
  }

  /*
  $result = $conn->query($sql);
  if (mysqli_num_rows($result) != 0) {
    $data = $result->fetch_assoc();
    $data['mdp'] = null;
    echo json_encode($data);
  } else {
    http_response_code(422);
  }


  echo json_encode($postData);
  http_response_code(200);
*/
}
