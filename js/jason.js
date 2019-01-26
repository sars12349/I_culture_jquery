		$(function(){
			$('#showprev').bind('click',showprev);  //設定按鈕監聽
			$('#shownext').bind('click',shownext);	//設定按鈕監聽
		});

		var index=0; //設定初始值
		var curImgSrc,curBook;

		var aryBookSrc=new Array("Exodus.png","U12.jpg","htc.jpg"); //建立陣列
		var aryBookName=new Array("Htc Exodus","Htc U12","htc");
		function showprev(){  //定義方法
			index--;
			if(index<0){index=2;}
			curImgSrc="image/"+aryBookSrc[index];
			curBook=aryBookName[index];
			$("#pimg").attr("src",curImgSrc);
			$("#pname").text(curBook);
		}
		function shownext(){	//定義方法
			index++;
			if (index>2) {index=0;}
			curImgSrc="image/"+aryBookSrc[index]; //圖片路徑名稱
			curBook=aryBookName[index]; //圖片文字內容
			$("#pimg").attr("src",curImgSrc); //取代id為pimg之src的文字內容
			$("#pname").text(curBook); //取代id為pname的文字by陣列
			$("#pimg2").attr("src",curImgSrc);//dialog更換圖片
		}

		// $(document).ready(function(e){
		// 	setInterval(showprev,3000);
		// });
