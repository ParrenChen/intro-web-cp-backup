<?php
  /**
   * CSE 154 AL
   * Parren Chen
   * Date: May 30, 2019
   *
   * API to serve up the ship information in the ship database.
   */
  include "common.php";

  $db = get_PDO();

  if(isset($_GET["shipType"])){
    $type = $_GET["shipType"];
      if (strcmp($type, "all") === 0) {
        header("Content-type: application/json");
        $output = fetch_all_queue($db);
        echo json_encode($output);
      } else if(strcmp($type, "destroyer") === 0
            || strcmp($type, "cruiser") === 0
            ||strcmp($type, "aircaft_carrier") === 0
            ||strcmp($type, "battleship") === 0){
        header("Content-type: application/json");
        $output = type_info($db, $type);
        echo json_encode($output);
      } else {
        header("HTTP/1.1 400 Invalid Request");
        echo "Wrong ship type entered!";
      }
  } else {
    header("HTTP/1.1 400 Invalid Request");
    echo "Missing/Wrong required type parameter!";
  }

  /**
   *  Return all of the entries currently in the ship database.
   *  @param {object} $db - the PDO object representing the db connection
   *  @return {array} of the ship table of all the information
   */
  function fetch_all_queue($db) {
    $output = null;
    try {
      $rows = $db->query("SELECT * FROM ship;");
    }
    catch (PDOException $ex) {
      error_db_message("Can not query the database.");
    }
    $output = array();
    foreach($rows as $row){
      $ship = array();
      $ship["id"] = $row["id"];
      $ship["shipName"] = $row["shipName"];
      $ship["nation"] = $row["nation"];
      $ship["tier"] = $row["tier"];
      $ship["type"] = $row["type"];
      array_push($output, $ship);
    }
    return $output;
  }

  /**
   *  Return specific types currently in the ship database.
   *  @param {object} $db - the PDO object representing the db connection
   *  @param {string} $current - the current ship type
   *  @return {array} of the ship table of all the information
   */
  function type_info($db, $type){
    try {
      $sql = "SELECT * FROM ship WHERE type = :type;";
      $stmt = $db->prepare($sql);
      $params = array("type" => $type);
      $stmt->execute($params);
    }
    catch (PDOException $ex) {
      error_db_message("Can not query the database.");
    }
    $output = array();
    foreach($stmt as $row){
      $ship = array();
      $ship["id"] = $row["id"];
      $ship["shipName"] = $row["shipName"];
      $ship["nation"] = $row["nation"];
      $ship["tier"] = $row["tier"];
      $ship["type"] = $row["type"];
      array_push($output, $ship);
    }
    return $output;
  }

?>
