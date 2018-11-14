
window.onload = function(){
	var first_imag = document.getElementById('first');
	var second_imag = document.getElementById('second');
	var third_imag = document.getElementById('third');
	var Carousel = document.getElementById('Carousel');
	var imgs = document.getElementById('imagesUl').getElementsByTagName('li');
	var num = 0;
	var turnleft = 0;
	var round = document.getElementById('round').getElementsByTagName('li');
	var stop_I =setInterval(function(){turnImage()},2000);
	Carousel.onmouseout=function(){stop_I = setInterval(function(){turnImage()},2000);};
	Carousel.onmouseover= function(){clearInterval(stop_I)};
	var  nike_C= document.getElementById('nike_C');
	var  margin_l= 0;
	var nike_num = 0;
	//图片轮播
	function turnImage(){
		clearImg();
		if (num<=2) {
			Rou();
			imgs[num].style.display = 'block';
			num++;
		}else{
			num = 0;
			Rou();
			imgs[num].style.display = 'block';
		}
	}

	//清楚图片
	function clearImg(){
		for (var i = 0; i <2; i++) {
			imgs[i].style.display = 'none';
		}
	}

	//圆圈轮播
	function Rou(){
		for (var i = 0.; i < round.length; i++) {
			round[i].className = '';
		}
		round[num].className = 'on';
	}

	//上一张，下一张
	document.getElementById('left').onclick = function(){left_I()};
	document.getElementById('right').onclick = function(){left_R()};

	function left_I(){
		clearImg();
		if(num==0) {
			num = 2;
			Rou();
			imgs[num].style.display = 'block';
		}else{
			num --;
			Rou();
			imgs[num].style.display = 'block';
		}
	}

	function left_R() {
		clearImg();
		if(num==2) {
			num = 0;
			Rou();
			imgs[num].style.display = 'block';
		}else{
			num ++;
			Rou();
			imgs[num].style.display = 'block';
		}
	}
	//最下层轮播图
	document.getElementById('n_left').onclick = function(){
		if (margin_l>0) {
			margin_l-=250;
			nike_C.style.marginLeft= -margin_l + 'px';
		}else{
			margin_l=1000;
			nike_C.style.marginLeft= -margin_l + 'px';
		}
	}
	document.getElementById('n_right').onclick = function(){
		if (margin_l < 1250) {
			margin_l+=250;
			nike_C.style.marginLeft= -margin_l + 'px';
		}
		else {
			margin_l=250;
			nike_C.style.marginLeft= -margin_l + 'px';
		}
	}
}
