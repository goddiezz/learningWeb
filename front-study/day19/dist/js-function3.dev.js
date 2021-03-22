"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * JS获取地址栏参数的值
 * @param name 对应的参数
 * @returns {*} 如果有，则返回参数值，没有则返回null
 */
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}
/**
 * JS字符串反序
 * @param text 需要进⾏反序的字符串
 * @returns {string} 返回反序之后的字符串
 * @constructor
 */


function reverseStr(text) {
  return text.split('').reverse().join('');
}

console.log(reverseStr("Hello!")); // !olleH

/**
 * @desc JS现⾦额转⼤写
 * @param {Number} n
 * @return {String}
 */

function digitUppercase(n) {
  var fraction = ['⻆', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = n < 0 ? '⽋' : '';
  n = Math.abs(n);
  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var _i = 0; _i < unit[0].length && n > 0; _i++) {
    var p = '';

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }

    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + s;
  }

  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

console.log(digitUppercase(1023456789.56)); // 壹拾亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元伍⻆伍分

/**
 * JS允许输⼊⼩数位的数字
 * @param curObj
 */

function clearNoFloat(curObj) {
  curObj.value = curObj.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符

  curObj.value = curObj.value.replace(/^\./g, ""); //验证第⼀个字符是数字⽽不是.

  curObj.value = curObj.value.replace(/\.{2,}/g, "."); //只保留第⼀个. 清除多余的.

  curObj.value = curObj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
}
/**
 * JS检测字符串是否为空
 * @param str
 * @returns {boolean}
 */


function checkIsEmpty(str) {
  if (null != str && undefined != str && "" != str) {
    return false;
  }

  return true;
}

console.log(checkIsEmpty("")); // true

/**
 * 将数值四舍五⼊到保留的⼩数位数
 * @param num 待四舍五⼊数值
 * @param len 保留⼩数位数
 * @returns {number}
 */

function getRound(num, len) {
  return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
}

console.log(getRound(6.123456, 4)); // 6.1235

/**
 * 切割相应⼩数点后位数，并将⼩数点后多余的0 清空
 * @param val 需要切割的数值
 * @param num 需要的⼩数位数
 * @returns {string}
 */

function cutRoundNum(val, num) {
  var value = val.toString();
  value = value.substr(0, value.indexOf('.') + 1) + value.substr(value.indexOf('.') + 1, num);
  var reg = value.match(/\d+\.\d+/g);

  for (var index in reg) {
    value = value.replace(reg[index], parseFloat(reg[index]));
  }

  return value;
}

console.log(cutRoundNum(2.333000, 4)); // 2.333

/**
 * 判断是否是邮箱的正确格式
 * @param str 对应的需要验证的邮箱地址
 * @returns {boolean} 返回真或假
 */

function isEmail(str) {
  var reg = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9AZ]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
  return reg.test(str);
}

console.log(isEmail("ye21st@gmail.com")); //true

console.log(isEmail("ye21st!gmail.com")); //false

/**
 * JS将⼿机号格式化，中间部分以 * 号代替
 * @param phone
 * @returns {string | * | void}
 */

function phoneToStar(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

console.log(phoneToStar('16651459835')); // 139****5171

/**
 * JS检查⽤户名是否满⾜要求，只能是英⽂或英⽂数字
 * @returns {*}
 */

function checkLoginName(loginName) {
  return /^[A-Za-z0-9]*$/.test(loginName) && !/(^\d*$)|(^\S+\s+\S+$)/.test(loginName);
}

console.log(checkLoginName("ye21st")); // true

console.log(checkLoginName("sam!")); // false

/**
 * JS验证密码，必须是字⺟和数字结合
 * @param password 密码
 * @returns {boolean} 返回true或false
 */

function checkPasswordValidate(password) {
  return /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/.test(password);
}

console.log(checkPasswordValidate("dasdas1132156")); //true

console.log(checkPasswordValidate("dsadasdas")); //false

/**
 * JS检查输⼊的邮政编码是否正确
 * @param str
 * @returns {Boolean}
 */

function checkPostcode(str) {
  if (str.match(/^[1-9][0-9]{5}$/) == null) {
    return false;
  } else {
    return true;
  }
}

console.log(checkPostcode("423000")); //true

console.log(checkPostcode("029000")); //false

/**
 * JS验证是否为正整数
 * @param str
 * @returns
 */

function checkNumber(str) {
  return /^[1-9]\d*$/.test(str);
}

console.log(checkNumber(100)); //true

console.log(checkNumber(-100)); //false

/**
 * JS判断是否包含全⻆
 * @param str
 */

function checkHasFull(str) {
  for (var i = 0; i < str.length; i++) {
    strCode = str.charCodeAt(i);

    if (strCode > 65248 || strCode == 12288) {
      return true;
      break;
    }
  }

  return false;
}

console.log(checkHasFull("AaBb1234@#%&；，．：")); //true

console.log(checkHasFull("AaBb1234@#%&;,.:")); //false

/**
 * JS检查输⼊的⼀串字符是否全部是数字或者英⽂
 * @param str 字符串
 * @returns true 或 false; true表示为数字或者英⽂
 */

function checkEnNum(str) {
  for (var i = 0; i < str.length; i++) {
    var strTmp = str.charAt(i);

    if (!/[A-Za-z0-9]/.test(strTmp)) {
      return false;
    }
  }

  return true;
}

console.log(checkEnNum("dasdasdas")); //true

console.log(checkEnNum("dasdasdas13615!")); //false

/**
 * JS将数字转换成字符串的通⽤⽅法
 *  * 说明:直接使⽤ toFixed ⽅法会进⾏四舍五⼊，因此写⼀个将数字转换为
指定⼩数位数字符串的⽅法
 * @param sourceData 源数据
 * @param decimalLen ⼩数的位数
 */

function numberToString(sourceData, decimalLen) {
  decimalLen = _typeof(decimalLen) == undefined ? 0 : decimalLen;
  var result = sourceData + "";
  var integerStr = null; // 整数部分

  var decimalStr = null; // ⼩数部分

  if (result.indexOf(".") == -1) {
    result = Number(result).toFixed(decimalLen);
  } else {
    integerStr = result.substring(0, result.indexOf(".")); // 整数部分

    decimalStr = /\.\d+/.exec(result); // ⼩数部分

    decimalStr = Number(decimalStr);
    decimalStr = decimalStr.toPrecision(decimalLen).substr(0, decimalLen + 2);
    result = integerStr + decimalStr.substr(1);
  }

  return result;
}

console.log(numberToString(233.1, 3)); // 233.00

/**
 * JS判断浏览器
 * @returns {string}
 */
// function getOs() {
//     if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
//         return "MSIE8";
//     } else if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
//         return "MSIE6";
//     } else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
//         return "MSIE7";
//     } else if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
//         return "Firefox";
//     }
//     if (navigator.userAgent.indexOf("Chrome") > 0) {
//         return "Chrome";
//     } else {
//         return "Other";
//     }
// }
// console.log(getOs()) // Chrome
// /**
//  * JS⼿机类型判断
//  * @type {{userAgent: string, isAndroid: boolean,
// isIphone: boolean, isIpad: boolean, isWeixin: boolean,
// isChrome: boolean}}
//  */
// var BrowserInfo = {
//     userAgent: navigator.userAgent.toLowerCase(),
//     isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
//     isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
//     isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
//     isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
//     isChrome: Boolean(navigator.userAgent.match(/chrome/ig)),
// }
// console.log(BrowserInfo)

/**
 * JS 将object转为form data，⽅便post提交
 * @param {Object} obj [数据对象]
 * @return {String}
 */

function encodeFormData(obj) {
  if (!obj) return;
  var pairs = [];

  for (var name in obj) {
    if (!obj.hasOwnProperty(name)) continue;
    if (typeof obj[name] == 'function') continue;
    var value = obj[name].toString();
    name = encodeURIComponent(name.replace('%20', '+'));
    value = encodeURIComponent(value.replace('%20', '+'));
    pairs.push(name + '=' + value);
  }

  return pairs.join('&');
}

console.log(encodeFormData({
  id: 1,
  name: 'hello'
})); //id=1&name=hello