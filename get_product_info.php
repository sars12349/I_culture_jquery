<?php
	require_once("dbtools.inc.php");

	$link=create_connection();
    $shopid=$_POST['shopid'];

	$sql="SELECT * FROM shop_product WHERE Shop_ID=$shopid[1]";

	$result = excute_sql($link, "I_culture", $sql);

	$rows=mysqli_fetch_assoc($result);
	$myArray=array();

	do{
		$myArray[]=$rows;
	}while ($rows=mysqli_fetch_assoc($result)); 
		echo json_encode($myArray);

?>