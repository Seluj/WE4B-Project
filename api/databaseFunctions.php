<?php
//header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

function connectDatabase()
{

    $config = include('./config.php');

    global $conn;

    $conn = new mysqli($config['host'], $config['username'], $config['password'], $config['dbname']);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

function SecurizeString_ForSQL($string) {
  $string = trim($string);
  $string = stripcslashes($string);
  $string = addslashes($string);
  $string = htmlspecialchars($string);
  return $string;
}

/**
 * Fonction permettant de sécuriser un fichier et de le stocker dans le dossier voulu
 * @param array $file tableau contenant les données du fichier
 * @param string $name nom du fichier
 * @param string $type type du fichier (img, video, audio, pdf)
 * @param string $savePath chemin où le fichier doit être sauvegardé
 * @param string|null $nameFile nom du fichier si on veut le renommer (optionnel)
 * @return bool|string Retourne le nom du fichier si tout s'est bien passé, false sinon
 */
function securizeFile_ForSQL(array $file, string $name, string $type, string $savePath, string $nameFile = null): bool|string
{

  $image = false;

  try {
    // On initialise le tableau contenant les types de fichiers acceptés ou on renvoie une erreur si le type n'est pas reconnu
    if ($type == 'img') { // Si le type est une image
      $array = array(
        'jpg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
      );
    } else if ($type == 'video') { // Si le type est une vidéo
      $array = array(
        'mp4' => 'video/mp4',
        'avi' => 'video/avi',
        'mov' => 'video/mov',
      );
    } else if ($type == 'audio') { // Si le type est un audio
      $array = array(
        'mp3' => 'audio/mp3',
        'wav' => 'audio/wav',
        'ogg' => 'audio/ogg',
      );
    } else if ($type == "pdf") { // Si le type est un pdf
      $array = array(
        'pdf' => 'application/pdf',
      );
    } else { // Si le type n'est pas reconnu
      throw new RuntimeException('Invalid file type.');
    }


    // Undefined | Multiple Files | $_FILES Corruption Attack
    // If this request falls under any of them, treat it invalid.
    if (!isset($file[$name]['error']) || is_array($file[$name]['error'])) {
      throw new RuntimeException('Invalid parameters.');
    }

    // On regarde la valeur de l'erreur et on renvoie une erreur si besoin
    switch ($file[$name]['error']) {
      case UPLOAD_ERR_OK:
        break;
      case UPLOAD_ERR_NO_FILE:
        throw new RuntimeException('No file sent.');
      case UPLOAD_ERR_INI_SIZE:
      case UPLOAD_ERR_FORM_SIZE:
        throw new RuntimeException('Exceeded filesize limit.');
      default:
        throw new RuntimeException('Unknown errors.');
    }

    // On teste la taille du fichier une seconde fois
    if ($file[$name]['size'] > 10000000) {
      throw new RuntimeException('Exceeded filesize limit.');
    }

    // On teste le type du fichier et on lui attribue une extension
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if (false === $ext = array_search($finfo->file($file[$name]['tmp_name']), $array, true)) {
      throw new RuntimeException('Invalid file format.');
    }


    // Pour éviter les doublons, on renomme le fichier :
    // Si le nom du fichier est renseigné, on le renomme avec ce nom
    // Sinon, on le renomme avec le sha1 du fichier
    if ($nameFile != null) {
      $savedName = sprintf($savePath.'/%s.%s', $img = $nameFile, $ext);
    } else {
      $savedName = sprintf($savePath.'/%s.%s', $img = sha1_file($file[$name]['tmp_name']), $ext);
    }

    // Enfin, on déplace le fichier dans le dossier voulu et on enregistre le nom du fichier dans la variable $image
    if (!move_uploaded_file($file[$name]['tmp_name'], $savedName)) {
      throw new RuntimeException('Failed to move uploaded file.');
    }
    $image = sprintf('/%s.%s', $img, $ext);

  } catch (RuntimeException $e) { // Si une erreur est survenue, on affiche un message d'erreur
    echo $e->getMessage();
  }
  return $image;
}
