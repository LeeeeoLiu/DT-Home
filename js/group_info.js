// 学生信息
var stus = [];
hitscir_poi = [126.637782, 45.734732]
stus.push({
    'name': '朱庆福', 'page': 'qfzhu', 'type': 'D', 'sdt': 2016,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/qfzhu.jpg'
});
stus.push({
    'name': '宋皓宇', 'page': 'hysong', 'type': 'D', 'sdt': 2018,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/hysong2.jpg'
});
stus.push({
    'name': '马龙轩', 'page': 'lxma', 'type': 'D', 'sdt': 2019,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/lxma1.jpg'
});
stus.push({
    'name': '刘元兴', 'page': 'yxliu', 'type': 'D', 'sdt': 2019,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/yxliu.jpg'
});
stus.push({
    'name': '胡景雯', 'page': 'jwhu', 'type': 'D', 'sdt': 2020,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2020/05/jwhu.jpg'
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
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/zyzhao.png',
    'poi': [113.941921, 22.528438, '赵正宇-深圳腾讯']
});
stus.push({
    'name': '朱才海', 'page': 'chzhu', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/chzhu.jpg'
});
stus.push({
    'name': '冯梓娴', 'page': 'zxfeng', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/zxfeng1.png'
});
stus.push({
    'name': '张开颜', 'page': 'kyzhang', 'type': 'B', 'sdt': 2016, 'gdt': 2020,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/kyzhang.jpg'
});
stus.push({
    'name': '张家乐', 'page': 'jlzhang', 'type': 'B', 'sdt': 2016, 'gdt': 2020,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/jlzhang.jpg'
});
stus.push({
    'name': '杜佳琪', 'page': 'jqdu', 'type': 'B', 'sdt': 2017, 'gdt': 2021,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/jqdu1.jpg'
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
    'name': '汪意发', 'page': 'yfwang', 'type': 'M', 'sdt': 2016, 'gdt': 2018,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/yfwang.png', 'offer': '科大讯飞',
    'poi': [116.404763, 39.914023, '汪意发-北京科大讯飞']
});
stus.push({
    'name': '张杨子', 'page': 'yzzhang', 'type': 'M', 'sdt': 2016, 'gdt': 2018,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/yzzhang.png', 'offer': '海航科技研究院',
    'poi': [108.846864, 34.215388, '张杨子-西安海航科技研究院']
});
// 打印小组成员
var i;
var today = new Date();
var todt = today.getFullYear() + (today.getMonth() + 1) / 12.0
// 输出照片墙
var picsText = '';
var ppicsText = '<div id="phd_pics" style="width: 100%;display: flex"> <div style="width: 15%;text-align: center;"><div style="color: white;width: 70%;background-color: slategray;border: 2px solid; border-color: steelblue;font-size: 1vw;    margin: 10%;">博士生</div></div><div style="width: 80%;">';
var mpicsText = '<div id="phd_pics" style="width: 100%;display: flex"> <div style="width: 15%;text-align: center;"><div style="color: white;width: 70%;background-color: slategray;border: 2px solid; border-color: steelblue;font-size: 1vw;    margin: 10%;">硕士生</div></div><div style="width: 80%;">';
var bpicsText = '<div id="phd_pics" style="width: 100%;display: flex"> <div style="width: 15%;text-align: center;"><div style="color: white;width: 70%;background-color: slategray;border: 2px solid; border-color: steelblue;font-size: 1vw;    margin: 10%;">本科生</div></div><div style="width: 80%;">';
var gpicsText = '<div id="phd_pics" style="width: 100%;display: flex"> <div style="width: 15%;text-align: center;"><div style="color: white;width: 70%;background-color: slategray;border: 2px solid; border-color: steelblue;font-size: 1vw;    margin: 10%;">毕业生</div></div><div style="width: 80%;">';
var stuType = { 'B': '本', 'M': '硕', 'D': '博' }
for (i = 0; i < stus.length; i++) {
    if (stus[i].type == 'D') {
        ppicsText += ' <div style="width: 120px; height: 230px; text-align: center;float: left; margin: 1%;font-size: 1vw;"><img src="' + stus[i].pic + '" width="100%" height="70%"><div style="width: 100%;height: 30%;">' + '<a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a>' + '<br>' + stus[i].sdt + '级' + stuType[stus[i].type] + '</div></div>';
    } else if (stus[i].gdt + 7 / 12.0 > todt) {
        if (stus[i].type == 'M') {
            mpicsText += ' <div style="width: 120px; height: 230px; text-align: center;float: left; margin: 1%;font-size: 1vw;"><img src="' + stus[i].pic + '" width="100%" height="70%"><div style="width: 100%;height: 30%;">' + '<a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a>' + '<br>' + stus[i].sdt + '级' + stuType[stus[i].type] + '</div></div>';
        } else {
            bpicsText += ' <div style="width: 120px; height: 230px; text-align: center;float: left; margin: 1%;font-size: 1vw;"><img src="' + stus[i].pic + '" width="100%" height="70%"><div style="width: 100%;height: 30%;">' + '<a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a>' + '<br>' + stus[i].sdt + '级' + stuType[stus[i].type] + '</div></div>';
        }
    } else {
        gpicsText += ' <div style="width: 120px; height: 230px; text-align: center;float: left; margin: 1%;font-size: 0.8vw;"><img src="' + stus[i].pic + '" width="100%" height="70%"><div style="width: 100%;height: 30%;">' + '<a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a>' + '<br>' + stus[i].gdt + '届' + stuType[stus[i].type] + '<br>' + stus[i].offer + '</div></div>';
    }
}
ppicsText += '</div></div>';
mpicsText += '</div></div>';
bpicsText += '</div></div>';
gpicsText += '</div></div>';
picsText += ppicsText;
picsText += mpicsText;
picsText += bpicsText;
picsText += gpicsText;
document.getElementById('wall_body').innerHTML += picsText;