<?php

$username = $_POST["Username"];
$balance = filter_input(INPUT_POST, "balance", FILTER_VALIDATE_INT);
$password = $_POST["Password"];
$fName = $_POST["First Name"];
$email = $_POST["Email"];
$lName = $_POST["Last Name"];

var_dump($username, $balance, $password, $fName, $email, $lName);