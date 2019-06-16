<?php
  /**
   * CSE 154 AL
   * Parren Chen
   * common.php starter code for CP5.
   */

  /**
   * Returns a PDO object connected to the database. If a PDOException is thrown when
   * attempting to connect to the database, responds with a 503 Service Unavailable
   * error.
   * @return {PDO} connected to the database upon a succesful connection.
   */
  function get_PDO() {
    $host = "localhost";    
    $port = "8889";
    $user = "root";
    $password = "root";
    $dbname = "wowsShips";

    # Make a data source string that will be used in creating the PDO object
    $ds = "mysql:host={$host}:{$port};dbname={$dbname};charset=utf8";

    try {
      $db = new PDO($ds, $user, $password);
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $db;
    } catch (PDOException $ex) {
      header("HTTP/1.1 503 Service Unavailable");
      header("Content-Type: text/plain");
      die("Can not connect to the database. Please try again later.");
    }
  }
?>
