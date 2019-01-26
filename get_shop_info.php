<?php
	require_once("dbtools.inc.php");

	$link=create_connection();
    $kind=$_POST['kind'];
	if($kind[1]=='f'){
		$sql="SELECT * FROM shop WHERE Kind='f' ORDER BY Shop_ID ASC";
	}else if($kind[1]=='c'){
		$sql="SELECT * FROM shop WHERE Kind='c' ORDER BY Shop_ID ASC";
	}	

	$result = excute_sql($link, "I_culture", $sql);

	$rows=mysqli_fetch_assoc($result);
	$myArray=array();

	do{
		$myArray[]=$rows;
	}while ($rows=mysqli_fetch_assoc($result)); 
		echo json_encode($myArray);

?>