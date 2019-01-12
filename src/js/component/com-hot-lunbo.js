define(["jquery"], ()=>{
	class Lunbo{
		constructor(){
			this.init();
		}
		init(){
			let _this=this;
			//加载com-hot-lunbo.html
			new Promise((resolve, reject) => {
				$(".hot-recommend-wrap").load("/html/component/com-hot-lunbo.html", () => {
					resolve();
				})
			}).then(() => {
				_this.use_lunbo();
			})
		}
		use_lunbo(){
			this.lunbo(".recommend-slide", 4);
		}
		/*轮播*/
		lunbo(name,num){
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
		//console.log($(name)[0]);
	   //定时器
		$(name).hover(function(){
			clearInterval($(name)[0].timer);
		}, (function autoPlay(){
			
			$(name)[0].timer = setInterval(() => {
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
	}
	return new Lunbo();
})