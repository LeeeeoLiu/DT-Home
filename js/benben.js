var socialbot_func = [
    {
        name: '主题可控生成',
        img: 'https://i.niupic.com/images/2024/03/10/h4bM.png',
    }, {
        name: '角色化对话生成',
        img: 'https://i.niupic.com/images/2024/03/10/h4bO.png',
    }
]

var idx = 0;
var funcsText1 = '';
socialbot_func.forEach(func => {

    funcsText1 += '<div class="benben_fb"> <div class="benben_fd"> <h1>' + func.name + '</h1></div> <div class="benben_fp"> <img src="' + func.img + '" class="benben_fimg" /> </div> </div>'
    idx++;

});

document.getElementById('socialbot_func').innerHTML += funcsText1;
