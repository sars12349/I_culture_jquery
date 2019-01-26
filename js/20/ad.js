//使用規則:adaryimgsrc 放置 廣告圖片，adaryimgtitle 放置廣告台詞
//#adimg 廣告圖片名稱 #adtitle廣告台詞名稱

	 $(function(){
	 	setInterval(ad,2000);
	 });

	var adindex=0;// 目前書籍的索引
	var adImgSrc,adBook;// 目前取得的書籍圖檔名、書籍名稱
	// 書籍圖片
	var adaryImgSrc=new Array("Exodus.png","U12.jpg","htc.jpg");
	// 書名
	var adaryBook=new Array("Htc Exodus","Htc U12","htc");


	function ad(){	// 上一筆
		adindex--;
		if(adindex<0){adindex=2;}// 可循環
		adImgSrc="image/"+adaryImgSrc[adindex];// 目前取得的圖檔名稱
		adBook=adaryBook[adindex];				// 目前取得的書籍名稱
		$("#showimg").attr("src",adImgSrc);// 動態顯示圖片
		$("#showtitle").text(adBook);		// 動態顯示書籍名稱
	}