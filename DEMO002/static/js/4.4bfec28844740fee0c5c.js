webpackJsonp([4],{EgsM:function(t,e,n){var i=n("xxRB");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("09cf5008",i,!0,{})},ODCk:function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";if(!t)return"";"string"==typeof t&&(t=new Date(t.replace(/-/g,"/"))),"number"==typeof t&&(t=new Date(t));var n={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours()%12==0?12:t.getHours()%12,"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()},i={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(Y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+i[t.getDay()+""]));for(var a in n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}},cypb:function(t,e,n){"use strict";function i(t){n("EgsM")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),o=n.n(a),s=n("2sLL"),l=n("ALGc"),r=n("rHil"),c=n("pDNl"),u=n("YxJB"),p=n("3Lt7"),h=n("QTi7"),d=n("1DHf"),x=n("ODCk"),g=n.n(x),f=(n("17Ff"),d.a,s.a,l.a,r.a,c.a,u.a,p.a,h.a,{name:"MailTo",components:{Cell:d.a,XButton:s.a,XTextarea:l.a,Group:r.a,XInput:c.a,Flexbox:u.a,FlexboxItem:p.a,Box:h.a},data:function(){return{type:0,recipient:"",duplicate:"",title:this.getDefault(),attachment:"",noemailNames:[],content:this.getDefault(),textareaFocus:!1,isLoading:!1}},computed:{},mounted:function(){var t=this;this.$store.dispatch("setVisible",!0),this.saveData(),window.onresize=function(){t.textareaFocus&&document.querySelector("textarea").scrollIntoView(!0)}},methods:{saveData:function(){var t=this,e=this.$route.params.emails?this.$route.params:JSON.parse(window.localStorage.getItem("MailInfo"));e.emails?(this.type=e.type,this.recipient=this.toEmailString(e.emails),this.duplicate="",this.attachment=e.attach,0===this.type&&(this.title="【催办】"+e.title,this.content="请尽快办理！"),window.localStorage.setItem("MailInfo",o()(e)),this.noemailNames.length>0&&this.$vux.alert.show({content:"未获取到"+this.noemailNames.toString()+"的邮箱地址，请手动添加",buttonText:"我知道了"})):this.$vux.toast.show({text:"获取数据失败，即将跳转到列表页",type:"warn",time:1e3,onHide:function(){t.$router.push("/QueryList")}})},toEmailString:function(t){var e=[],n=[];for(var i in t)t[i].email?e.push(t[i].email):n.push(t[i].name);return this.noemailNames=n,e.toString()},actionSend:function(){var t=this;if(this.recipient.length<=0)return this.$vux.toast.show({text:"无收件人，请填写后发送",type:"warn"}),!1;var e={type:this.type,recMails:[this.recipient].toString(),copyMails:[this.duplicate].toString(),filePath:this.attachment,title:this.title,content:this.content};this.isLoading=!0,this.publicApi.sendMail(e).then(function(e){t.isLoading=!1,200===e.data.status?t.$vux.toast.show({text:"发送成功，即将回到列表页",time:1e3,onHide:function(){t.$router.go(-1)}}):t.$vux.toast.text(e.data.message)})},getDefault:function(){return"事项集 "+g()(new Date,"YYYY-MM-DD HH:mm:ss")}}}),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dw-ugerAndExport g-content"},[n("div",[n("group",[n("x-input",{attrs:{title:"收件人：","label-width":"100%","show-clear":!1,required:""},model:{value:t.recipient,callback:function(e){t.recipient=e},expression:"recipient"}}),t._v(" "),n("x-input",{attrs:{title:"抄&emsp;送：","label-width":"100%","show-clear":!1},model:{value:t.duplicate,callback:function(e){t.duplicate=e},expression:"duplicate"}}),t._v(" "),n("x-input",{attrs:{title:"主&emsp;题：","label-width":"100%","show-clear":!1,required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),t.type?n("cell",{attrs:{"value-align":"left"}},[n("div",{staticClass:"attach-label",attrs:{slot:"title"},slot:"title"},[t._v("附 件：")]),t._v(" "),n("div",{staticClass:"attach-wrap"},[n("svg",{staticClass:"svg-icon"},[n("use",{attrs:{"xlink:href":"#icon-zip"}})]),t._v(" "),n("span",[t._v(t._s(t.attachment))])])]):t._e(),t._v(" "),n("x-textarea",{attrs:{title:"正&emsp;文：",height:120},on:{"on-focus":function(e){t.textareaFocus=!0},"on-blur":function(e){t.textareaFocus=!1}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),t._v(" "),n("flexbox",{staticStyle:{padding:"40px 55px"},attrs:{gutter:10}},[n("flexbox-item",[n("x-button",{attrs:{type:"primary","show-loading":t.isLoading},nativeOn:{click:function(e){t.actionSend(e)}}},[t._v("发送")])],1)],1)],1)},m=[],v={render:w,staticRenderFns:m},b=v,E=n("VU/8"),y=i,D=E(f,b,!1,y,null,null);e.default=D.exports},xxRB:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.dw-ugerAndExport {\n  padding-bottom: 0;\n}\n.dw-ugerAndExport .weui-cells {\n  margin: 0px;\n  font-size: 15px;\n}\n.dw-ugerAndExport .weui-cells .disabled {\n  color: initial;\n}\n.dw-ugerAndExport .weui-cells .weui-cell {\n  padding: 1.8vh 3%;\n}\n.dw-ugerAndExport .weui-cells .weui-cell::before {\n  width: 100%;\n  height: 1px;\n  background-color: #c5c5c5;\n}\n.dw-ugerAndExport .weui-cells .weui-cell .weui-label {\n  width: 100% !important;\n}\n.dw-ugerAndExport .weui-btn {\n  width: 91%;\n}\n.dw-ugerAndExport .attach-label {\n  width: 64px;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.dw-ugerAndExport .attach-wrap {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  height: 19px;\n  position: relative;\n}\n.dw-ugerAndExport .attach-wrap .svg-icon {\n  position: absolute;\n  font-size: 32px;\n  top: -6px;\n  left: -6px;\n}\n.dw-ugerAndExport .attach-wrap > span {\n  position: absolute;\n  left: 28px;\n  right: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  color: #292929;\n}\n",""])}});