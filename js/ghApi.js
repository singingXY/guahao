
//封装Ajax请求
$.extend({
    ajaxGuahao:function(data,success,error){
		var thisURL = document.location.href+'#预约挂号' ;
		$.ajax({
			type: 'GET',
			url: '/Backashx/Webasker.ashx',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			async: false,
			data: {
				urltype: "adduser",
				auname: data.uname,    //姓名
				aubirday: '',     //生日
				auemail: '',      //邮箱
				auage: '',        //年龄
				aupaper: '',      //
				aupcode: '',      //
				ausex: '',        //性别
				auphone: data.uphone,  //电话
				aumobile: '',     //手机
				auzhiye: '',      //职业
				auxueli: '',      //学历
				audanwei: '',     //工作单位
				aumingzu: '',     //民族
				auyoubian: '',    //邮编
				asheng: '',       //省
				ashi: '',         //市
				aqu: '',          //区
				adizhi: '',       //详细地址
				ayyday: data.yyday,    //预约日期
				ayyks: data.yyks,      //预约科室
				ayyys: data.yyys,      //预约医生
				anotes: '',       //备注
				laiyuan: '1',     //1表示竞价注册  2表示新媒体注册
				alogurl: thisURL  //来源地址
			},
			success: function(data) {
				console.log(data);
				var json = eval(data);
				if ($.trim(json[0].msg) == "data") {
					success(data)
				} else {
					alert('提示：预约信息提交失败！请联系客服！')
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
				error(data)
			}
			
		});
    }
})

