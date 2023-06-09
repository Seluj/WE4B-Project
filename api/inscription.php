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

  //$mdp = password_hash($mdp, PASSWORD_DEFAULT);

  $sqlRequest = "SELECT * FROM `utilisateurs` WHERE `mail` = '$email'";

  $sql = "INSERT INTO `utilisateurs` (`id`, `prenom`, `nom`, `mail`, `mdp`, `restaurateur`) VALUES (null, '{$prenom}','{$nom}','{$email}','{$mdp}', '{$restaurateur}')";

  if ($result = mysqli_query($conn, $sqlRequest)) {
    $i = 0;

    while ($row = mysqli_fetch_assoc($result)) {
      $i++;
    }
    if ($i != 0) {
      echo json_encode("Email déjà utilisé");
    } else {
      if ($conn->query($sql)) {
        $data = [
          'prenom' => $prenom,
          'nom' => $nom,
          'mdp' => $mdp,
          'email' => $email,
          'restaurateur' => $restaurateur
        ];
        echo json_encode($data);
      } else {
        http_response_code(422);
      }
    }
  }
}
