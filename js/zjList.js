﻿

var department = [
  '中医科','消化内科', '神经内科', '呼吸科 /肺科', '肿瘤科', '肾病/ 内分泌科', '心内科', '普外科', '肛肠科', '乳腺科', '妇科', '泌尿外科', '骨科', '风湿免疫科', '感染病科', '康复科', '全科医学', '眼科',
]
var dpm = [
  'zyk','xh', 'sn', 'hx', 'zl', 'nfm', 'xnk', 'pw', 'gc', 'rx', 'fk', 'nk', 'gk', 'fsmyk', 'grk', 'kfk', 'jzk', 'yk',
]
/* 格式：
 * 名字全拼: ['名字', '科室（需与上面科室相同）', '日期格式 2020-06-06 多个以分号分割'
 * '上午下午','周二写2','医院及备注'],
 */

var zjList = {
  caixiuying: ['蔡秀英', '神经内科', '2020-10-17;2020-10-24', '上午', '6', '苏大附一院'],
  chenzhiguo: ['陈治国', '神经内科', '2020-10-31', '上午', '6', '苏大附一院'],
  xumin: ['徐敏', '神经内科', '2020-10-23;2020-10-30','下午', '5', '苏大附一院'],
  shaoguofu: ['邵国富', '神经内科', '2020-10-17;2020-10-24;2020-10-31','下午', '6', '苏大附二院'],
  chengqingzhang: ['程庆璋', '神经内科', '2020-10-20;2020-10-27','下午', '2', '苏州市立医院'],
  shenairong: ['沈爱荣', '神经内科', '2020-10-19;2020-10-26','上午', '1', '苏州市立医院'],
  zhaozhong: ['赵中', '神经内科', '2020-10-22;2020-10-29','下午', '4', '苏州市立医院'],
  //zhouqin: ['周沁', '神经内科', '2020-10-07', '下午', '3', '市立医院东区'],
  //qiuchenhong: ['邱晨红', '神经内科', '2020-10-14', '下午', '3', '市立医院东区'],
  huangkaimei: ['黄开梅', '神经内科', '2020-10-21', '下午', '3', '市立医院东区'],
  zhouhua: ['周华', '神经内科', '2020-10-28', '下午', '3', '市立医院东区'],
  wenxiaochi: ['温晓持', '消化内科', '2020-10-19;2020-10-26','上午', '1', '苏大附一院'],
  yansu: ['严苏', '消化内科', '2020-10-24;2020-10-31','下午', '6', '苏大附一院'],
  yanhui: ['严辉', '消化内科', '2020-10-25','上午', '7', '苏大附一院'],
  shenjiaqing: ['沈佳庆', '消化内科', '2020-10-15;2020-10-22;2020-10-29','上午', '4', '苏大附一院'],
  //jiazhenyu: ['贾振宇', '消化内科', '2020-10-07', '上午', '3', '苏大附一院'],
  xujun: ['徐俊', '消化内科', '2020-10-19;2020-10-26','上午', '1', '苏大附一院'],
  zhulanxiang: ['朱兰香', '消化内科', '2020-10-21;2020-10-28', '下午', '3', '苏大附一院'],
  wangshaofeng: ['王少峰', '消化内科', '2020-10-20;2020-10-23;2020-10-27;2020-10-30','上午/下午', '2;5', '苏大附二院'],
  luqin: ['陆芹', '消化内科', '2020-10-22;2020-10-29', '上午', '4', '苏大附二院'],
  chenzhirong: ['陈志荣', '消化内科', '2020-10-16;2020-10-23;2020-10-30', '上午', '5', '市立医院东区'],
  xuya: ['徐亚', '消化内科', '2020-10-22;2020-10-29','上午', '4', '市立医院东区'],
  huaxian: ['华娴', '消化内科', '2020-10-20;2020-10-27','上午', '2', '市立医院东区'],
  xugao: ['徐杲', '消化内科', '2020-10-21;2020-10-28','上午', '3', '市立医院东区'],
  zhuxiongxiong: ['朱雄雄', '消化内科', '2020-10-25','下午', '7', '苏州市中医院'],
  luzhongkai: ['陆忠凯', '消化内科', '2020-10-19;2020-10-26','下午', '1', '市立医院东区'],
  guosongming: ['郭颂铭', '肛肠科', '2020-10-11;2020-10-18','上午下午', '7', '上海同济医院<br>(11/18日)'],
  jinchunmin: ['金淳民', '肛肠科', '2020-10-21;2020-10-28','下午', '3', '苏州市中医院'],
  liyi: ['李忆', '呼吸科 /肺科', '2020-10-22;2020-10-25;2020-10-29','上午', '4;7', '苏大附一院'],
  //liuguohua: ['刘国华', '呼吸科 /肺科', '2020-09-30', '上午', '3', '苏州市立医院'],
  lindang: ['林盪', '呼吸科 /肺科', '2020-10-21;2020-10-28','上午', '3', '苏州市立医院'],
  zenggang: ['曾刚', '呼吸科 /肺科', '2020-10-16;2020-10-23;2020-10-30', '上午', '5', '苏州市立医院'],
  //wangpeifang: ['王佩芳', '呼吸科 /肺科', '2020-09-25', '上午', '5', '苏州市立医院'],
  //gaoxiaolai: ['高晓来', '呼吸科 /肺科', '2020-08-26', '上午', '3', '苏州市立医院'],
  //qianjinxian: ['钱进先', '呼吸科 /肺科', '2020-07-31','上午', '5', '苏州市立医院'],
  //huangchun: ['黄纯', '呼吸科 /肺科', '2020-08-28', '上午', '5', '苏州市立医院'],
  //qianjun: ['钱军', '肿瘤科', '2020-06-30'],
  tanjie: ['谭洁', '肿瘤科', '2020-10-15;2020-10-22;2020-10-29','下午', '4', '苏州市立医院'],
  shijianming: ['时建明', '肿瘤科', '2020-10-16;2020-10-23;2020-10-30','上午', '5', '苏州市立医院'],
  //zhangqinying: ['张勤英', '肿瘤科', '2020-10-09','上午', '5', '苏州市立医院'],
  zhuyufang: ['朱玉芳', '肾病/ 内分泌科', '2020-10-19;2020-10-22;2020-10-26;2020-10-29','上午', '1;4', '苏大附一院'],
  luyiqun: ['陆轶群', '肾病/ 内分泌科', '2020-10-18;2020-10-25','上午', '7', '苏大附一院'],
  chenlei: ['陈蕾', '肾病/ 内分泌科', '2020-10-24;2020-10-31', '上午', '6', '苏州市立医院'],
  caiwei: ['蔡薇', '心内科', '2020-10-23;2020-10-30','下午', '5', '苏州市立医院'],
  //wangfang: ['王汸', '心内科', '2020-07-31', '下午', '5', '苏州市立医院'],
  caowei: ['曹苇', '普外科', '2020-10-21;2020-10-28','上午', '3', '苏大附一院'],
  chenyouguo: ['陈友国', '妇科', '2020-10-14;2020-10-28', '上午', '3', '苏大附一院<br>(10月14/28日)'],
  zhoujinhua: ['周金华', '妇科', '2020-10-23;2020-10-30','上午', '5', '苏大附一院'],
  limin: ['李珉', '妇科', '2020-10-18;2020-10-25','下午', '7', '苏大附一院'],
  //houshunyu: ['侯顺玉', '妇科', '2020-11-03;2020-11-17','下午', '2', '市立医院本部'],
  dangyunwen: ['党云文', '乳腺科', '2020-10-28', '上午下午', '3', '上海同济医院<br>(10月28日)'],
  pujinxian: ['浦金贤', '泌尿外科', '2020-10-29', '下午', '4', '苏大附一院<br>(10月29日)'],
  chenzutao: ['陈祖涛', '感染病科', '2020-10-22;2020-10-29','下午', '4', '苏大附一院'],
  
  fujianying: ['府剑英', '中医科', '2020-10-20;2020-10-27', '上午', '2', '苏大附一院'],
  xiayibing: ['夏一冰', '中医科', '2020-10-21;2020-10-28','下午', '3', '苏大附一院'],
  wangxiaowen: ['王晓文', '中医科', '2020-10-18;2020-10-22;2020-10-29','上午', '4', '市立医院北区'],
  wanghaijuan: ['王海娟', '中医科', '2020-10-30','上午', '5', '苏州市立医院'],
  zhangling: ['张玲', '中医科', '2020-10-25','上午', '7', '苏大附一院'],
  xuwenhua: ['徐文华', '中医科', '2020-10-25','上午', '7', '苏州市立医院'],
  qinyongnan: ['秦永南', '中医科', '2020-10-25','上午', '7', '苏州市立医院'],
  zhuxiongxiong: ['朱雄雄', '中医科', '2020-10-25','下午', '7', '苏州市中医院'],
  wangyue: ['王跃', '中医科', '2020-10-25','下午', '7', '金坛市中医院'],
  xudeyi: ['徐德颐', '中医科', '2020-10-25','下午', '7', '苏州市中医院'],
  
  yangweixin: ['杨卫新', '康复科', '2020-10-17;2020-10-24;2020-10-31', '上午', '6', '苏大附一院'],
  hehuai: ['何怀', '康复科', '2020-10-23;2020-10-30','上午', '5', '苏大附一院'],
  huanghong: ['黄洪', '骨科', '2020-10-18;2020-10-25', '上午', '7', '原苏州解放军第100医院'],
  huangjian: ['黄坚', '全科医学', '2020-10-19;2020-10-26','下午', '1', '苏大附一院'],
  chenzhiwei: ['陈志伟', '风湿免疫科', '2020-10-15', '下午', '4', '苏大附一院<br>(10月15日)'],
  hujian: ['胡健', '眼科', '2020-10-21;2020-10-28','上午', '3', '苏州市立医院'],
  //liuhuixiu: ['刘会秀', '超声科', '2020-06-27'],
  //zhoubingyuan: ['周炳元', '超声科', '2020-06-28;'],
  //kangsuya: ['康苏娅', '病理科', '2020-06-25'],
  //cheyi: ['车轶', '高压氧科', '2020-06-30'],

}
