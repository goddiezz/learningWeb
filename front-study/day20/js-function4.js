/**
 * JS将驼峰字符串转为下划线字符串
 * @param str
 * @returns {*}
 */
function convertCamelCase(str) {
    if (typeof (str) != 'string') {
        console.error('[convertCamelCase] argument is notString.');
        return str;
    }
    var pattern = /[A-Z]/g;
    return str.replace(pattern, function (match, index) {
        if (index != 0) {
            return '_' + match.toLowerCase();
        } else {
            return match.toLowerCase();
        }
    });
}
console.log("将驼峰字符串转为下划线字符串")
console.log(convertCamelCase("HelloWorld")); //hello_wolrd


/**
 * JS数据求交集
 * @param array1
 * @param array2
 * @returns {*}
 */
function intersection(array1, array2) {
    return array1.filter(function (n) {
        return array2.indexOf(n) != -1;
    });
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log("数据求交集")
console.log(intersection(arr1, arr2)); // [3,4,5]


/**
 * BASE64加密
 * @param str
 * @returns {string}
 */
function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
/**
 * BASE64解密
 * @param str    
 * @returns {string}
 */
function base64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}
console.log("加密")
console.log(base64Encode("test")); // dGVzdA==
console.log("解密")
console.log(base64Decode("dGVzdA==")); // test


/**
 * JS Url参数转对象
 * @param {String} url default: window.location.href
 * @return {Object}
 */
function parseQueryString(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
console.log("Url参数转对象")
console.log(parseQueryString("http://www.baidu.com?id=1&name=hello")); // {id: "1", name: "hello"}


/**
 * JS判断是否为空
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
    if (val == undefined || val == null || val == "" || val == '' || val == "undefined" || val == "null" || val == "NULL") {
        return true;
    }
    return false;
}
console.log("JS判断是否为空")
console.log(isNull(undefined)) // true
console.log(isNull(null)) // true
console.log(isNull("")) // true
console.log(isNull('')) // true
console.log(isNull("undefined")) // true
console.log(isNull("null")) // true
console.log(isNull("NULL")) // true


/**
 * JS⽣成指定位数的随机整数
 * @param count
 * @returns {string}
 */
function getRandomNum(count) {
    let arr = new Array
    let reNum = ""
    for (let i = 0; i < count; i++) {
        arr[i] = parseInt(Math.random() * 10)
        reNum += String(arr[i])
    }
    return reNum
}
console.log("6位随机整数: " + getRandomNum(6));


/**
 * JS校验IP地址格式
 * @param ip
 * @returns {boolean}
 */
function checkIp(ip) {
    var regex = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/
    var b = regex.test(ip)
    return b
}
console.log("IP地址是否正确: " + checkIp("127.0.0.1")); // true
console.log("IP地址是否正确: " + checkIp("0.0.0.1")); // false


/**
 * JS根据⽂件名获取⽂件格式
 * @param str
 * @returns {string}
 */
function getFileTypeByFileName(str) {
    return str.substr(str.lastIndexOf(".") + 1).toLowerCase();
}
console.log("获取⽂件格式: " + getFileTypeByFileName("index.html")); //html
console.log("获取⽂件格式: " + getFileTypeByFileName("index.js")); //js


/**
 * JS在字符串中查找某⼀字符串出现的次数
 * @param str
 * @param strSplit
 * @returns {number}
 */
function countStr(str, strSplit) {
    return str.split(strSplit).length - 1
}
let strTest = 'sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
countStr(strTest, "blog"); // 6
console.log("字符串出现的次数: " + countStr(strTest, "blog"))


/**
 * JS适配rem
 */
function getFontSize() {
    var doc = document,
        win = window
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        reCalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            //如果屏幕⼤于750（750是根据效果图设置的），就设置clientWidth=750，防⽌font-size会超过100px
            if (clientWidth > 750) {
                clientWidth = 750
            }
            //设置根元素font-size⼤⼩
            docEl.style.fontSize = 100 * (clientWidth / 750) +
                'px'
        }
    //屏幕⼤⼩改变，或者横竖屏切换时，触发函数
    win.addEventListener(resizeEvt, reCalc, false)
    //⽂档加载完成时，触发函数
    doc.addEventListener('DOMContentLoaded', reCalc, false)
}