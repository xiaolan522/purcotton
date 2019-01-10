//首页的业务逻辑
require(["./require.config"], function() {
	//引入index需要依赖的模块
require(["jquery", "header", "footer","cookie"], function() {
	//console.log($("#banners .zy-slide").eq(0));
	//轮播图
$(function(){
	function lunbo(name,num){
		let threeBox = $(name + " .zyslide-wrap");
		let $imgs = $(name).find(".zy-slide");
		let index = 0;
		let timer = null;
		let len = $imgs.length;
		let liWidth = $imgs.eq(0).outerWidth(true);
		
	
		//在结尾追加img，计算显示宽度
		for(var i=0; i<num; i++){
			threeBox.append($imgs.eq(i).clone());
		}
		
		threeBox.width((len+num)*liWidth);
	
		//上一张
		$(name + " .prev").on("click", function(){
			index--;
			if(index < 0){
				threeBox.css({left: -len*liWidth});
				index = len-1;
			}
	
			threeBox.stop().animate({left: -index*liWidth}, 800);
	
			
		})
	
		//下一张
		$(name + " .next").on("click", function(){
			index++;
			if(index >= len){
				//移动到追加得那一张，但是移动完成之后瞬间回到第0张
				threeBox.stop().animate({left: -len*liWidth}, 800, function(){
					threeBox.css({left: 0});
				})
				index = 0;
			}else{
				threeBox.stop().animate({left: -index*liWidth});
			}
	
			
		})
	   //定时器
		$(name).hover(function(){
			clearInterval(timer);
		}, (function autoPlay(){
			
			timer = setInterval(() => {
			index++;
			if(index >= len){
				//移动到追加得那一张，但是移动完成之后瞬间回到第0张
				threeBox.stop().animate({left: -len*liWidth}, 800, function(){
					threeBox.css({left: 0});
				})
				index = 0;
			}else{
				threeBox.stop().animate({left: -index*liWidth});
			}
		},2000);
			return autoPlay;
		})());
		}
	lunbo("#banners", 1);
	lunbo(".recommend-content", 4);
	lunbo(".recommend-activity", 3);
	lunbo(".index-community",1);
	
	
	
	
	

// 四个推荐切换
function recommend_four () {

	$(".recommend-tab .recommend-word").each(function(index,item){
		$(item).on("click",function(){
			
			$(this).parent().addClass("cur").siblings().removeClass("cur");
			//$(".recommend-content >.recommend-slide").eq(index).removeClass("hide").siblings().addClass("hide");
		})
	})
}	
recommend_four();
	
	
	
	
})
	
    
	
	
	
	
	
	

});
});