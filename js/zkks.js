//获取今天开始的一周
function getOneWeekData () {
  var now = new Date();
  var nowTime = now.getTime();
  var oneDayTime = 24 * 60 * 60 * 1000;
  var aaWeek = [];
  for (var i = 0; i < 7; i++) {
    //显示周一
    var ShowTime = nowTime + i * oneDayTime;
    //初始化日期时间
    var myDate = new Date(ShowTime);
    //var year = myDate.getFullYear();//年
    //var month = (myDate.getMonth() + 1).toString().padStart(2, '0');//月
    //var date = (myDate.getDate()).toString().padStart(2, '0');//日
    var month = myDate.getMonth() + 1
    var date = myDate.getDate()
    var monthDate = month + "-" + date;
    var weekday = "星期" + "日一二三四五六".charAt(myDate.getDay());
    var oneItem = {
      weekday: weekday,
      monthDate: monthDate
    };
    aaWeek.push(oneItem);
  }
  return aaWeek;
}

var th = ''
for (var j = 0; j < 7; j++) {
  var aWeekArr = getOneWeekData()[j].monthDate.split('-')
  th += '<div class="td">' + getOneWeekData()[j].weekday + '<p>' + aWeekArr[0] + '月' + aWeekArr[1] + '日</p></div>'
}
document.getElementById('tableHead').innerHTML = th

var outpatient = [
  '康复医学科', '老年科', '神经内科', '心血管内科', '呼吸内科', '消化内科', '中医肛肠科',
  '肿瘤科', '中医科', '中西医结合科', '皮肤科', '腋臭门诊', '泌尿外科', '男性功能障碍',
  '普外科', '疝气门诊', '减重门诊', '结石门诊', '妇科', '计划生育门诊', '围绝经期门诊',
  '不孕门诊', '乳腺科', '内分泌科', '耳鼻咽喉科', '眼科', '骨科', '口腔科', '肝胆内科', '体检科'
]
var ksc = [
  'kf', 'ln', 'sn', 'xn', 'hx', 'xh', 'gc',
  'zl', 'zy', 'zxy', 'pf', 'yc', 'mn', 'mn',
  'pw', 'sq', 'jz', 'js', 'fk', 'fk', 'wjjq',
  'by', 'rx', 'nfm', 'ebh', 'yk', 'gw', 'kq', 'gd', 'tj',
]




function td (ks) {
  var tds = ''
  for (var j = 0; j < 7; j++) {
    var weekday = getOneWeekData()[j].weekday
    if (
      (ks == '中西医结合科' && weekday == '星期一') ||
      (ks == '中医科' && weekday == '星期一') ||
      (ks == '皮肤科' && weekday == '星期三') ||
      (ks == '眼科' && weekday !== '星期三') ||
      (ks == '体检科' && weekday == '星期日')
    ) {
      tds = tds + '<div class="td">无号</div>'
    } else {
      tds = tds + '<div class="td"><a href="/gh/index.html?tag=' + tag + '&keshi=' + ks + '&date=' + weekArr(getOneWeekData()[j].monthDate) + '">有号</a></div>'
    }
  }
  return tds;
}
function weekArr (obj) {
  var num = obj.split('-')
  return appendZero(num[0]) + '-' + appendZero(num[1])
}
function appendZero (num) {
  if (num < 10) {
    return "0" + "" + num;
  } else { return num; }
}