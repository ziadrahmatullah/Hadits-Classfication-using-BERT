<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['Hadits']);
  $to  = htmlspecialchars($_POST['Kelas']);

  echo  $say, ' ', $to;
?>