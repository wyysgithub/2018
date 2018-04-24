
/*导航滚动事件*/
$(window).scroll(function(){
	headerInit();
});

function headerInit(){
	if($(this).scrollTop()>0){
		$('body').addClass('flexed-header-on');
	}else{
		$('body').removeClass('flexed-header-on');
	}
}
headerInit();
/*导航滚动事件*/



/*首页背景图片*/
var images=["img/b1.jpg","img/b4.jpg","img/b3.jpg","img/b2.jpg"];

$(".index").backstretch(images,{
	fade:750,
	duration:2000,
	preload:1,
	start:2
});
/*点击开始*/
$(".wyy-btn").click(function(){
	window.location.href="#about"
})

/*基本信息模块*/
if($("[data-animate-effect]").length>0){
	$("[data-animate-effect]").each(function(index,el){
		
		var $this = $(this);

		var aE=$this.attr["data-animation-effect"];
		window.setTimeout(function(){
			$this.removeClass("wyy-none").addClass("wyy-have");
			$this.addClass("animated"+aE)
		},400);
	})
}

$(".download").click(function(){
		window.open('wyy-resume.pdf')
		});

/*滚动监听*/
$("body").scrollspy({
	target:"navbar-example"
})

$(".navbar-nav a").click(function(event){
	/*hash就是锚点名称*/
	var target=$(this.hash);
	/*alert(target.offset().top)*/
	$("html").animate({
		scrollTop:target.offset().top
	})
});


/*技能展示 $(".skill").offset().top*/
$(window).scroll(function(){
	var w=$(document).scrollTop();
    var s=$("#skill").offset().top-400;
    var p=$("#project-exp").offset().top;
	if(w>s&&w<p){
		$(".fill").each(function(){
		var p=$(this).attr("data-fill");
		var c=$(this).attr("data-fill-color");
		$(this).css({
		"width":p,
		"background-color":c
			});
		$(this).parent().css({
				"border":"1px solid"+c
			})
		})
	}else{
		$(".fill").each(function(){
			$(this).css({
			"width":0,
			"background-color":"#FFF"
			});
			$(this).parent().css({
				"border":"1px solid #000"
			})
		})
	}
		
})


/*项目经验*/
$(".firlter li a").click(function(){
	var attr=$(this).attr('data-isotope');
	$(".isotope-container").isotope({filter:attr});
	$(this).parent().addClass("active").siblings().removeClass("active");
	return false;
});

$(".happy").click(function(){
	window.open("//github.com/wyysgithub");
})
