<?php
	function create_connection()
	{
		$link=mysqli_connect("localhost","id7769590_jason","123456")
			or die("無法建立資料連接: ".mysqli_connect_error());

		mysqli_query($link, "SET NAMES UTF8");
		
		return $link;	
	}

	function excute_sql($link,$dbname,$sql)
	{
		mysqli_select_db($link, $dbname)
			or die("開啟資料庫失敗: ".mysqli_connect_error());

		$result=mysqli_query($link,$sql);
		
		return $result;	 
	}
?>