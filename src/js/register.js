//首页的业务逻辑
require(["./require.config"], () => {
	//引入index需要依赖的模块
require(["jquery",  "footer"], () => {
	/* ajax注册 */
	$("#register").on("submit", function(e){
		if($.trim($("#registerusername").val())!="" && $.trim($("#password").val())!="" && $.trim($("#telephone").val())!=""){
			$.ajax({
			type:"POST",
			url:"http://localhost/project/question_project-2/api/v1/register.php",
			data:{
				username:$.trim($("#registerusername").val()),
				password:$.trim($("#password").val()),
				tel:$.trim($("#telephone").val())
			},
			dataType:"json",
			success:function(res){
				if(res.res_code){
					if(confirm("注册成功，去登录")){
						window.location.href = "/html/login.html";
					}else{
						$("#registerusername").val("");
						$("#password").val("");
						$("#telephone").val("");
					}
				}
			},
			error:function(){
				alert("网络出错");
			}
			});
		//阻止表单的默认提交事件
			e.preventDefault();
			return false;
		
	}else{
		if($("#warnMsgReg").hasClass("green")) {
   			$("#warnMsgReg").removeClass("green").addClass("red");
   			}
   		$("#warnMsgReg").html("还有未填写项，请填写完整!");
   		return false;
	}
});	
		
		
		
		/* 验证用户名  */
		$("#registerusername").on("blur", function(){
			let registerusername = $.trim($("#registerusername").val());
			if($.trim($("#registerusername").val()) == "" || $.trim($("#registerusername").val()) == null) {
   				if($("#warnMsgReg").hasClass("green")) {
   					$("#warnMsgReg").removeClass("green").addClass("red");
   					}
   				$("#warnMsgReg").html("用户名不能为空!");
   				return false;
   			} 
   			let reg=/\w/g;
   			if (!reg.exec(registerusername)) {
    		if($("#warnMsgReg").hasClass("green")){
    			$("#warnMsgReg").removeClass("green").addClass("red");
    		}
       		$("#warnMsgReg").html("用户名只能由数字字母下划线组成");
        	return false;
    		} else {
    		$("#warnMsg").html("");
        	return true;
   		  }
		});
		
		function f_haveBank(msg) {
   			 for ( var idx = 0; idx < msg.length; idx++) {
        		if (msg.substr(idx, 1) == " ") {
            		return true;
        		}
    	}
    return false;
}
		/* 验证密码 */
		$("#password").on("blur", function(){
			
			var password = $.trim($("#password").val());
    		if (f_haveBank($("#password").val())) {
    			if($("#warnMsgReg").hasClass("green")){
    				$("#warnMsgReg").removeClass("green").addClass("red");
    			}
       			$("#warnMsgReg").html("密码不能包含空格组成");
        		return false;
    			}
    		if($.trim($("#password").val()) == "" || $.trim($("#password").val()) == null) {
   				if($("#warnMsgReg").hasClass("green")) {
   					$("#warnMsgReg").removeClass("green").addClass("red");
   					}
   				$("#warnMsgReg").html("确认密码不可以为空!");
   				return false;
   			}
    			
    	let patrn = /^(\w){8,20}$/;
    	if (!patrn.exec(password)) {
    		if($("#warnMsgReg").hasClass("green")){
    			$("#warnMsgReg").removeClass("green").addClass("red");
    		}
       		$("#warnMsgReg").html("密码必须为8-20个字母、数字、下划线组成");
        	return false;
    	} else {
    		$("#warnMsg").html("");
        	return true;
   		  }
		});
		
		/* 验证两次密码 */
		$("#re_password").on("blur", function(){
		
			if($.trim($("#re_password").val()) == "" || $.trim($("#re_password").val()) == null) {
   				if($("#warnMsgReg").hasClass("green")) {
   					$("#warnMsgReg").removeClass("green").addClass("red");
   					}
   				$("#warnMsgReg").html("确认密码不可以为空!");
   				return false;
   			} else if($.trim($("#password").val()) != $.trim($("#re_password").val())) {
   						if($("#warnMsgReg").hasClass("green")) {
   								$("#warnMsgReg").removeClass("green").addClass("red");
   							}
   				$("#warnMsgReg").html("两次密码输入不一致!");
   				return false;
   			} else {
   				$("#warnMsgReg").html("");
   				return true;
   			}
		});
		
		/* 验证手机号 */
		$("#telephone").on("blur", function(){
			
			var mobile = $("#telephone").val();
			let reg=/^1[34578]{1}\d{9}$/g;
			if (mobile.length == 0){
    			if($("#warnMsgReg").hasClass("green")) {
					$("#warnMsgReg").removeClass("green").addClass("red");
				}
				$("#warnMsgReg").html("手机号码不能为空");
				return false;
			}else if(mobile.length != 11) {
				if($("#warnMsgReg").hasClass("green")) {
					$("#warnMsgReg").removeClass("green").addClass("red");
				}
				$("#warnMsgReg").html("请输入11位有效的手机号码");
				return false;
			}else if(!reg.test(mobile)) {
				if($("#warnMsgReg").hasClass("green")) {
					$("#warnMsgReg").removeClass("green").addClass("red");
				}
				$("#warnMsgReg").html("请输入有效手机号");
				return false;
			}
		});
	
	})
})