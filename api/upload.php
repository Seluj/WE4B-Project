<?php

header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include_once("databaseFunctions.php");
$postData = file_get_contents("php://input");
echo json_encode($postData);

$image = securizeFile_ForSQL($_FILES, 'file', 'img', "../");

if (!$image) {

    echo json_encode("erreur");
} else {
    echo json_encode($image);
    http_response_code(430);
}
