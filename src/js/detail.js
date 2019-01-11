//详情页的业务逻辑
require(["./require.config"], function() {
	//引入index需要依赖的模块
require(["jquery","url", "template", "header", "footer","cookie"], function($, url,template) {
	 $(function(){
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
          console.log(res);
        }

      })

    })
	
});
});