define(["jquery","cookie"], ()=>{
	class Header{
		constructor(){
			this.init();
		}
		//初始化header
		init(){
			//加载header.html
			let _this=this;
			new Promise((resolve, reject) => {
				$("header").load("/html/component/com-header.html", () => {
					resolve();
				})
			}).then(() => {
				
				_this.showname();
				_this.scroll();
				_this.search();
			})
		}
		//显示登录用户名
		showname(){
			if($.cookie("user")){
				$.cookie.json=true;
				var username=$.cookie("user").name;
				$("#showname").html(username).attr("href", "javascript:;");
				$("#head-register").addClass("hide");
				$("#exit").removeClass("hide");
			//退出登录
				$("#exit").on("click",function(){
					if(confirm("确定要退出登录吗？")){
						$.cookie("user",null,{expires:-1});
						$("#showname").html("登录").attr("href", "/html/login.html");
						$("#exit").addClass("hide");
						$("#head-register").removeClass("hide");
						return false;
					}
				})	
			}
		}
		// 公共头部显示隐藏
		scroll(){
			$(window).scroll( () => {
			this.top_nav();
			})
		}
		top_nav () {
			var top = $(window).scrollTop();
		
			var $li = $('.first-menu-wrap>li');
			var $logo = $('.logo2');
			var $wrap = $('.first-menu-wrap');
			var $top_bar =$('.top-bar');
			var $nav_bar =$('.nav-bar');
			var $search = $('.search-bar');
		
			if (top > 280) {
				$li.css({
					margin: '0 14px'
				},800);
				$logo.addClass('logo-show');
				$nav_bar.css({
					marginLeft: '-52px'
				});
				$wrap.css({
					textAlign: 'center'
				});
				$top_bar.css({
					marginTop: '-94px'
				});
				$search.css({
					top: '120px'
				});
			}else {
				$li.css({
					margin: '0 30px'
				},800);
				$logo.removeClass('logo-show');
				$nav_bar.css({
					marginLeft: '0'
				});
				$wrap.css({
					textAlign: 'center'
				});
				$top_bar.css({
					marginTop: '0'
				});
				$search.css({
					top: '36px'
				});
			}
		}
		
		search(){
			//console.log("45465");
			$("#heade-search").on("keyup",()=>{
				var word=$("#heade-search").val(),
					url = `https://suggest.taobao.com/sug?code=utf-8&q=${word}&callback=?`;
				$.getJSON(url,(data)=>{
					
				})
			})
		}
		
		
		
		
		
		
		
		
		
	}
	
	return new Header();
		
})

