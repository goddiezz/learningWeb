"use strict";

/**
 * 判断是否以某个字符串开头
 * @param str 字符串
 * @param s 以哪个字符串开头
 * @returns {boolean} 返回true为正确，false为错误
 */
function startWith(str, s) {
  return str.indexOf(s) == 0;
}

var str = "sdasd sdx adsad asd sa";
console.log(startWith(str, "s"));
/**
 * 判断是否以某个字符串结束
 * @param str 总字符串
 * @param s 某个字符串
 * @returns {boolean}
 */

function endWith(str, s) {
  var d = str.length - s.length;
  return d >= 0 && str.lastIndexOf(s) == d;
}

var str1 = "sdasd sdx adsad asd sa";
console.log(endWith(str1, "a"));
/**
 * 判断是否为数字类型
 * @param value 判断的值
 * @returns {boolean}
 */

function isDigit(value) {
  var pattern = /^[0-9]*$/;

  if (pattern.exec(value) == null || value == "") {
    return false;
  } else {
    return true;
  }
}

var str3 = "5s";
var str2 = 5;
console.log(isDigit(str3));
console.log(isDigit(str2));
/**
 * 设置cookie值
 * setCookie (键、值、保存时长 （毫秒）)
 * @param name cookie对应名字
 * @param value 该cookie对应的值
 * @param Hours
 */

function setCookie(name, value, expire) {
  var date = new Date();
  date.setTime(Number(date) + expire);
  document.cookie = name + "=" + escape(value) + (expire == null ? "" : ";expires=" + date.toGMTString());
}
/**
 * JS 获取Cookie
 * @param name cookie对应名字
 * @returns {String}
 */


function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "="); //获取字符串的起点

    if (start != -1) {
      start = start + name.length + 1; //获取字符串起点

      end = document.cookie.indexOf(";", start); //获取结尾处

      if (end == -1) end = document.cookie.length; //如果是最后一个，结尾就是cookie字符串的结尾

      return decodeURI(document.cookie.substring(start, end)); //截取字符串返回
    }
  }

  return "";
}

function getPageHeight() {
  var g = document,
      a = g.body,
      f = g.documentElement,
      d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

console.log(getPageHeight());
/**
 * JS判断是否为⽹址，可⾃⾏修改扩展
 * @param strUrl URL地址
 * @returns {boolean} 返回真或者假
 * @constructor
 */

function isURL(strUrl) {
  var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;

  if (regular.test(strUrl)) {
    return true;
  } else {
    return false;
  }
}

console.log(isURL("https://www.baidu.com")); //true

console.log(isURL("http://www.mqxu.top")); //true

console.log(isURL("https://www.baidu.con")); //false

/**
 * JS随机数时间戳
 * @returns {string}
 */

function uniqueId() {
  var a = Math.random,
      b = parseInt;
  return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

console.log(uniqueId()); // 例如：1525075670818519

/**
 * JS⽇期格式化函数
 * @param format 格式化格式
 * @returns {*}
 */

Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1,
    //month
    "d+": this.getDate(),
    //day
    "h+": this.getHours(),
    //hour
    "m+": this.getMinutes(),
    //minute
    "s+": this.getSeconds(),
    //second
    "q+": Math.floor((this.getMonth() + 3) / 3),
    //quarter
    "S": this.getMilliseconds() //millisecond

  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }

  return format;
};

console.log(new Date().format("yyyy-MM-dd hh:mm:ss")); //例如：2021-03-17

/**
 * JS时间个性化输出功能
 * 1、< 60s, 显示为“刚刚”
 * 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
 * 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
 * 4、>= 1day && < 1year, 显示⽇期“XX⽉XX⽇ XX:XX”
 * 5、>= 1year, 显示具体⽇期“XXXX年XX⽉XX⽇ XX:XX”
 * @param time
 * @returns {string}
 */

function timeFormat(time) {
  var date = new Date(time),
      curDate = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 10,
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      curYear = curDate.getFullYear(),
      curHour = curDate.getHours(),
      timeStr;

  if (year < curYear) {
    timeStr = year + '年' + month + '⽉' + day + '⽇ ' + hour + ':' + minute;
  } else {
    var pastTime = curDate - date,
        pastH = pastTime / 3600000;

    if (pastH > curHour) {
      timeStr = month + '⽉' + day + '⽇ ' + hour + ':' + minute;
    } else if (pastH >= 1) {
      timeStr = '今天 ' + hour + ':' + minute + '分';
    } else {
      var pastM = curDate.getMinutes() - minute;

      if (pastM > 1) {
        timeStr = pastM + '分钟前';
      } else {
        timeStr = '刚刚';
      }
    }
  }

  return timeStr;
}

console.log(timeFormat(new Date(1616338081844662))); // 例：刚刚

/**
 * JS判断是否是中⽂名
 * @param value
 * @returns {boolean}
 */

function isChinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/i;

  if (!reg.test(value)) {
    // 不是中⽂名
    return false;
  } // 是中⽂名


  return true;
}

console.log(isChinese("厉害")); // true