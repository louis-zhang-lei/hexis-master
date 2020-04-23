// 获取浏览器可见区域高度
var window_height = document.documentElement.clientHeight;
// 用户手动修改浏览器可见区域高度时修改变量
window.onresize = function() {
    window_height = document.documentElement.clientHeight;
};
// 获取所需效果元素
var My_vanwee = document.getElementsByClassName('vanwee');
// 鼠标滚轮滚动执行方法
window.onscroll = function() {
    // 获取鼠标滚轮滚动距离
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 循环类vanwee
    for (var k = 0; k < My_vanwee.length; k++) {
        if (My_vanwee[k].classList.contains("f-up") == false && _scrollTop >= getOffsetTop(My_vanwee[k]) - window_height &&
            _scrollTop <= getOffsetTop(My_vanwee[k])) {
            My_vanwee[k].classList.add("f-up");
        }
    }
};
// 判断元素父集是否有已定位元素
function getOffsetTop(ele) {
    var rtn = ele.offsetTop;
    var o = ele.offsetParent;
    while (o != null) {
        rtn += o.offsetTop;
        o = o.offsetParent;
    }
    return rtn;
}
// 滚动条等于0时执行第一屏效果
function my_animation() {
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 效果方法
    for (var k = 0; k < My_vanwee.length; k++) {
        if (My_vanwee[k].classList.contains("f-up") == false && _scrollTop >= getOffsetTop(My_vanwee[k]) - window_height &&
            _scrollTop <= getOffsetTop(My_vanwee[k])) {
            My_vanwee[k].classList.add("f-up");
        }
    }
}
my_animation();



export {
    // realconsole
}
