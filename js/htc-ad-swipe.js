//使用規則:aryBookSrc 放置 廣告圖片，aryBookName 放置廣告台詞
		//#pimg 圖片名稱 #pname圖片介紹 #ca 超連結
		//滑動換圖程式

		var index=0; //設定初始值
		var curImgSrc,curBook,curHref;

		var aryBookSrc=new Array("Exodus.png","U12.jpg","htc.jpg"); //建立圖片陣列
		var aryBookName=new Array("Htc Exodus","Htc U12","htc");  //建立標題陣列
		var aryhrefName=new Array("https://tw.yahoo.com/","https://www.google.com.tw/","https://www.facebook.com/");
		function showprev(){  //定義方法
			index--;
			if(index<0){index=2;}
			curImgSrc="image/"+aryBookSrc[index];
			curBook=aryBookName[index];
			curHref=aryhrefName[index];
			$("#adsimg").fadeOut(800);
			$("#adsimg").attr("src",curImgSrc).fadeIn(500);
			$("#adsname").text(curBook);
			$("#adsca").attr("href",curHref);//dialog更換圖片
		}
		function shownext(){	//定義方法
			index++;
			if (index>2) {index=0;}
			curImgSrc="image/"+aryBookSrc[index]; //圖片路徑名稱
			curBook=aryBookName[index]; //圖片文字內容
			curHref=aryhrefName[index];
			$("#adsimg").fadeOut(800);
			$("#adsimg").attr("src",curImgSrc).fadeIn(500); //取代id為pimg之src的文字內容
			$("#adsname").text(curBook); //取代id為pname的文字by陣列
			$("#adsca").attr("href",curHref);//dialog更換圖片
		}


		$( document ).on( "pagecreate", "#product", function() {
		    $( document ).on( "swipeleft swiperight", "#product", function( e ) {
		        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
		            if ( e.type === "swipeleft" ) {
		                 showprev();
		            } else if ( e.type === "swiperight" ) {
		                 shownext();
		            }
		        }
		    });
		});