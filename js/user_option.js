(function(win, $){

var publicError, timeout,InterValObj,count = 60,curCount, publicIndex = 0;
/**
 * 显示错误信息
 */
function showError(msg, cls){
	if(!msg){return;}
	clearTimeout(timeout);
	var cdom = publicError && publicError.length ? publicError : $("."+cls);
	cdom.text(msg).fadeIn(200);
	timeout = setTimeout(function(){
		cdom.fadeOut(200);
	},3000);
}

/**
 * 登录方法 
 * 提交按钮 添加u_login_btn 样式， 整体容器添加 ulbody 样式， 用户名指定样式 username， 密码指定样式 password
 */
function login(){
	if(prj.userName){
		prj.errorTip("当前已登录");
		return ;
	}	
	var ts = $(this),
		loginBody = ts.closest(".ulbody"),
		userName = loginBody.find(".username").val(),
		password = loginBody.find(".password").val();
	publicError = loginBody.find(".error_all_public");
	
	userName.charAt(0) != "w" && (userName = "w"+userName);
	
	if(!/^w[a-zA-Z0-9]{4,11}$/.test(userName)){
		showError("用户名输入错误!");
		return ;
	}
	if(!/^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,16}$/.test(password)){
		showError("密码输入错误!");
		return ;
	}
	var popup = loginBody.closest(".public_popup_new")
		curl = popup.data("curl"),
		isFlash = popup.data("isFlash"),
		currentURL= /login/.test(win.location.href) ? "index.htm" : win.location.href,
		curlflg = /\(/.test(curl);
	
	$.ajax({
		type:'POST',
		url:"doLogin.htm",
		dataType: "json",
		//async : false,
		beforeSend : function(){prj.loading();},
		complete : function(){prj.closeLoading();},
		data:{'username':userName,'password':password,'captcha':"noNeed"},
		success:function(data){
			switch(data.isLoginSucc){
				case 0:
					prj.userName = userName;
					prj.getUserData();
					isLogin = true;
					sessionStorage.setItem("isLogin",true);
					if(curl){
						if(curlflg){
							eval(curl);
							isFlash !== false && win.location.reload();
						}else { win.location.href=curl+".htm"; }
					}
					else{win.location.href=currentURL;}
					break;
				case 2:
					prj.errorTip("您的账号处于锁定状态，请五分钟后再试或联系客服进行解锁！");
					break;
				case 4:
					localStorage.setItem("userNameLogin",userName);
					prj.changePassword();
					break;
				case 5:
					prj.errorTip("您好，您输入的是合作伙伴账号，请到合作伙伴页面登录！");
					break;
				case 1:
				case 6:
				case 7:
					showError("密码输入错误!");
					break;
				case 8:
					showError("用户名不存在，请重新输入!");
					break;
				default:
					showError("未知异常，请稍后再试或联系在线客服！");
					setTimeout(prj.openOnlineChat,3000);
					break;
			}
		},
		error:function(data){
			showError('内部错误，请稍后再试或者联系在线客服');
		}
	});
}

/**
 * 注册tab
 */
$(document).on("click", ".ir_tab span", function(){
	var ts = $(this), index = ts.index(), pop = $(".public_popup_new .login_tab_con");
	ts.addClass("ir_action").siblings(".ir_action").removeClass("ir_action");
	$(".ir_tab_con").find(".ir_content").eq(index).addClass("irshow").siblings().removeClass("irshow");
    pop.find(".login_content").eq(index).addClass("irshow").siblings().removeClass("irshow");
    publicIndex = index;
})

/**
 * 好友推荐码
 */
$(document).on("click",".ir_checkbox [type='checkbox']",function(){
	var odiv = $(".irshow").find(".ir_recommend"),inp = $(".ir_recommend input"),ir_recommend = $(".ir_recommend");
	odiv.toggle()
	if(ir_recommend.is(":hidden")){
		inp.val("");	
	}
})

/**
 * 注册提交
 */
function register(e){
	alert('注册提交')
	e = e || win.event;
	if(e.button && e.button == 2){
		return ;
	}
	register.isActive = true;
	var ts = $(this),
		content = ts.closest(".ulbody"),
		userName = content.find(".username").val(),
		password = content.find(".password").val(),
		phone = content.find(".phone").val(),
		box = $("#recommendBox2").is(":checked"),
		ordinary = content.find(".recommend_ordinary").val(),
		recommendUser =content.find(".recommend_ordinary").val();
    publicError = content.find(".error_all_public");
	if(!checkUserName(userName) || !checkPassWord(password) || !checkPhone(phone)){
		return ;
    }
    // var scode = content.find('.s-code').eq(publicIndex).val();
    // if(!checkStaticCode(scode)){
    //     return ;
    // }
	if(box==true){
		if(!ordinary.length){
			showError("请填写，好友推荐码","ordinary_error");
			return ;
		}
	}
	$.ajax({
        type : "POST",
        url : "registerAjax.htm",
        dataType : "json",
        data : $.param({
        	prefix : "w",
        	loginname : userName,
        	password : password,
        	phone : phone,
            bindAccount :recommendUser//,
            //captcha: scode
        }),
        success : function (sucData){
        	if(sucData.isSuccess == 0){
        		win.location.reload();
        	}else if(sucData.isSuccess == '201726'){
        		showError("同一天内,同一个IP只能开5个同类会员","ir_phon_error");
        	}else if(sucData.status == -3){
        		showError(sucData.message,"ordinary_error");
        	}else {        	
        		showError(sucData.message,/图形/.test(sucData) ? "s_code_error" : "ir_phon_error");
        	}
        },
		beforeSend : function(){
			prj.loading();
		},
		complete : function(){
			prj.closeLoading();
		}
    });
}
	
/**
 * 回车事件
 */
function enter(e){
	e = e || win.event;
	var code = e.keyCode;
	if(code == 13){
		$(this).closest(".ulbody").find(".u_login_btn,.reg_sub_btn").click();
	}
}

/**
 * 密码可视切换按钮显示隐藏
 * 事件委托在 ulbody 下的 password 输入框; 文本跟按钮 容器添加样式 ct_it， 切换按钮添加 checkpwtype样式
 */
function toggleChangeTypeBtn(){
	var ts = $(this),
		val = $.trim(ts.val()),
		content = ts.closest(".ct_it"),
		passleavl = content.find(".password_leavel");
	content.find(".checkpwtype")[val ? "show" : "hide"]();
	if(passleavl.length){
		passleavl.removeClass("le1 le2 le3");
		if(val.length >= 8){
			passleavl.show().addClass("le"+prj.pasStrengthRule(val));
		}else{
			passleavl.hide();
		}
	}
}

/**
 * 密码可视切换按钮点击
 * 容器 ulbody； 切换按钮 checkpwtype； 文本加按钮块容器 ct_it； 密码框父级 ul_ipbody； 切换标识 添加open样式
 */
function changeType(){
	var ts = $(this),
		iptBody = ts.closest(".ct_it").find(".ul_ipbody"),
		input = iptBody.find(".password"),
		nowType = input.attr("type"),
		newType = nowType == "text" ? "password" : "text";
	ts.toggleClass("open");
	try{
		input.attr("type",newType);
	}catch (e) {
		var html = iptBody.html(),
			val = input.val();
		iptBody.html(html.replace('type='+nowType , 'type="'+newType+'"'));
		input = iptBody.find("input").val(val);
		setTimeout(function(){input.focus()});
	}
}

/**
 * 校验账号
 */
function checkUserName(userName){
	var map = new ParamsMap(), validText = "", response;
	if( !/^[a-zA-Z0-9]{5,11}$/.test(userName) ){
		validText = "账号由(5-11位)字母或数字组成";
    }else {
    	map.put("loginname", "w"+userName);
    	sendAjaxRequest("checkLoginName.htm", map, function(results){
    		validText = results.isChecking ? (results.exist ? "账号已存在" : "" ) : "操作过于频繁，请稍后再试！";
    	}, false);
    }
	
	response = validText == "";
	showError(validText,"ir_user_error");
	return response;
}
	
/**
 * 校验密码
 */
function checkPassWord(val){
	var validText = "", response;
	if( !/^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,16}$/.test(val) ){
		validText = "密码由8-16位数字和字母组成";
    }
	response = validText == "";
	showError(validText,"ir_pass_error");
	return response;
}
	
/**
 * 校验电话
 */
function checkPhone(val){
	var validText = "", response,typeS = $(".index_reg_popup .irshow").data("idx");
	if( !/(^1[3|4|5|6|7|8|9]\d{9}$)|(^0[1-9]\d{10}$)/.test(val) ){
		validText = "请录入11-12位的正确号码.";
    }
	response = validText == "";
	if(typeS =="1"){
		showError(validText,"ir_phon_error");
		
	}else if(typeS=="2"){
		showError(validText,"ir_phonC_error");
	}
	return response;
}

/**
 * 静态验证码非空
 */
function checkStaticCode(val){
    var flg  = /\d{4}/.test(val);
    showError(flg ? '' : '验证码输入错误', 's_code_error');
    return flg;
}

/**
 * 文本值改变校验
 */
function validInputOnChange(e){
	if(register.isActive){return ;}
	var ts = $(this),
		val = ts.val(),
		content = ts.closest(".ulbody");
	if(content.hasClass("loading_popup_inner") || content.hasClass("lgframe")){
		return;
	}
	publicError = content.find(".error_all_public");
	if(ts.hasClass("username")){
		checkUserName(val);
	}else if(ts.hasClass("password")){
		checkPassWord(val);
	}else {
		checkPhone(val);
	}
}

/**
 * 手机登录校验电话
 */
function modifyPhone(val){
	var validText = "",response;
	if( !/(^1[3|4|5|6|7|8|9]\d{9}$)|(^0[1-9]\d{10}$)/.test(val) ){
		validText = "请录入11-12位的正确号码.";
    }
	response = validText == "";
	showError(validText,"ir_phonC_error");
	return response;
}

/**
 * 注册获取手机验证码
 */
function sendMessages() {
    curCount = count;
    var ts = $(this),content = ts.closest(".ulbody"),phone =content.find("#ir_phone").val();
    if(!checkPhone(phone)){
    	if(!modifyPhone(phone) == false){
    		showError('此号码有误，请重新输入或联系客服');
    		return;
    	}
    	return;	  
    }	
    // var scode = content.find('.s-code').eq(publicIndex).val();
    // if(!checkStaticCode(scode)){
    //     return ;
    // }
    publicError = content.find(".ir_phonC_error");
	//向后台发送处理数据 
	$.ajax({
		type:'POST',
		url: "verifyCodeAjax.htm",
		dataType: "json",	     
		data:{'action':'create','type':6,'function':1,'sendto':phone,'token':token},//, captcha: scode},
		success: function(code) {
			publicError = content.find(".ir_code_error");
			var Code = $(".ir_code_error");
			if(code.status==1){					
				Code.addClass("error_sendCode");
				showError('验证码己发送,请注意查收！');
				btnCode();//计时
			}else{
				showError(code.message);
				return ;
			}	
		}
	});
	  
 }
/**
 * 手机登录验证码
 */
var isActiveRequest = false;
function phoneCode(){
    if(isActiveRequest){
        return ;
    }
    isActiveRequest = true;

	curCount = count;
    var ts = $(this),content = ts.closest(".ulbody"),phone =content.find("#ir_phoneLogin").val();	
	publicError = content.find(".error_code_phone");
	if(!modifyPhone(phone)||phone==""){
    	return ;	  
    }
	//向后台发送处理数据 
	prj.sendRequest({
        url: "verifyCodeAjax.htm",
        beforeSend: prj.loading,
		data:{'action':'create','type':10,'function':1,'sendto':phone,'token':token},
		success: function(code) {
			var errorCode = $(".error_code_phone");
			if(code.status==1){
				errorCode.addClass("error_sendCode");
				showError('验证码己发送,请注意查收！');
				btnCode();//计时
			}else{
				//errorCode.addClass("error_sendCode");
				showError(code.message);
				return ;
			}	
        },
        complete: function(){
            prj.closeLoading();
            isActiveRequest = false;
        }
	});
	
}
/**
 * 按钮开始计时 
 */
function btnCode(){
	//设置button效果，开始计时 
	var Code= $(".getCode");
	Code.attr("disabled", "true");
	Code.val("重新发送"+"("+curCount+'s'+")");
	InterValObj = window.setInterval(SetRemainTimes, 1000); //启动计时器，1秒执行一次 	  
}

/**
 * timer处理函数 
 */
function SetRemainTimes() {
   var getCode = $(".getCode"),ts = $(this);
   if(curCount == 0) {
      window.clearInterval(InterValObj); //停止计时器 
      getCode.removeAttr("disabled"); //启用按钮 
      getCode.val("重新发送验证码");
      //code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效   
   }else {
      curCount--;
      getCode.val("重新发送"+"("+curCount+'s'+")");
   }
}

/**
 * 手机注册提交 
 */
function loginPhone(){
	var ts = $(this),
	content = ts.closest(".ulbody"),
	irPhone = content.find("#ir_phone").val(),
	irCode = content.find(".ir_code_input").val(),
	recommend_code = content.find(".recommend_phone").val(),
	Code = content.find(".ir_code_error"),
	recommend_phone = content.find(".recommend_phone").val(),
	box = $("#recommendBox").is(":checked");	
	if(!checkPhone(irPhone)){	
		return ;
    }
    // var scode = content.find('.s-code').eq(publicIndex).val();
    // if(!checkStaticCode(scode)){
    //     return ;
    // }
    publicError = content.find(".ir_phonC_error");	
	if(!irCode.length){
		publicError = content.find(".ir_code_error");
		Code.removeClass("error_sendCode"); 
		showError('请填写验证码!');		
		return ;
	}
	if(box==true){
		if(!recommend_phone.length){
			publicError = content.find(".phonC_recom_error");
			showError('请填写，好友推荐码');
			return ;
		}
	}
	$.ajax({
        type : "POST",
        url : "doLogin.htm",
        dataType : "json",
        data:{'action':'registerByPhone','phone':irPhone,'code':irCode,'bindAccount':recommend_code},//, captcha: scode},
        success : function (sucData){
        	publicError = content.find(".error_all_public");       	
        	if(sucData.status == 1){        		
        		if(!publicError.length){
        			prj.indexRegSuccessPop(sucData.login_name);
        			setTimeout(function(){        		
    	        		prj.closePopup();
            		},3000)
        		}else{
        			win.location.reload();
        		}
        	}else if(sucData.status == 3){
        		Code.removeClass("error_sendCode");    		
        		showError(sucData.message,"phonC_recom_error");
        	}else if(sucData.status == -3){
        		publicError = content.find(".phonC_recom_error");
        		showError(sucData.message,"phonC_recom_error");
        	}else {   
        		showError(sucData.message,"ir_code_error");
        	}
        },
		beforeSend : function(){
			prj.loading();
		},
		complete : function(){
			prj.closeLoading();
		}
    });
}

/**
 * 手机号码登录 
 */
function phoneLogin(){
	if(prj.userName){
		prj.errorTip("当前已登录");
		return ;
	}	
	var ts = $(this),
		loginBody = ts.closest(".ulbody"),
		loginCode = loginBody.find(".ir_code_input").val(),
		loginPhone = loginBody.find("#ir_phoneLogin").val(),
		userName = loginBody.find("#ir_phoneLogin").val();	
		publicError = loginBody.find(".error_all_phone");
	if(!modifyPhone(loginPhone)){
		return ;
	}
	if(!loginCode){
		showError("请输入验证码!");
		return ;
	}
	var popup = loginBody.closest(".public_popup_new")
		curl = popup.data("curl"),
		isFlash = popup.data("isFlash"),
		currentURL= /login/.test(win.location.href) ? "index.htm" : win.location.href,
		curlflg = /\(/.test(curl);	
	$.ajax({
		type:'POST',
		url:"doLogin.htm",
		dataType: "json",
		beforeSend : function(){prj.loading();},
		complete : function(){prj.closeLoading();},
		data:{'action':'loginByPhone','phone':loginPhone,'code':loginCode},
		success:function(data){
			switch(+data.isLoginSucc){			
				case 0:
					prj.getUserData();
					isLogin = true;
					sessionStorage.setItem("isLogin",true);
					if(curl){
						if(curlflg){
							eval(curl);
							isFlash !== false && win.location.reload();
						}else { win.location.href=curl+".htm"; }
					}else{
						win.location.href=currentURL;
					}
					break;
				case 2:
					prj.errorTip("您的账号处于锁定状态，请五分钟后再试或联系客服进行解锁！");
					break;
				case 4:
					localStorage.setItem("userNameLogin",userName);
					prj.changePassword();
					break;				
				case 1:
				case 6:
				case 7:
					showError("密码输入错误!");
					break;
				case 8:
					showError("用户名不存在，请重新输入!");
					break;
				case -1:
					showError("验证码校验失败!");
					break;
				default:
					showError("未知异常，请稍后再试或联系在线客服！");
					setTimeout(prj.openOnlineChat,3000);
					break;			
			}
		},
		error:function(data){
			showError('内部错误，请稍后再试或者联系在线客服');
		}
	})	
}

/*登录*/
$(document).off("click.u_login").on("click.u_login", ".ulbody .u_login_btn",login);

/*值改变*/
$(document).off("change.ulreg").on("change.ulreg", ".ulbody .username,.ulbody .password, .ulbody .phone,.ul_popup .ir_phoneLogin,#ir_phone", validInputOnChange);

/*注册提交*/
$(document).off("mousedown.ulreg").on("mousedown.ulreg", ".ulbody .reg_sub_btn", register);

/*回车事件*/
$(document).off("keydown.login").on("keydown.login", ".ulbody input",enter)
	
/*密码可视切换按钮显示隐藏*/
$(document).off("keyup.ct").on("keyup.ct", ".ulbody .password", toggleChangeTypeBtn);
	
/*密码可视切换按钮点击*/
$(document).off("click.ct").on("click.ct", ".checkpwtype", changeType);

/*注册获取手机验证码*/
$(document).on("click", "#getCode", sendMessages);

/*手机注册提交 */
$(document).on("click",".reg_phon_btn",loginPhone);

/*手机登录验证码 */
$(document).on("click","#loginCode",phoneCode);

/*手机号码登录 */
$(document).on("click",".phone_login_btn",phoneLogin);

}(window, jQuery));