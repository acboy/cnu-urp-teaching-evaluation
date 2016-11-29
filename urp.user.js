// ==UserScript==
// @name        cnu urp
// @namespace   urp.cnuer
// @description cnutieba
// @version     1.0
// @updateURL   https://weixin.cnuer.cn/js/urpauto.user.js
// @downloadURL https://weixin.cnuer.cn/js/urpauto.user.js
// @include     http://xk.cnu.edu.cn/jxpgXsAction.do
// @grant       GM_xmlhttpRequest
// @run-at      document-end
// ==/UserScript==

var doc;
if(self.name == 'mainFrame'){
    doc = self.document;
}else{
    var topframes = window.top.document.getElementsByTagName('frame');
    for (var i = 0; i < topframes.length; i++) { 
        if(topframes[i].name == 'bottomFrame'){
            var frames1 = topframes[i].contentDocument.getElementsByTagName( "frame" );
            for (var j = 0; j < frames1.length; j++) {
                if(frames1[j].name == 'mainFrame'){
                    doc = frames1[j].contentDocument;
                    break;
                }
            }
        }
    }
}

var d = document.createElement('div');
d.style.position = 'fixed';
d.style.width = '100px';
d.style.right = '10px';
d.style.top = '20px';
d.style.backgroundColor = '#EEE';
d.innerHTML = '<div style="padding: 6px;text-align: center;">选项</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci(0.2)">很差</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci(0.4)">较差</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci(0.6)">一般</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci(0.8)">较好</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci(1)">很好</div>'+
'<div style="padding: 6px;text-align: center;">------</div>'+
'<div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci2(1)">随机差</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci2(2)">随机好</div><div style="border:solid 1px #CCC;color:red;padding: 6px;text-align: center;" onclick="ci2(3)">随机分布</div>';
doc.body.appendChild(d);
flag = true;
var sc = document.createElement('script');
sc.type = 'text/javascript';
sc.innerHTML = "var input = document.getElementsByTagName('input');\
function ci(n){\
    for (var i = 0; i < input.length; i++) { \
        if(input[i].type=='radio'){\
            var p = RegExp('_'+n+'$');\
            if(p.test(input[i].value)){\
                input[i].checked = true;\
            }\
        }\
    }/*document.StDaForm.submit();*/\
}\
function ci2(n){\
    if(n===1) var a = ['_0.2$','_0.4$','_0.6$'];\
    else if(n===2) var a = ['_0.8$','_1$','_0.6$'];\
    else var a = ['_0.2$','_0.4$','_0.8$','_1$','_0.6$'];\
    var f = true;\
    var l = a.length;\
    for (var i = 0; i < input.length; i++) { \
        if(f){\
            var p = RegExp(a[Math.round(Math.random()*l)]);f = false;\
        }\
        if(input[i].type=='radio'){\
            if(p.test(input[i].value)){\
                input[i].checked = true;f = true;\
            }\
        }\
    }/*document.StDaForm.submit();*/\
}flag = true;showtime.style.display='none';document.StDaForm.zgpj.value = '老师很负责认真';document.StDaForm.zgpj1.value = '暂时没发现需要改进的地方';"
doc.body.appendChild(sc);