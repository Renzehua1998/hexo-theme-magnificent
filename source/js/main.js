// PC 初始化函数
var PC = function() {
	var Tips = (function(){

		var $tipBox = $(".tips-box");

		return {
			show: function(){
				$tipBox.removeClass("hide");
			},
			hide: function(){
				$tipBox.addClass("hide");
			},
			init: function(){
				
			}
		}
	})();

	var resetTags = function(){
		var tags = $(".tagcloud a");
		tags.css({"font-size": "12px"});
		for(var i=0,len=tags.length; i<len; i++){
			var num = tags.eq(i).html().length % 5 +1;
			tags[i].className = "";
			tags.eq(i).addClass("color"+num);
		}
	}

	var slide = function(idx){
		var $wrap = $(".switch-wrap");
		$wrap.css({
			"transform": "translate(-"+idx*100+"%, 0 )"
		});
		$(".icon-wrap").addClass("hide");
		$(".icon-wrap").eq(idx).removeClass("hide");
	}

	var bind = function(){
		var switchBtn = $("#myonoffswitch");
		var tagcloud = $(".second-part");
		var navDiv = $(".first-part");
		switchBtn.click(function(){
			if(switchBtn.hasClass("clicked")){
				switchBtn.removeClass("clicked");
				tagcloud.removeClass("turn-left");
				navDiv.removeClass("turn-left");
			}else{
				switchBtn.addClass("clicked");
				tagcloud.addClass("turn-left");
				navDiv.addClass("turn-left");
				resetTags();
			}
		});

		var timeout;
		var isEnterBtn = false;
		var isEnterTips = false;

		$(".icon").bind("mouseenter", function(){
			isEnterBtn = true;
			Tips.show();
		}).bind("mouseleave", function(){
			isEnterBtn = false;
			setTimeout(function(){
				if(!isEnterTips){
					Tips.hide();
				}
			}, 100);
		});

		$(".tips-box").bind("mouseenter", function(){
			isEnterTips = true;
			Tips.show();
		}).bind("mouseleave", function(){
			isEnterTips = false;
			setTimeout(function(){
				if(!isEnterBtn){
					Tips.hide();
				}
			}, 100);
		});

		$(".tips-inner li").bind("click", function(){
			var idx = $(this).index();
			slide(idx);
			Tips.hide();
		});
	}

	var init = function(){
		resetTags();
		bind();
		Tips.init();
	}
	return init()
}

// mobile 初始化函数
var mobile = function(){
	var _isShow = false;
	var $tag, $aboutme, $friends;

	var ctn,radio,scaleW,idx,basicwrap;

	//第一步 -- 初始化
	var reset = function() {
		//设定窗口比率
		radio = document.body.scrollHeight/document.body.scrollWidth;
		//设定一页的宽度
		scaleW = document.body.scrollWidth;
		//设定初始的索引值
		idx = 0;
	};
	//第一步 -- 组合
	var combine = function(){
		if($tag){
			document.getElementById("js-mobile-tagcloud").innerHTML = $tag.innerHTML;
		}
		if($aboutme){
			document.getElementById("js-mobile-aboutme").innerHTML = $aboutme.innerHTML;
		}
		if($friends){
			document.getElementById("js-mobile-friends").innerHTML = $friends.innerHTML;
		}
	}
	//第三步 -- 根据数据渲染DOM
	var renderDOM = function(){
		//生成节点
		var $viewer = document.createElement("div");
		$viewer.id = "viewer";
		$viewer.className = "hide";
		$tag = document.getElementById("js-tagcloud");
		$aboutme = document.getElementById("js-aboutme");
		$friends = document.getElementById("js-friends");
		var tagStr = $tag?'<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"";
		var friendsStr = $friends?'<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"";
		var aboutmeStr = $aboutme?'<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";

		$viewer.innerHTML = '<div id="viewer-box">\
		<div class="viewer-box-l">\
			<div class="viewer-box-wrap">'+aboutmeStr+friendsStr+tagStr+'</div>\
		</div>\
		<div class="viewer-box-r"></div>\
		</div>';

		//主要图片节点
		document.getElementsByTagName("body")[0].appendChild($viewer);
		var wrap = document.getElementById("viewer-box");
		basicwrap = wrap;
		wrap.style.height = document.body.scrollHeight + 'px';
	};

	var show = function(target, idx){
		document.getElementById("viewer").className = "";
		setTimeout(function(){
			basicwrap.className = "anm-swipe";
		},0);
		_isShow = true;
		document.ontouchstart=function(e){
			if(e.target.tagName != "A"){
				return false;
			}
		}
	}

	var hide = function(){
		document.getElementById("viewer-box").className = "";
		_isShow = false;
		document.ontouchstart=function(){
			return true;
		}
	}

	//第四步 -- 绑定 DOM 事件
	var bindDOM = function(){
		var scaleW = scaleW;
		
		//滑动隐藏
		document.getElementById("viewer-box").addEventListener("webkitTransitionEnd", function(){

			if(_isShow == false){
				document.getElementById("viewer").className = "hide";
				_isShow = true;
			}else{
			}
			
		}, false);

		//点击展示和隐藏
		ctn.addEventListener("touchend", function(){
			show();
		}, false);

		var $right = document.getElementsByClassName("viewer-box-r")[0];
		var touchStartTime;
		var touchEndTime;
		$right.addEventListener("touchstart", function(){
			touchStartTime = + new Date();
		}, false);
		$right.addEventListener("touchend", function(){
			touchEndTime = + new Date();
			if(touchEndTime - touchStartTime < 300){
				hide();
			}
			touchStartTime = 0;
			touchEndTime = 0;
		}, false);

		//滚动样式
		var $overlay = $("#mobile-nav .overlay");
		var $header = $(".js-mobile-header");
		window.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
			if(scrollTop >= 69){
				$overlay.addClass("fixed");
			}else{
				$overlay.removeClass("fixed");
			}
			if(scrollTop >= 160){
				$header.removeClass("hide").addClass("fixed");
			}else{
				$header.addClass("hide").removeClass("fixed");
			}
		};
		$header[0].addEventListener("touchstart", function(){
			$('html, body').animate({scrollTop:0}, 'slow');
		}, false);
	};

	var resetTags = function(){
		var tags = $(".tagcloud a");
		tags.css({"font-size": "12px"});
		for(var i=0,len=tags.length; i<len; i++){
			var num = tags.eq(i).html().length % 5 +1;
			tags[i].className = "";
			tags.eq(i).addClass("color"+num);
		}
	}

	var init = function(){
		//构造函数需要的参数
		ctn = document.getElementsByClassName("slider-trigger")[0];
		//构造四步
		reset();
		renderDOM();
		combine();
		bindDOM();
		resetTags();
	}
	return init()
}

var isMobileInit = false;
var loadMobile = function(){
	mobile();
	isMobileInit = true;
	// require(['/js/mobile.js'], function(mobile){
	// 	mobile.init();
	// 	isMobileInit = true;
	// });
}

var isPCInit = false;
var loadPC = function(){
	PC();
	isPCInit = true;
	// require(['/js/pc.js'], function(pc){
	// 	pc.init();
	// 	isPCInit = true;
	// });
}

if (!localStorage.hasOwnProperty('content')) {  // 请求搜索资源
	window.fetch('content.json', {
		method: 'get',
	}).then((res) => {
		return res.json()
	}).then((data) => {
		// data.forEach((em) => {
		// em.isShow = true
		// })
		data = JSON.stringify(data);
		localStorage.setItem('content',data)
	}).catch((err) => {
		// window.jsonFail = true
		console.log('未安装hexo-generator-json-content模块')
	});
}

jQuery("#local-search-input").val('') // 清除搜索内容

if ((localStorage.getItem('noanimation') === '0')) {  // 全局特效变量
	$("#animation").attr('checked', 'true');
	$(".live2d-widget-container").css('display', 'inline');  // live2d显示
	$("#animation-button").attr('class','animation-off'); // 手机端checkbutton样式
	if (localStorage.getItem('bright') === '1') {
		var circlecolor={"value": ['#999']};
		var linecolor="#999";
		particlesJS0(circlecolor, linecolor);
	}else{
		var circlecolor={"value": ['#0fc', '#0ff', '#ccc', '#ffa500', '#7b5d5f', '#ff945c', '#cfb7c4']};
		var linecolor="#00bfff";
		particlesJS0(circlecolor, linecolor);
	}
} else {
	$("#live2d-widget").css('display', 'none');  // live2d隐藏
	$("#animation-button").attr('class','animation-on'); // 手机端checkbutton样式
}
function particlesJS0(circlecolor, linecolor) {
	// require(['/js/particles.js'], function(particlesJS) {
		window.particlesJS('particles-js',

		{
			"particles": {
			"number": {
				"value": 80,
				"density": {
				"enable": true,
				"value_area": 800
				}
			},
			"color": circlecolor,
			"shape": {
				"type": "circle",
				"stroke": {
				"width": 0,
				"color": "#000000"
				},
				"polygon": {
				"nb_sides": 5
				},
				"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": linecolor,
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
				}
			}
			},
			"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
				"enable": true,
				"mode": "repulse"
				},
				"onclick": {
				"enable": true,
				"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
				},
				"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
				},
				"repulse": {
				"distance": 200
				},
				"push": {
				"particles_nb": 4
				},
				"remove": {
				"particles_nb": 2
				}
			}
			},
			"retina_detect": true,
			"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
			}
		}

		);
	// })
}
var browser={
	versions:function(){
	var u = window.navigator.userAgent;
	return {
		trident: u.indexOf('Trident') > -1, //IE内核
		presto: u.indexOf('Presto') > -1, //opera内核
		webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
		iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
		iPad: u.indexOf('iPad') > -1, //是否为iPad
		webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
		weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
		};
	}()
}

$(window).bind("resize", function(){
	if(isMobileInit && isPCInit){
		$(window).unbind("resize");
		return;
	}
	var w = $(window).width();
	if(w >= 700){
		loadPC();
	}else{
		loadMobile();
	}
});

if(browser.versions.mobile === true || $(window).width() < 700){
	loadMobile();
}else{
	loadPC();
}
// 字符字母信息
console.log('\n\
_       __     __                   \n\
| |     / /__  / /________  ____ ___ \n\
| | /| / / _ \\/ / ___/ __ \\/ __ `__ \\\n\
| |/ |/ /  __/ / /__/ /_/ / / / / / /\n\
|__/|__/\\___/_/\\___/\\____/_/ /_/ /_/ \n\
 _____                   \n\
|_   _|                       ____                \n\
  | |     __ _ _ __ ___      / __ \\___  ____  ____™\n\
  | |    / _` | \'_ ` _ \\    / /_/ / _ \\/ __ \\/_  /\n\
 _| |_  | (_| | | | | | |  / _, _/  __/ / / / / /_\n\
|_____|  \\__,_|_| |_| |_| /_/ |_|\\___/_/ /_/ /___/\n\
\
')