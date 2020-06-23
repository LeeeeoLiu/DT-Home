var benben_func = [
    {
        name: '闲聊',
        desc: '基于检索技术和回复生成技术，跟用户进行单轮无目的的闲聊。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2e44w6joj30q60bwtba.jpg',
        url: '',
    }, {
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
        name: '指代消解',
        desc: '在聊天过程中，对于本轮中使用的代词根据上一轮输入中的实体进行消解。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2e873l7ej30r00p2drj.jpg',
        url: '',
    }, {
        name: '实体查询',
        desc: '如果用户输入是以“你知道XXX吗”之类的问题，会返回查询到的相关知识。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2eahmdq7j30qu0zoap7.jpg',
        url: '',
    }, {
        name: '情感回复',
        desc: '对用户的情感进行抚慰。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2ehxb0irj30q80bwgom.jpg',
        url: '',
    }, {
        name: '指令执行',
        desc: '协助用户完成“订机票”、“订火车票”和“查询公交”任务。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2fji305vj30qk0ckq5k.jpg',
        url: '',
    }, {
        name: '知识问答',
        desc: '用户可以对一些常识进行提问，笨笨会返回相应问题的答案。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gf2euwoleaj30qa0h6n3t.jpg',
        url: '',
    }, {
        name: '新闻推荐',
        desc: '用户输入新闻推荐，笨笨首先询问用户想要看新闻的类别。再用户返回之后，为用户推荐对应类别下的新闻。同时，用户可以不断再来一条持续看，或者切换新闻的类别。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff623rwcyj310n0u0tdi.jpg',
        url: '',
    }, {
        name: '古文回复',
        desc: '触发词“笨笨古文”。在古文回复功能中，笨笨会采用古文回答用户的输入。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff68vpwcij30qi0um78t.jpg',
        url: '',
    }, {
        name: '笨笨古诗',
        desc: '触发词“笨笨古诗”。\n“笨笨”对作诗很感兴趣，背了很多首古诗。\n现在的“笨笨”可是一个大诗人，能陪您玩诗词成语、诗词九宫格、古诗词补全、诗词飞花令、诗词接龙等五个游戏。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gg21nd4bskj30u010eang.jpg',
        url: 'https://mp.weixin.qq.com/s/2Zm4-xkUq_A3d0qjn1FN_Q',
    }, {
        name: '猜谜语',
        desc: '触发词“猜谜语”。\n中国的谜语文化源远流长，距今已经有三千多年的历史了。经过历代发展，又形成了灯谜、字谜、动物谜语等。谜语是一项饶有趣味的文字游戏，往往需要一定的想象力才能分析推理出谜底。\n现在的笨笨能够陪您玩猜谜游戏了！',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff6f40i74j30qi16gdoy.jpg',
        url: 'https://mp.weixin.qq.com/s/Uo1f-1NNQyK2rNiqY1YeZA',
    }, {
        name: '成语接龙',
        desc: '触发词“成语接龙”。\n笨笨最近对成语很感兴趣，在假期偷偷学会了三万多个成语，现在的笨笨能够陪您玩【成语接龙】游戏了。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff6gfqti2j30q40f6td1.jpg',
        url: 'https://mp.weixin.qq.com/s/7TwDTYx5K3JjyiSJUSePcg',
    }, {
        name: '笨笨聊小说',
        desc: '触发词“笨笨聊小说”。\n用户可以指定用户扮演小说中的一个角色。笨笨会根据角色的信息回答用户的问题。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff6ov6d38j30qw0n2dju.jpg',
        url: '',
    }, {
        name: '脑筋急转弯',
        desc: '触发词“脑筋急转弯”。\n笨笨可以和用户进行脑筋急转弯的游戏。用户回答不了时，可以请求提示。',
        img: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gff6t21qorj30qe0r8q6n.jpg',
        url: '',
    }
];

var idx = 0;
var funcsText = '';
benben_func.forEach(func => {
    var detailText = ''
    if (func.url != '') {
        detailText = '<a href="' + func.url + '">详细介绍</a>';
    }
    if (idx % 2 == 0) {
        funcsText += '<div class="benben_fb"> <div class="benben_fd"> <h1>' + func.name + '</h1><p style="font-size:14px;">' + func.desc + '</p><br><br>' + detailText + '</div> <div class="benben_fp"> <img src="' + func.img + '" class="benben_fimg" /> </div> </div>'
    } else {
        funcsText += '<div class="benben_fb">  <div class="benben_fp"> <img src="' + func.img + '" class="benben_fimg" /> </div> <div class="benben_fd"> <h1>' + func.name + '</h1><p style="font-size:14px;">' + func.desc + '</p><br><br>' + detailText + '</div> </div>'
    }
    idx++;

});

document.getElementById('benben_func').innerHTML += funcsText;