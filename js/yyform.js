function addvalygbb() {
  var thisURL = document.location.href
  var valstr = ''
  //验证姓名
  var uname = $('#tj_txtname').val()
  if (uname == '' || uname == '请输入您的名称') {
    valstr += '\r*请输入您的姓名！'
  }
  //验证电话
  var uphone = $('#tj_txtphone').val()
  //验证电话号码手机号码
  if (uphone != '' && uphone != '请输入您的电话') {
    var ab = /^1[3456789]\d{9}$/
    if (ab.test(uphone) == false) {
      valstr += '\r*请输入您的正确联系方式！'
    }
  } else {
    valstr += '\r*请输入联系方式！'
  }
  var uday = $('#tj_txtday').val()
  if (uday == '') {
    valstr += '\r*请选择预约日期！'
  }
  //医生,从zjList内获取
  // var uyyys = zjList[$('#tj_txtdoctor').val()]
  // console.log($('#tj_txtdoctor').val());
  var uyyys = $('#tj_txtdoctor').val()
  var ukeshi = $('#tj_keshi').text()
  if (valstr != '') {
    alert(valstr)
    return false
  }
  //保存
  $.ajax({
    type: 'GET',
    url: 'http://api.it0733.com/Backashx/Webasker.ashx',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    timeout: 5000,
    async: false,
    data: {
      urltype: 'adduser',
      auname: uname, //姓名
      aubirday: '', //生日
      auemail: '', //邮箱
      auage: '', //年龄
      aupaper: '', //
      aupcode: '', //
      ausex: '', //性别
      auphone: uphone, //电话
      aumobile: '', //手机
      auzhiye: '', //职业
      auxueli: '', //学历
      audanwei: '', //工作单位
      aumingzu: '', //民族
      auyoubian: '', //邮编
      asheng: '', //省
      ashi: '', //市
      aqu: '', //区
      adizhi: '', //详细地址
      ayyday: uday, //预约日期
      ayyks: ukeshi, //预约科室
      ayyys: uyyys, //预约医生
      anotes: '', //备注
      laiyuan: '1', //1表示竞价注册  2表示新媒体注册
      alogurl: thisURL, //来源地址
    },
    success: function (data) {
      var json = eval(data)
      if ($.trim(json[0].msg) == 'data') {
        alert('提示：预约信息提交成功！咨询员会尽快为您服务！')
      } else {
        alert('提示：预约信息提交失败！请联系客服！')
      }
    },
  })
  return true
}
