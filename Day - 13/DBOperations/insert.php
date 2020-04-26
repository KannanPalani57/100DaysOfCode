<?php
 $server = "localhost";
 $username = "root";
 $password = "";
 $dbName = "Test";

 $conn = mysqli_connect($server, $username, $password, $dbName);

 $sql = "INSERT INTO test1(id, name, place) values(1, 'Kannan', 'Sankarankovil')";

 if(mysqli_query($conn, $sql)){
   echo  "inserted";
 }
?>