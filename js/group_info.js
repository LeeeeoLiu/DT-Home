// 学生信息
var stus = [];
hitscir_poi = [126.637782, 45.734732]
stus.push({
    'name': '朱庆福', 'page': 'qfzhu', 'type': 'D', 'sdt': 2016,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/qfzhu.jpg',
    'focus': '对话生成模型'
});
stus.push({
    'name': '宋皓宇', 'page': 'hysong', 'type': 'D', 'sdt': 2018,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/hysong.jpg',
    'focus': '对话角色化'
});
stus.push({
    'name': '马龙轩', 'page': 'lxma', 'type': 'D', 'sdt': 2019,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/lxma1.jpg',
    'focus': '对话背景建模'
});
stus.push({
    'name': '刘元兴', 'page': 'yxliu', 'type': 'D', 'sdt': 2019,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/yxliu.jpg',
    'focus': '营销获客'
});
stus.push({
    'name': '胡景雯', 'page': 'jwhu', 'type': 'D', 'sdt': 2020,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@771dbc9/images/jwhu2.jpg',
    'focus': '对话一致性'
});
stus.push({
    'name': '朱泽圻', 'page': 'zqzhu', 'type': 'M', 'sdt': 2017, 'gdt': 2019,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/zqzhu.jpg', 'offer': '南京华为',
    'poi': [118.775859, 31.985021, '朱泽圻-南京华为']
});
stus.push({
    'name': '李凌志', 'page': 'lzli', 'type': 'M', 'sdt': 2017, 'gdt': 2019,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/lzli.jpg', 'offer': '深圳腾讯',
    'poi': [113.941921, 22.528438, '李凌志-深圳腾讯']
});
stus.push({
    'name': '赵正宇', 'page': 'zyzhao', 'type': 'M', 'sdt': 2018, 'gdt': 2020, 'offer': '深圳腾讯',
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/zyzhao.jpg',
    'poi': [113.941921, 22.528438, '赵正宇-深圳腾讯'],
    'focus': '对话角色化'
});
stus.push({
    'name': '朱才海', 'page': 'chzhu', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/chzhu.jpg',
	'poi': [113.941921, 22.528438, '朱才海-深圳腾讯'],
    'focus': '用户建模'
});
stus.push({
    'name': '冯梓娴', 'page': 'zxfeng', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/zxfeng.jpg',
	'poi': [123.46987, 41.80515, '冯梓娴-沈阳'],
    'focus': '对话评价'
});
stus.push({
    'name': '张开颜', 'page': 'kyzhang', 'type': 'M', 'sdt': 2020, 'gdt': 2022,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/kyzhang.jpg',
    'focus': '群聊评测'
});
stus.push({
    'name': '孙润鑫', 'page': 'rxsum', 'type': 'B', 'sdt': 2016, 'gdt': 2020,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/rxsun.jpg',
    'focus': '对话背景建模', 'offer': '中科院自动化',
    'poi': [116.404763, 39.914023, '孙润鑫-中科院自动化']
});
stus.push({
    'name': '李明达', 'page': 'mdli', 'type': 'D', 'sdt': 2019,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/mdli.jpg',
    'focus': '对话背景建模'
});
stus.push({
    'name': '狄东林', 'page': 'dldi', 'type': 'I', 'sdt': 2019, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/dldi.jpg',
    'focus': '意图识别'
});
stus.push({
    'name': '张家乐', 'page': 'jlzhang', 'type': 'M', 'sdt': 2020, 'gdt': 2022,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/jlzhang2.jpg',
    'focus': '省略与指代'
});
stus.push({
    'name': '杜佳琪', 'page': 'jqdu', 'type': 'B', 'sdt': 2017, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/jqdu.jpg',
    'focus': '用户建模'
});
stus.push({
    'name': '王雪松', 'page': 'xswang', 'type': 'M', 'sdt': 2020, 'gdt': 2022,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/xswang.jpg',
    'focus': '营销获客'
});
stus.push({
    'name': '汪意发', 'page': 'yfwang', 'type': 'M', 'sdt': 2016, 'gdt': 2018,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/yfwang.png', 'offer': '科大讯飞',
    'poi': [116.404763, 39.914023, '汪意发-北京科大讯飞']
});
stus.push({
    'name': '张杨子', 'page': 'yzzhang', 'type': 'M', 'sdt': 2016, 'gdt': 2018,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/yzzhang.png', 'offer': '海航研究院',
    'poi': [108.846864, 34.215388, '张杨子-西安海航科技研究院']
});
stus.push({
    'name': '曹东岩', 'page': 'dycao', 'type': 'M', 'sdt': 2015, 'gdt': 2017,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/dycao.png', 'offer': '南京中兴',
    'poi': [118.782831, 31.995941, '曹东岩-南京中兴']
});
stus.push({
    'name': '裘实', 'page': 'sqiu', 'type': 'M', 'sdt': 2015, 'gdt': 2017,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/sqiu.png', 'offer': '深圳腾讯',
    'poi': [113.941921, 22.528438, '裘实-深圳腾讯']
});
stus.push({
    'name': '杜雨萌', 'page': 'ymdu', 'type': 'M', 'sdt': 2014, 'gdt': 2016,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/ymdu.png', 'offer': '北京腾讯',
    'poi': [116.404763, 39.914023, '杜雨萌-北京腾讯']
});
stus.push({
    'name': '叶哲', 'page': 'zye', 'type': 'B', 'sdt': 2012, 'gdt': 2016,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/zye.png', 'offer': '上海交通大学',
    'poi': [121.443287, 31.03201, '叶哲-上海交通大学']
});
stus.push({
    'name': '王航', 'page': 'hwang', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@925329e/images/hwang.jpg',
    'focus': '对话一致性'
});
stus.push({
    'name': '李佳朋', 'page': 'jpli', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@176dd32/images/jpli.jpg',
    'focus': '对话背景建模'
});
stus.push({
    'name': '庄子彧', 'page': 'zyzhuang', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@176dd32/images/zyzhuang.jpg',
    'focus': '对话评价'
});
stus.push({
    'name': '肖瑞宇', 'page': 'ryxiao', 'type': 'D', 'sdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/ryxiao.jpg',
    'focus': '风格化对话'
});
stus.push({
    'name': '齐弼卿', 'page': 'bqqi', 'type': 'D', 'sdt': 2019,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/bqqi.jpg',
    'focus': '对话系统'
});
stus.push({
    'name': '刘天慧', 'page': 'thliu', 'type': 'I', 'sdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/thliu.png',
    'focus': '对话系统'
});
stus.push({
    'name': '勾宇航', 'page': 'yhgou', 'type': 'B', 'sdt': 2018,
    //'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/bqqi.jpg',
    'focus': '对话系统'
});
stus.push({
    'name': '刘凯华', 'page': 'khliu', 'type': 'B', 'sdt': 2018,
    //'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/bqqi.jpg',
    'focus': '对话系统'
});
stus.push({
    'name': '刘润泽', 'page': 'rzliu', 'type': 'B', 'sdt': 2018,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/rzliu.jpg',
    'focus': '对话系统'
});
stus.push({
    'name': '熊聪豪', 'page': 'hcxiong', 'type': 'I', 'sdt': 2020,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/chxiong.jpg',
    'focus': '对话系统'
});
// 打印小组成员
var i;
var today = new Date();
var todt = today.getFullYear() + (today.getMonth() + 1) / 12.0
// 输出照片墙
var picsText = '';
var ppicsText = '<div class="users-block"> <h1>博士生</h1></div> <div class="users-block"> <div class="users-row-stu">';
var mpicsText = '<div class="users-block""><h1>硕士生</h1></div> <div class="users-block"> <div class="users-row-stu">';
var bpicsText = '<div class="users-block"><h1>本科生</h1></div> <div class="users-block"> <div class="users-row-stu">';
var gpicsText = '<div class="users-block"><h1>毕业生</h1></div> <div class="users-block"> <div class="users-row-stu">';
var ipicsText = '<div class="users-block"><h1>实习生</h1></div> <div class="users-block"> <div class="users-row-stu">';

var stuType = { 'B': '本', 'M': '硕', 'D': '博', 'I':'' }
for (i = 0; i < stus.length; i++) {
    if (stus[i].type == 'D') {
        ppicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
    }else if(stus[i].type == 'I'){
        ipicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '年' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
    }else if (stus[i].gdt + 7 / 12.0 > todt) {
        if (stus[i].type == 'M') {
            mpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
        } else {
            bpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
        }
    } else {
        gpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].gdt + '届' + stuType[stus[i].type] + '<span> | </span>' + stus[i].offer+ '</div></div></div>';
    }
}
ppicsText += '</div></div>';
mpicsText += '</div></div>';
bpicsText += '</div></div>';
gpicsText += '</div></div>';
ipicsText += '</div></div>';
picsText += ppicsText;
picsText += mpicsText;
picsText += bpicsText;
picsText += ipicsText
picsText += gpicsText;
document.getElementById('wall_body').innerHTML += picsText;