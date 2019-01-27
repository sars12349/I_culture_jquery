<?php
	require_once("dbtools.inc.php");

	$link=create_connection();
	
	$sql=$_POST['msg_sql'];
	// $sql="SELECT * FROM shop_message ORDER BY Shop_ID ASC";

	$result = excute_sql($link, "I_culture", $sql);

	$rows=mysqli_fetch_assoc($result);
	$myArray=array();

	do{
		$myArray[]=$rows;
	}while ($rows=mysqli_fetch_assoc($result)); 
		echo json_encode($myArray);

?>