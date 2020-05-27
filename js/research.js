var ScriptManageObj = [{
    id: 1,
    name: 'Dialogue Technology',
    list: [{
        id: 11,
        name: '多轮对话',
        list: [{
            id: 111,
            name: '预训练对话模型',
            list: [{
                id: 111,
                name: '生成模型',
                list: [{
                    id: 1111,
                    name: '朱庆福',
                    type: 'name',
                    page: 'qfzhu',
                    list: []
                }]
            }, {
                id: 111,
                name: '预训练',
                list: [{
                    id: 1111,
                    name: '张开颜',
                    type: 'name',
                    page: 'kyzhang',
                    list: []
                }]
            }]
        }, {
            id: 111,
            name: '背景及对话历史建模',
            list: [{
                id: 111,
                name: '背景建模',
                list: [{
                    id: 1111,
                    name: '马龙轩',
                    type: 'name',
                    page: 'lxma',
                    list: []
                }]
            }, {
                id: 111,
                name: '省略与指代',
                list: [{
                    id: 1111,
                    name: '张家乐',
                    type: 'name',
                    page: 'jlzhang',
                    list: []
                }]
            }]
        }, {
            id: 111,
            name: '角色化',
            list: [{
                id: 111,
                name: '宋皓宇',
                type: 'name',
                page: 'hysong',
                list: []
            }, {
                id: 111,
                name: '赵正宇',
                type: 'name',
                page: 'zyzhao',
                list: []
            }]
        }, {
            id: 111,
            name: '一致性',
            list: [{
                id: 111,
                name: '胡景雯',
                type: 'name',
                page: 'jwhu',
                list: []
            }]
        }, {
            id: 111,
            name: '对话评价',
            list: [{
                id: 111,
                name: '模拟评分',
                list: [{
                    id: 1111,
                    name: '冯梓娴',
                    type: 'name',
                    page: 'zxfeng',
                    list: []
                }]
            }, {
                id: 111,
                name: '群聊评测',
                list: [{
                    id: 1111,
                    name: '张开颜',
                    type: 'name',
                    page: 'kyzhang',
                    list: []
                }]
            }]
        }]
    },
    {
        id: 12,
        name: '对话式推荐',
        list: [{
            id: 121,
            name: '对话为目标',
            list: [{
                id: 1211,
                name: '用户建模',
                list: [{
                    id: 12111,
                    name: '朱才海',
                    type: 'name',
                    page: 'chzhu',
                    list: []
                }]
            }]
        }, {
            id: 122,
            name: '推荐为目标',
            list: [{
                id: 1221,
                name: '营销获客',
                list: [{
                    id: 12211,
                    name: '刘元兴',
                    type: 'name',
                    page: 'yxliu',
                    list: []
                }, {
                    id: 12212,
                    name: '张家乐',
                    type: 'name',
                    page: 'jlzhang',
                    list: []
                }]
            }]
        }]
    },
    ]
}];

var chart = document.getElementById('research-chart');
var mode1 = function (rowSpanNumber, obj) {
    var table = '<div class="table">';
    obj.forEach(function (item) {
        table += '<div class="tr">';
        if (obj.length > 1) {
            table += '<div class="tr_children"></div>';
        }
        table += '<div class="text-header">';
        if (rowSpanNumber === 1) { 
            table += '<div class="before"></div>';
        }
        if (item.hasOwnProperty('type')) {
            table += '<div class="name" style="background-color: #FEB1B2;; width:80px; font-weight: normal"> <a href="http://ir.hit.edu.cn/~' + item.page + '" style="color: black;">' + item.name + '</a></div>';
        } else {
            table += '<div>' + item.name + '</div>';
        }
        if (item.list && item.list.length != 0) { 
            table += '<div class="after"></div>';
        }
        table += '</div>';
        if (item.list && item.list.length != 0) {
            table += '<div class="content">';
            table += mode1(1, item.list); 
            table += '</div>'
        }
        table += '</div>'
    });
    table += '</div>';
    return table;
};
chart.innerHTML = mode1(0, ScriptManageObj); 