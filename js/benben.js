


// '<div class="benben_fb">
// <div class="benben_fd">
//     <h1>闲聊</h1>
//     基于检索技术和回复生成技术，跟用户进行单轮无目的的闲聊。
// </div>
// <div class="benben_fp">
//     <img src='https://tva1.sinaimg.cn/large/007S8ZIlly1gf2e44w6joj30q60bwtba.jpg' class="benben_fimg" />
// </div>
// </div>'


var benben_func = [{
    name: '笨笨属性回复',
    desc: '回复用户关于机器人姓名、年龄、性别等属性方便的问题。',
    img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2e5mvjlwj30qi0cagob.jpg',
    url: '',
}, {
    name: '饮食推荐',
    desc: '为用户推荐地方特色小吃等',
    img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2e6mu52cj30qa0gu7ab.jpg',
    url: '',
}, {
    name: '情感回复',
    desc: '对用户的情感进行抚慰。',
    img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2ehxb0irj30q80bwgom.jpg',
    url: '',
}, {
    name: '火车票/飞机票/宾馆查询',
    desc: '',
    img: '',
    url: '',
}, {
    name: '知识问答',
    desc: '用户可以对一些常识进行提问，笨笨会返回相应问题的答案。',
    img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2euwoleaj30qa0h6n3t.jpg',
    url: '',
}, {
    name: '阅读理解',
    desc: '',
    img: '',
    url: '',
}, {
    name: '新闻推荐',
    desc: '',
    img: '',
    url: '',
}, {
    name: '查天气',
    desc: '',
    img: '',
    url: '',
}, {
    name: '古文回复',
    desc: '',
    img: '',
    url: '',
}, {
    name: '招生咨询',
    desc: '',
    img: '',
    url: '',
}, {
    name: '聊小说',
    desc: '',
    img: '',
    url: '',
}
];

var idx = 0;
var funcsText = '';
benben_func.forEach(func => {
    if (idx %2==0){
        funcsText+= '<div class="benben_fb"> <div class="benben_fd"> <h1>'+ func.name +'</h1> ' + func.desc+'<br><br>详细介绍：'+ func.url+'</div> <div class="benben_fp"> <img src="'+ func.img+'" class="benben_fimg" /> </div> </div>'
    }else{
        funcsText+= '<div class="benben_fb">  <div class="benben_fp"> <img src="'+ func.img+'" class="benben_fimg" /> </div> <div class="benben_fd"> <h1>'+ func.name +'</h1> ' + func.desc+'<br><br>详细介绍：'+ func.url+'</div> </div>'
    }
    idx++;
    
});

document.getElementById('benben_func').innerHTML += funcsText;