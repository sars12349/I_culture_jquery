		//使用規則:adaryBookSrc 放置 廣告圖片，adaryBookName 放置廣告台詞
		//#cimg 廣告圖片名稱 #cname廣告台詞名稱 #ca 超連結

		 $(document).ready(function(e){
		  	setInterval(ad,3000);
		 });


		var adpage=0; //設定初始值
		var adcurImgSrc,adcurBook,adcura;

		var adaryBookSrc=new Array("Exodus.png","U12.jpg","htc.jpg"); //建立陣列
		var adaryBookName=new Array("Htc Exodus","Htc U12","htc");
		var adaryaName=new Array("https://tw.yahoo.com/","https://www.google.com.tw/","https://www.facebook.com/");
		function ad(){  //定義方法
			adpage--;
			if(adpage<0){adpage=2;}
			adcurImgSrc="image/"+adaryBookSrc[adpage];
			adcurBook=adaryBookName[adpage];
			adcura=adaryaName[adpage];
			$("#cimg").attr("src",adcurImgSrc);
			$("#ca").attr("href",adcura)
			$("#cname").text(adcurBook);
		}	