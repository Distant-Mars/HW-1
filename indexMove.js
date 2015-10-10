var clickbool = true;
var movebool = false;
var pit = new Array();

/* ------jquery函数，大意是文件准备后执行里面的函数，一般用来初始化------*/
$(document).ready(function() {
	newGame();
});
/* ------初始化界面和一些数据------*/
function newGame() {
	for (var i = 0; i < 5; i++) {
		var temp = $("#contain"+i);
		temp.css('width', '0px');
		temp.css('height', '0px');
		temp.css('top', 140+i*110);
		temp.css('left',12);
	}
	var temp = $("#contain5");
		temp.css('width', '0px');
		temp.css('height', '0px');
		temp.css('top', 30);
		temp.css('left',12);
	for (var i = 0; i < 5; i++) {
		var ind = $("#icon"+i);
		ind.css('width', '60px');   /*   400 250   */
		ind.css('height', '28px');
		ind.css('top', 470);
		ind.css('left',980+i*80);
		ind.css('opacity', 0.6);
		pit[i] = 1;
	}
	var ind = $("#icon5");
		ind.css('width', '60px');   /*   400 250   */
		ind.css('height', '28px');
		ind.css('top', 470);
		ind.css('left',900);
		ind.css('opacity', 0.6);
		pit[5] = 1;
}
/*---------------------------------*/



/*-------点击菜单打开---------*/
function onTouch() {
	if (clickbool) {
		for (var i = 0; i < 6; i++) {
			var inin = $("#contain"+i);
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
		}
		var temp = $("#leftTool");
		temp.animate({
			width:"60px",
			height:"1000px"
		}, 400);
		clickbool = false;
		movebool = true;
	} else {
		clickbool = true;
		outTouch();
	}
}
/*------------------------*/


/*------菜单回缩------*/
function outTouch() {
	var temp = $("#leftTool");
	temp.animate({
		width:"60px",
		height:"30px"
	}, 200);
	for (var i = 0; i < 6; i++) {
			var inin = $("#contain"+i);
			inin.animate({
			width:"0px",
			height:"0px"
			}, 200);
	}
}
/*--------------------------*/


/*----分别对每个糕点图片鼠标悬停设置相应行为-----
------不太会批量设置,辛苦观看了：）------*/
function over0() {
	if (movebool) {
		var inin = $("#contain0");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon0");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
function over1() {
	if (movebool) {
		var inin = $("#contain1");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon1");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
function over2() {
	if (movebool) {
		var inin = $("#contain2");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon2");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
function over3() {
	if (movebool) {
		var inin = $("#contain3");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon3");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
function over4() {
	if (movebool) {
		var inin = $("#contain4");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon4");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
function over5() {
	if (movebool) {
		var inin = $("#contain5");
		inin.animate({
		width:"100px",
		height:"100px"
		}, 200);
		var ind = $("#icon5");
		ind.css('opacity', 1);
		ind.animate({
		width:"400px",
		height:"250px",
		top:220, left:480
		}, 400);
	}
}
/*--------------------------*/


/*-------鼠标离开的行为------*/
function out0() {
	if (movebool) {
			var inin = $("#contain0");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon0");
			ind.css('opacity', 0.6);
			if (pit[0] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:400-0*80
				}, 400);
				pit[0] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:900+0*80
				}, 400);
				pit[0] = 1;
			}
	}
}
function out1() {
	if (movebool) {
			var inin = $("#contain1");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon1");
			ind.css('opacity', 0.6);
			if (pit[1] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:400-1*80
				}, 400);
				pit[1] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:900+1*80
				}, 400);
				pit[1] = 1;
			}
	}
}
function out2() {
	if (movebool) {
			var inin = $("#contain2");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon2");
			ind.css('opacity', 0.6);
			if (pit[2] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:400-2*80
				}, 400);
				pit[2] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:900+2*80
				}, 400);
				pit[2] = 1;
			}
	}
}
function out3() {
	if (movebool) {
			var inin = $("#contain3");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon3");
			ind.css('opacity', 0.6);
			if (pit[3] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:400-3*80
				}, 400);
				pit[3] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:900+3*80
				}, 400);
				pit[3] = 1;
			}
	}
}
function out4() {
	if (movebool) {
			var inin = $("#contain4");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon4");
			ind.css('opacity', 0.6);
			if (pit[4] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:400-4*80
				}, 400);
				pit[4] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:900+4*80
				}, 400);
				pit[4] = 1;
			}
	}
}
function out5() {
	if (movebool) {
			var inin = $("#contain5");
			inin.animate({
			width:"35px",
			height:"35px"
			}, 200);
			var ind = $("#icon5");
			ind.css('opacity', 0.6);
			if (pit[5] == 1) {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:480
				}, 400);
				pit[5] = 0;
			} else {
				ind.animate({
				width:"60px",
				height:"28px",
				top:470, left:820
				}, 400);
				pit[5] = 1;
			}
	}
}

/*-------------------*/
