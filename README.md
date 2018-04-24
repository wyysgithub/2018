# 个人网页版简历

![]()

## 用到的插件、库

### .css

```
<link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/animate.css"> 
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
```

* bootstrap.min.css （主要样式依赖）

* [animate.css](https://daneden.github.io/animate.css/)  （Animate.css内置了很多典型的css3动画，兼容性好使用方便。）

```
<div class="col-md-8 col-md-offset-2 animated fadeInUp">
                        <h1 class="text-center">我是王扬扬</h1>
                        <p class="text-center">前端开发工程师/全栈开发工程师</p>
                        <center>    
                            <button type="button" class="btn btn-lg wyy-btn">
                            <span class="glyphicon glyphicon-user"></span>  开始
                        </button></center>
                    </div>
```

* [font-awesome.min.css](http://www.fontawesome.com.cn/faicons/)(一套绝佳的图标字体库和CSS框架,主要的图标依赖)

```
 <ul class="contact-link">
                            <li><a href="" > <i class="fa fa-github"></i></a></li>
                            <li><a href="" > <i class="fa fa-weibo"></i></a></li>
                            <li><a href="" > <i class="fa fa-qq"></i></a></li>
                            <li><a href="" > <i class="fa fa-wordpress"></i></a></li>
                            <li><a href="" > <i class="fa fa-facebook"></i></a></li>
                            <li><a href="" > <i class="fa fa-weixin"></i></a></li>
                        </ul>
```




### .js

```
<script src="js/vendor/modernizr-3.5.0.min.js"></script>
       <script src="js/vendor/jquery-3.2.1.min.js"></script>
       <script src="js/bootstrap.min.js"></script>
       <!-- 动态的背景图片 -->
        <script src="js/jquery-backstretch.js"></script>
        <script src="js/plugins.js"></script>
        <!-- 项目经验 子集动态筛选 -->
        <script src="js/isotope.pkgd.min.js"></script>
        <script src="js/main.js"></script>
```

* [modernizr-3.5.0.min.js](http://caibaojian.com/modernizr-js.html)  (专为HTML5和CSS3开发的功能检测类库) 

* bootstrap.min.js （bootstrap的所有js指令的集合）

* [jquery-backstretch.js](http://www.bootcdn.cn/jquery-backstretch/)  （动态设置背景图片）

```
var images=["img/b1.jpg","img/b4.jpg","img/b3.jpg","img/b2.jpg"];
$(".index").backstretch(images,{
	fade:750,
	duration:2000,
	preload:1,
	start:2
});
```

* [isotope.pkgd.min.js](https://isotope.metafizzy.co/)  （动态实现子项目筛选）

```
$(".firlter li a").click(function(){
	var attr=$(this).attr('data-isotope');
	$(".isotope-container").isotope({filter:attr});
	$(this).parent().addClass("active").siblings().removeClass("active");
	return false;
});
```

