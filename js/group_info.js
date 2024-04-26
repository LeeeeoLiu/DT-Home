// 学生信息
var stus = [];
hitscir_poi = [126.637782, 45.734732]
stus.push({
    'name': '朱庆福', 'page': 'qfzhu', 'type': 'D', 'sdt': 2016, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/qfzhu.jpg', 'offer': '留校',
    'focus': '对话生成模型',
    'poi': [126.639634, 45.749485, '朱庆福-哈尔滨工业大学']
});
stus.push({
    'name': '宋皓宇', 'page': 'hysong', 'type': 'D', 'sdt': 2018, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/hysong.jpg',
    'focus': '对话角色化',
    'offer': '北京华为',
    'poi': [116.18, 40.06, '宋皓宇-北京华为']
});
stus.push({
    'name': '马龙轩', 'page': 'lxma', 'type': 'D', 'sdt': 2019, 'gdt': 2024,
    'pic': 'http://ir.hit.edu.cn/wp-content/uploads/2019/06/lxma1.jpg',
    'focus': '对话背景建模'
});
stus.push({
    'name': '刘元兴', 'page': 'yxliu', 'type': 'D', 'sdt': 2019, 'gdt': 2024,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/yxliu.jpg',
    'focus': '对话式推荐'
});
stus.push({
    'name': '胡景雯', 'page': 'jwhu', 'type': 'D', 'sdt': 2020, 'gdt': 2025,
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
    'name': '赵正宇', 'page': 'zyzhao', 'type': 'M', 'sdt': 2018, 'gdt': 2020,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/zyzhao.jpg', 'offer': '深圳腾讯',
    'poi': [113.941921, 22.528438, '赵正宇-深圳腾讯'],
    'focus': '对话角色化'
});
stus.push({
    'name': '朱才海', 'page': 'chzhu', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/chzhu.jpg', 'offer': '深圳腾讯',
    'poi': [113.941921, 22.528438, '朱才海-深圳腾讯'],
    'focus': '用户建模'
});
stus.push({
    'name': '冯梓娴', 'page': 'zxfeng', 'type': 'M', 'sdt': 2019, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/zxfeng.jpg', 'offer': '公务员',
    'poi': [123.46987, 41.80515, '冯梓娴-沈阳'],
    'focus': '对话评价'
});
stus.push({
    'name': '张开颜', 'page': 'kyzhang', 'type': 'M', 'sdt': 2020, 'gdt': 2022,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@master/images/kyzhang2.jpg',
    'focus': '群聊评测', 'offer': '清华大学',
    'poi': [116.404763, 39.914023, '张开颜-清华大学']
});
stus.push({
    'name': '孙润鑫', 'page': 'rxsum', 'type': 'B', 'sdt': 2016, 'gdt': 2020,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/rxsun.jpg',
    'focus': '对话背景建模', 'offer': '中科院自动化',
    'poi': [116.404763, 39.914023, '孙润鑫-中科院自动化']
});
stus.push({
    'name': '李明达', 'page': 'mdli', 'type': 'D', 'sdt': 2021, 'gdt': 2026,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/mdli.jpg',
    'focus': '大模型幻象'
});
stus.push({
    'name': '狄东林', 'page': 'dldi', 'type': 'M', 'sdt': 2023, 'gdt': 2028,
    'pic': 'https://i.com/images/2023/09/07/bDC0.jpg',
    'focus': '工业大模型'
});
stus.push({
    'name': '张家乐', 'page': 'jlzhang', 'type': 'M', 'sdt': 2020, 'gdt': 2022,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/jlzhang2.jpg',
    'focus': '省略与指代', 'offer': '深圳腾讯',
    'poi': [113.941921, 22.528438, '张家乐-深圳腾讯'],
});
stus.push({
    'name': '王雪松', 'page': 'xswang', 'type': 'D', 'sdt': 2022, 'gdt': 2027,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/xswang.jpg',
    'focus': '多模态对话'
});
stus.push({
    'name': '杜佳琪', 'page': 'jqdu', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@6b701e1/images/jqdu.jpg',
    'focus': '对话改写',
    'offer': '黑龙江省法院',
    'poi': [126.69, 45.74, "杜佳琪-黑龙江省高级人民法院"]
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
    'focus': '对话式推荐',
    'offer': '比亚迪深圳',
    'poi': [114.35875, 22.67960, "王航-比亚迪深圳"]
});
stus.push({
    'name': '李佳朋', 'page': 'jpli', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@176dd32/images/jpli.jpg',
    'focus': '对话背景建模',
    'offer': '深圳腾讯',
    'poi': [113.94, 22.52, "李佳朋-深圳腾讯"]
});
stus.push({
    'name': '庄子彧', 'page': 'zyzhuang', 'type': 'M', 'sdt': 2021, 'gdt': 2023,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@176dd32/images/zyzhuang.jpg',
    'focus': '对话评价',
    'offer': '上海携程',
    'poi': [121.35, 31.22, "庄子彧-上海携程"]
});
stus.push({
    'name': '肖瑞宇', 'page': 'ryxiao', 'type': 'D', 'sdt': 2021, 'gdt': 2026,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/ryxiao.jpg',
    'focus': '对话式辩论'
});
stus.push({
    'name': '齐弼卿', 'page': 'bqqi', 'type': 'D', 'sdt': 2019, 'gdt': 2024,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@9afdf28/images/bqqi.jpg',
    'focus': '鲁棒表示'
});
stus.push({
    'name': '刘天慧', 'page': 'thliu', 'type': 'I', 'sdt': 2021, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@58345aa/images/thliu.png',
    'offer': '滑铁卢大学',
    'poi': [-80.544866, 43.472292, '刘天慧-滑铁卢大学']
});
stus.push({
    'name': '勾宇航', 'page': 'yhgou', 'type': 'M', 'sdt': 2022, 'gdt': 2024,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@8d254a4/images/yhgou.jpg',
    'focus': '对话式辩论'
});
stus.push({
    'name': '刘润泽', 'page': 'rzliu', 'type': 'M', 'sdt': 2022, 'gdt': 2024,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@21843ce/images/rzliu.jpg',
    'focus': '对话式辩论'
});
stus.push({
    'name': '熊聪豪', 'page': 'hcxiong', 'type': 'I', 'sdt': 2020, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@21843ce/images/chxiong.jpg',
    'offer': '香港中文大学',
    'poi': [114.217557, 22.422407, '熊聪豪-香港中文大学']
});
stus.push({
    'name': '白昊鹏', 'page': 'hpbai', 'type': 'M', 'sdt': 2022, 'gdt': 2024,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@2375c9e/images/hpbai.jpg',
    'focus': '个性化对话系统'
});
stus.push({
    'name': '韩一', 'page': 'yhan', 'type': 'D', 'sdt': 2022, 'gdt': 2026,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@8d254a4/images/yhan.jpg',
    'focus': '大模型安全性'
});
stus.push({
    'name': '吕岸桐', 'page': 'atlv', 'type': 'I', 'sdt': 2020, 'gdt': 2021,
    'pic': 'https://cdn.jsdelivr.net/gh/LeeeeoLiu/DT-Home@master/images/atlv.jpg',
    'offer': '谷歌中国',
    'poi': [121.514361, 31.240005, '吕岸桐-谷歌']
});
stus.push({
    'name': 'Federico Toschi', 'page': 'federico', 'type': 'I', 'sdt': 2023, 'gdt': 2023,
    'pic': 'https://i.com/images/2023/04/12/aloQ.jpg',
    'focus': '大模型评价',
    'offer': '米兰理工大学',
    'poi': [9.22853, 45.47887, "Federico-米兰理工大学"]
});
stus.push({
    'name': '钱宇珊', 'page': 'ysqian', 'type': 'D', 'sdt': 2023, 'gdt': 2028,
    'pic': 'https://i.com/images/2023/04/12/aloS.jpg',
    'focus': '对话系统'
});
stus.push({
    'name': '周姝含', 'page': 'shzhou', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/04/12/aloO.jpg',
    'focus': '大模型评价'
});
stus.push({
    'name': '陈一帆', 'page': 'yfchen', 'type': 'M', 'sdt': 2023, 'gdt': 2028,
    'pic': 'https://i.com/images/2023/04/12/aloT.jpg',
    'focus': 'RLHF'
});
stus.push({
    'name': '张宇驰', 'page': 'yczhang', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/04/12/aloP.jpg',
    'focus': '大模型角色化'
});
stus.push({
    'name': '李昕羽', 'page': 'xyli', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/04/12/aloR.jpg',
    'focus': '大模型评价'
});
stus.push({
    'name': '王昕毅', 'page': 'xywang', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/04/12/aloM.jpg',
    'focus': '大模型安全性'
});
stus.push({
    'name': '韦明杰', 'page': 'mjwei', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/09/06/bDBd.jpg',
    'focus': '具身智能'
});
stus.push({
    'name': '陈泽鑫', 'page': 'zxchen', 'type': 'M', 'sdt': 2023, 'gdt': 2026,
    'pic': 'https://i.com/images/2023/09/06/bDzj.jpg',
    'focus': '大模型评价'
});

stus.push({
    'name': '宋浩', 'page': 'hsong', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2023/09/07/bDC2.jpg',
    'focus': '工业大模型'
});
stus.push({
    'name': '王寄哲', 'page': 'jzwang', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2023/09/06/bDAF.jpg',
    'focus': '工业大模型'
});
stus.push({
    'name': '高幸', 'page': 'xgao', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2024/04/07/hvQp.jpeg',
    'focus': '对话系统'
});
stus.push({
    'name': '吴磊', 'page': 'lwu', 'type': 'B', 'sdt': 2020, 'gdt': 2029,
    'pic': 'https://i.com/images/2024/04/07/hvQq.jpeg',
    'focus': '对话系统'
});
stus.push({
    'name': '陈帅行', 'page': 'shchen', 'type': 'B', 'sdt': 2020, 'gdt': 2029,
    'pic': 'https://i.com/images/2023/09/06/bDAG.jpg',
    'focus': '大模型安全'
});
stus.push({
    'name': '冯怀绪', 'page': 'hxfeng', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2023/09/06/bDBc.jpg',
    'focus': '工业大模型'
});
stus.push({
    'name': '孙楚芮', 'page': 'crsun', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2024/04/07/hvQn.jpg',
    'focus': '工业大模型'
});
stus.push({
    'name': '梁师齐', 'page': 'sqliang', 'type': 'B', 'sdt': 2020, 'gdt': 2027,
    'pic': 'https://i.com/images/2024/04/07/hvQo.jpg',
    'focus': '工业大模型'
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

var stuType = {'B': '本', 'M': '硕', 'D': '博', 'I': '实习生'}
for (i = 0; i < stus.length; i++) {
    if (stus[i].type == 'D') {
        if (stus[i].gdt + 7 / 12.0 > todt && stus[i].name !== "宋皓宇") {
            ppicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
        } else {
            gpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].gdt + '届' + stuType[stus[i].type] + '<span> | </span>' + stus[i].offer + '</div></div></div>';
        }
    } else if (stus[i].type == 'I') {
        if (stus[i].gdt + 7 / 12.0 > todt) {
            ipicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '年' + '<span> | </span>' + stus[i].focus + '</div></div></div>';
        } else {
            gpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].gdt + '届' + stuType[stus[i].type] + '<span> | </span>' + stus[i].offer + '</div></div></div>';
        }
    } else if (stus[i].gdt + 7 / 12.0 > todt) {
        if (stus[i].type == 'M') {
            if (stus[i].name == "狄东林"){
                mpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] +  " MEM" + '<span> | </span>' + stus[i].focus + '</div></div></div>';
            }else{
                mpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
            }

        } else {
            bpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].sdt + '级' + stuType[stus[i].type] + '<span> | </span>' + stus[i].focus + '</div></div></div>';
        }
    } else {
        gpicsText += '<div class="user-card-stu"> <div class="user-avator" style="background-image: url(' + stus[i].pic + ');"> </div> <div> <div class="user-name"> <a href="http://ir.hit.edu.cn/~' + stus[i].page + '">' + stus[i].name + '</a> </div> <div class="user-title">' + stus[i].gdt + '届' + stuType[stus[i].type] + '<span> | </span>' + stus[i].offer + '</div></div></div>';
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

//delete title
var pics_wall = document.getElementById('pics_wall');
pics_wall.parentNode.removeChild(pics_wall.parentNode.children[0]);
pics_wall.parentNode.removeChild(pics_wall.parentNode.children[0]);
