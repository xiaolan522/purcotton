//首页的业务逻辑
require(["./require.config"], function(){
	//引入index需要依赖的模块
	require(["jquery",  "footer","cookie"], function(){
		/** 从扫码界面返回 **/
		$(".code-back").on("click", function(){
		    $(".code-back").addClass("hide");
		    $(".code-wrap").addClass("hide");
		    $(".form-wrap").removeClass("hide");
		    $(".code-tips").removeClass("hide");
		    $(".code-tip").removeClass("hide");
		});
	    /** 展示扫描二维码 **/
		$(".code-tip").on("click", function(){
			$(".code-wrap").removeClass("hide");
	        $(".code-back").removeClass("hide");
	        $(".form-wrap").addClass("hide");
	        $(".code-tips").addClass("hide");
	        $(".code-tip").addClass("hide");
		});
		/** ajax登录 **/
		$("#login").on("submit",function(e){
			$.ajax({
			type:"POST",
			url:"http://localhost/project/question_project-2/api/v1/login.php",
			data:{
				username:$("#loginName").val(),
				password:$("#loginPassword").val()
			},
			dataType:"json",
			success:function(res){
				if(res.res_code){
					//把用户名和用户id存cookie
					$.cookie.json=true;
					$.cookie(
						"user",{
							id:res.res_body.id,
							name:res.res_body.name
						},
						{path: "/"}
					);
					if(confirm("登录成功，去首页")){
						window.location.href="/index.html";
					}
				}
				
			},
			error:function(){
				alert("网络出错");
			}
		})
			e.preventDefault();
			return false;
		})
		

	})
})