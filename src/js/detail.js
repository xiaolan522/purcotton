//详情页的业务逻辑
require(["./require.config"], function() {
	//引入index需要依赖的模块
require(["jquery","url", "template", "header", "footer","cookie"], function($, url,template) {
	class Detail{
		
		constructor(){
			this.init();
			
		}
		/*初始化*/
		init(){
			//console.log(10);
			let _this=this;
			      //获取id
			      let arrSearch = location.search.slice(1).split("=");
			      let searchObj = {};
			      searchObj[arrSearch[0]] = arrSearch[1];
			
			      $.ajax({
			        url:url.baseUrlRap+"/detail",
			        type:"post",
			        data: searchObj,
			        dataType:"json",
			        success: function(res){
			          if(res.res_code === 1){
			          	//console.log(res.res_body.list[0]);
						let list = res.res_body.list[0];
						//通过模板引擎渲染结构
						let html = template("detail-template", {list: list});
						$(".content-body").html(html);
						//主图中的小图将第一张图片加上样式
						$(".list-img  li").eq(0).addClass("cur");
						//console.log(1)
						//主图中的大图将第一张图片的src放到大图里面
						$(".big-img img").eq(0).attr("src",$('.list-img  li img').eq(0).attr('src'));
						_this.img_tab();
						_this.introduce_tab();
						_this.bug_num_addorsub();
						_this.hover_big();
					}
			        }
			
			      })
		}
		/*主图切换*/
		img_tab(){
			$(".list-img  li").each(function(index, item){
				$(item).on("click", function(){
					//console.log($(this).find("img"));
					$(this).addClass("cur").siblings().removeClass("cur");
					$(".big-img img").eq(0).attr("src",$(this).find("img").attr('src'));
				})
			})
		}
		/* 商品介绍和评价切换 */
		introduce_tab(){
			
			$(".tab-item li").each(function(index,item){
				$(item).on("click", function(){
					$(this).addClass("active").siblings().removeClass("active");
					//console.log($(".tab-content>div").eq(index));
					$(".tab-content>div").eq(index).removeClass("hide").siblings().addClass("hide");
				})
			})
		}
		/*购买数量加减*/
		bug_num_addorsub(){
			//点击+数量加1
			$(".plus").on("click", function(){
				//console.log(Number($("#goodsNo").val())+1)
				$("#goodsNo").val(Number($("#goodsNo").val())+1)
				
			})
			//点击-数量减1
			$(".reduce").on("click", function(){
				if($("#goodsNo").val()!= 1){
					$("#goodsNo").val(Number($("#goodsNo").val())-1)
				}
				
			})
		}
		
		/*放大镜*/
		hover_big(){
				
		}
		
		
	}
	new Detail();
//console.log($("#goodsNo").val())
	
	
	
	
	
	
	//
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	
});
});