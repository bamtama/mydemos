webpackJsonp([12],{"/kga":function(t,e,n){"use strict";function i(t){n("7sDB")}var a=n("JkZY"),o=(a.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},"4cF/":function(t,e,n){t.exports=n.p+"static/img/loading.d6c0c65.gif"},"62KO":function(t,e,n){"use strict";function i(t){n("pPOY")}var a=n("/kga"),o=(a.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,{name:"confirm",components:{XDialog:a.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.msg=n.concat([null])):o>-1&&(t.msg=n.slice(0,o).concat(n.slice(o+1)))}else t.msg=a}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])],2)],1)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},"7sDB":function(t,e){},Bfwr:function(t,e,n){"use strict";function i(t){n("KYqp")}var a=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},s=[],r={render:o,staticRenderFns:s},l=r,u=n("VU/8"),c=i,d=u(a,l,!1,c,null,null);e.a=d.exports},CErO:function(t,e){},D8a4:function(t,e,n){"use strict";function i(t){n("sirh")}var a=(String,Number,{name:"badge",props:{text:[String,Number]}}),o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},s=[],r={render:o,staticRenderFns:s},l=r,u=n("VU/8"),c=i,d=u(a,l,!1,c,null,null);e.a=d.exports},KYqp:function(t,e){},MhWL:function(t,e){},NHnr:function(t,e,n){"use strict";function i(t){n("pnD7")}function a(t,e){function n(t){document.body.removeChild(t)}return function(t){var i=document.createElement("script");document.body.appendChild(i);var a=new ft.a(function(t,a){i.addEventListener("load",function(a){n(i),e||t(a)},!1),i.addEventListener("error",function(t){n(i),a(t)},!1),e&&(window.____callback____=function(){t(),window.____callback____=null})});return e&&(t+="&callback=____callback____"),i.src=t,a}(t)}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"get",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return _t({method:i,url:t,params:e,catchErr:a},n)}Object.defineProperty(e,"__esModule",{value:!0});var s={};n.d(s,"remoteLoad",function(){return a}),n.d(s,"ajax",function(){return o});var r,l,u=n("7+uW"),c=(n("v5o6"),n("Dd8w")),d=n.n(c),m=n("UIMx"),h=n("dgEa"),p=n("Bfwr"),f=n("63CM"),g=n("NYxO"),v=(p.a,m.a,h.a,f.a,d()({},Object(g.b)(["isLoading","cachePages","loadingClass"])),{components:{Loading:p.a,Tabbar:m.a,TabbarItem:h.a},directives:{TransferDom:f.a},name:"app",computed:d()({},Object(g.b)(["isLoading","cachePages","loadingClass"])),data:function(){return{fakeshow:!1,isFull:!1}},mounted:function(){},methods:{fakeRefresh:function(){var t=this;this.fakeshow=!0,setTimeout(function(){t.fakeshow=!1},100)}}}),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-p",attrs:{id:"app"}},[n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("loading",{directives:[{name:"show",rawName:"v-show",value:1===t.isLoading,expression:"isLoading === 1"}]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===t.isLoading,expression:"isLoading === 2"}],staticClass:"weui-mask_transparent"},[n("div",{staticClass:"g-mask-loading",class:t.loadingClass},[t._m(0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fakeshow,expression:"fakeshow"}],staticClass:"fakerefresh"})])])],1),t._v(" "),n("keep-alive",{attrs:{include:t.cachePages}},[n("router-view",{staticClass:"rview"})],1)],1)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cont"},[i("img",{attrs:{src:n("4cF/")}}),t._v(" "),i("p",{staticClass:"tip"},[t._v("Loading...")])])}],S={render:_,staticRenderFns:w},x=S,b=n("VU/8"),y=i,C=b(v,x,!1,y,null,null),T=C.exports,k=n("/ocq"),L=n("woOf"),I=n.n(L),E=n("Gu7T"),A=n.n(E),O=n("lHA8"),D=n.n(O),$=n("c/Tr"),P=n.n($),F=n("bOdI"),N=n.n(F),R=(r={isLoading:0,loadingClass:"",fileItem:"",cachePages:["Home"],personListScrollTop:0,itemListScrollTop:0,modifiedItem:null,deletedItem:null,focusState:!1,rewardObj:null,indexState:!1,rewardObjState:!1},N()(r,"indexState",!1),N()(r,"addressList",null),N()(r,"addressDetail",null),N()(r,"rewardOption",null),r),V={isLoading:function(t){return t.isLoading},loadingClass:function(t){return t.loadingClass},fileItem:function(t){return t.fileItem},cachePages:function(t){return t.cachePages},personListScrollTop:function(t){return t.personListScrollTop},itemListScrollTop:function(t){return t.itemListScrollTop},modifiedItem:function(t){return t.modifiedItem},deletedItem:function(t){return t.deletedItem},focusState:function(t){return t.focusState},getRewardObj:function(t){return t.rewardObj},indexState:function(t){return t.indexState},getRewardObjState:function(t){return t.rewardObjState},getAddressList:function(t){return t.addressList},getAddressDetail:function(t){return t.addressDetail},getRewardOption:function(t){return t.rewardOption}},B=(l={},N()(l,"IS_LOADING",function(t,e){t.isLoading=e}),N()(l,"LOADING_CLASS",function(t,e){t.loadingClass=e}),N()(l,"FILE_ITEM",function(t,e){t.fileItem=e}),N()(l,"CACHE_PAGES",function(t,e){t.cachePages=e}),N()(l,"PERSONLIST_SCROLLTOP",function(t,e){t.personListScrollTop=e}),N()(l,"ITEMLIST_SCROLLTOP",function(t,e){t.itemListScrollTop=e}),N()(l,"MODIFIED_ITEM",function(t,e){t.modifiedItem=e}),N()(l,"DELETED_ITEM",function(t,e){t.deletedItem=e}),N()(l,"FOCUS_STATE",function(t,e){t.focusState=e}),N()(l,"REWARD_OBJ",function(t,e){t.rewardObj=e}),N()(l,"INDEX_STATE",function(t,e){t.indexState=e}),N()(l,"ADDRESS_LIST",function(t,e){t.addressList=e}),N()(l,"ADDRESS_DETAIL",function(t,e){t.addressDetail=e}),N()(l,"REWARD_OBJ_STATE",function(t,e){t.rewardObjState=e}),N()(l,"REWARD_OPTION",function(t,e){t.rewardOption=e}),l),M={globalLoading:function(t,e){(0,t.commit)("IS_LOADING",e)},setLoadingClass:function(t,e){(0,t.commit)("LOADING_CLASS",e)},setFileItem:function(t,e){(0,t.commit)("FILE_ITEM",e)},setPersonListScrollTop:function(t,e){(0,t.commit)("PERSONLIST_SCROLLTOP",e)},setItemListScrollTop:function(t,e){(0,t.commit)("ITEMLIST_SCROLLTOP",e)},setModifiedItem:function(t,e){(0,t.commit)("MODIFIED_ITEM",e)},removeModifiedItem:function(t){(0,t.commit)("MODIFIED_ITEM",null)},setDeletedItem:function(t,e){(0,t.commit)("DELETED_ITEM",e)},addCachePage:function(t,e){var n=t.commit,i=t.state,a=P()(new D.a([].concat(A()(i.cachePages),[e])));console.log(a),n("CACHE_PAGES",a)},removeCachePage:function(t,e){var n=t.commit,i=t.state,a=I()([],i.cachePages),o=a.length,s=i.cachePages.indexOf(e);-1!==s?(a.splice(s+1,o-s),n("CACHE_PAGES",a)):n("CACHE_PAGES",["Home"])},clearCachePage:function(t){(0,t.commit)("CACHE_PAGES",[])},SetFocusState:function(t,e){(0,t.commit)("FOCUS_STATE",e)},setRewardObj:function(t,e){(0,t.commit)("REWARD_OBJ",e)},SetIndexState:function(t,e){(0,t.commit)("INDEX_STATE",e)},saveAddressList:function(t,e){(0,t.commit)("ADDRESS_LIST",e)},saveAddressDetail:function(t,e){(0,t.commit)("ADDRESS_DETAIL",e)},SetRewardObjState:function(t,e){(0,t.commit)("REWARD_OBJ_STATE",e)},setRewardOption:function(t,e){(0,t.commit)("REWARD_OPTION",e)}},j={state:R,getters:V,mutations:B,actions:M};u.a.use(g.a);var H=new g.a.Store({modules:{app:j},strict:!1}),U=function(){return n.e(10).then(n.bind(null,"7czD"))},Y=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"P7ryO"))},G=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"iGU7"))},q=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"HXef"))},W=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"eerB"))},X=function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"FYU/"))},z=function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"VXXW"))},Z=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"VM9E"))},J=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"C52+"))},K=function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"nmGS"))},Q=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"GrCA"))},tt=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"7ajz"))},et=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"DkNc"))},nt=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"J5p7"))},it=function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"zpx3"))},at=function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"Oy2t"))},ot=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"20Nw"))},st=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"28uT"))},rt=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"v6xU"))},lt=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"dAf4"))},ut=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"eRF9"))},ct=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"qNq5"))},dt=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OXj8"))};u.a.use(k.a);var mt=new k.a({routes:[{path:"/",name:"Login",component:Y},{path:"/Home",name:"Home",component:q,children:[{path:"Index",component:W,meta:{cacheSub:!0,level:1}},{path:"Mine",component:G},{path:"locList",component:X,meta:{cacheSub:!0}},{path:"attention",component:X,meta:{cacheSub:!0}},{path:"*",redirect:W}]},{path:"/Address",name:"Address",component:U},{path:"/LocDetail",name:"LocDetail",component:z},{path:"/LocShare",name:"LocShare",component:z},{path:"/FriendList",name:"FriendList",component:X,meta:{cacheSub:!0,vmname:"CommonList"}},{path:"/LocList",name:"LocList",component:X,meta:{cacheSub:!0,vmname:"CommonList"}},{path:"/ChartIndex",name:"ChartIndex",component:Z},{path:"/ChartDetail",name:"ChartDetail",component:J},{path:"/ContactList",name:"ContactList",component:K},{path:"/AnnouncementList",name:"AnnouncementList",component:Q},{path:"/AnnouncementDetail",name:"AnnouncementDetail",component:tt},{path:"/AnnouncementEdit",name:"AnnouncementEdit",component:et},{path:"/MemoryList",name:"MemoryList",component:nt},{path:"/MemoryEdit",name:"MemoryEdit",component:it},{path:"/PayList",name:"PayList",component:at},,{path:"/FileDetail1/:type",name:"filedetail1",component:ot,props:!0},{path:"/FileDetail2/:type",name:"filedetail2",component:st,props:!0},{path:"/FileDetail3/:type",name:"filedetail3",component:rt,props:!0},{path:"/FileDetail4/:type",name:"filedetail4",component:lt,props:!0},{path:"/FileInTube",name:"FileInTube",component:ut},{path:"/FavList",name:"FavList",component:ct},{path:"/FavDetail",name:"FavDetail",component:dt}]});mt.beforeEach(function(t,e,n){if(u.a.prototype.$mBack.setVux(u.a.$vux).loop().getState()){"LocDetail"===t.name?H.dispatch("setLoadingClass","full"):H.dispatch("setLoadingClass","");var i=document.querySelector(".g-mask");i&&(i.parentNode.removeChild(i),i=null),(e.meta.level&&!t.meta.level||e.meta.level===t.meta.level)&&(t.meta.level=e.meta.level+1),t.meta.level>e.meta.level?(console.log("往下走"),e.meta.cacheSub&&(t.meta.vmname?H.dispatch("addCachePage",t.meta.vmname):H.dispatch("addCachePage",t.name))):t.meta.level<e.meta.level&&(t.meta.cacheSub&&(t.meta.vmname?H.dispatch("removeCachePage",t.meta.vmname):H.dispatch("removeCachePage",t.name)),console.log(H.getters.cachePages)),n()}else n(!1)}),mt.afterEach(function(t,e){H.dispatch("globalLoading",0)});var ht=mt,pt=n("//Fk"),ft=n.n(pt),gt=n("mtWM"),vt=n.n(gt);n("7JE7"),n("17Ff");vt.a.defaults.baseURL="/DEMO001/",vt.a.defaults.timeout=3e4,vt.a.withCredentials=!0,vt.a.interceptors.request.use(function(t){return t},function(t){console.log("request error:"+t)}),vt.a.interceptors.response.use(function(t){return t},function(t){return console.log("request error:"+t),t});var _t=function(t,e){return t.method||(t.method="post"),e&&H.dispatch("globalLoading",!0===e?1:e),new ft.a(function(n,i){vt()(t).then(function(t){console.log("success"),e&&H.dispatch("globalLoading",0),444===t.data.status||445===t.data.status?Pt.$vux.toast.show({text:"登录失效<br />请重新登录",type:"text",onHide:function(){Pt.$router.replace("/")}}):n(t)}).catch(function(n){console.log("请求失败"),console.log(n),e&&H.dispatch("globalLoading",0),Pt.$vux.toast.show({text:"请求异常<br />请返回重试",type:"text",onHide:function(){t.catchErr&&i(n)}})})})},wt={LOGIN:"/static/mock/suc.json",USERINFO:"/static/mock/userinfo.json",MENU:"/static/mock/menu.json",FOCUS:"/static/mock/focus.json"},St={LOC:"/static/mock/loclist.json",ORG:"/static/mock/orglist.json",CONTACT:"/static/mock/contactlist.json",ANNOUNCEMENT:"/static/mock/announcementlist.json",MEMORY:"/static/mock/memorylist.json",PAY:"/static/mock/paylist.json",FAV:"/static/mock/favlist.json"},xt={CURRENTLOC:"/static/mock/locFixedDetail.json",HISTORYLOC:"/static/mock/locHistoryDetail.json",CIRCLELOC:"/static/mock/locCircleDetail.json",FILEDETAIL:"/static/mock/filedetail.json",ANNOUCEMENT:"/static/mock/announcementdetail.json"},bt={INDEX:"/static/mock/chartindex.json",AGE:"/static/mock/chartage.json",GENDER:"/static/mock/chart/"},yt={BASE:wt,LIST:St,DETAIL:xt,CHART:bt},Ct=n("Peep"),Tt=n("3BeM"),kt=n("oVYx"),Lt=n("NXWw"),It=n("Zrlr"),Et=n.n(It),At=n("wxAW"),Ot=n.n(At),Dt=function(){function t(){Et()(this,t),this.state=!0,this.$vux="",this.frame=[{name:"alert",class:"body>.vux-alert .weui-dialog"},{name:"confirm",class:"body>.vux-confirm .weui-dialog"},{name:"datetime",class:"body>#vux-datetime-instance"}],this.alertDom=null}return Ot()(t,[{key:"addFrame",value:function(t){var e=this;t.forEach(function(t){e.frame.some(function(e){return e.name==t.name})?e.frame.forEach(function(n,i){n.name==t.name&&I()(e.frame[i],t)}):e.frame.push(t)})}},{key:"loop",value:function(){var t=this,e=!0;return this.frame.forEach(function(n){var i=document.querySelector(n.class);i&&i&&"none"!==getComputedStyle(i).display&&(e=!1,n.fn?n.fn():t.$vux[n.name]&&t.$vux[n.name].hide()||(i.style.display="none"))}),e?this.allow():this.prevent(),this}},{key:"allow",value:function(){return this.state=!0,this}},{key:"setVux",value:function(t){return this.$vux=t,this}},{key:"prevent",value:function(){return this.state=!1,this}},{key:"checkShow",value:function(){document.querySelectorAll()}},{key:"hide",value:function(){return this.$vux.alert&&this.$vux.alert.hide(),this.$vux.confirm&&this.$vux.confirm.hide(),this.$vux.datetime&&this.$vux.datetime.hide(),this}},{key:"getState",value:function(){return this.state}}]),t}(),$t={install:function(t,e){t.prototype.$mBack=new Dt,e&&t.prototype.$mBack.addFrame(e)}};u.a.use($t),n("hKoQ").polyfill(),u.a.config.productionTip=!1,u.a.prototype.publicApi=s,console.log(yt),u.a.prototype.URL=yt,u.a.use(kt.a),u.a.use(Ct.a),u.a.use(Tt.a),u.a.use(Lt.a);var Pt=e.default=new u.a({router:ht,store:H,render:function(t){return t(T)}}).$mount("#app-box")},QK03:function(t,e){},TF5v:function(t,e){},UIMx:function(t,e,n){"use strict";function i(t){n("MhWL")}var a=n("piuB"),o=(a.b,String,{mounted:function(){},name:"tabbar",mixins:[a.b],props:{iconClass:String}}),s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},UNGY:function(t,e,n){"use strict";function i(t){n("q5Ml")}var a=n("fZjL"),o=n.n(a),s=n("oWtu"),r=n("zV4+"),l=n("rHil"),u=n("kbG3"),c=n("KRg4"),d=n("ODCk"),m=(c.a,l.a,u.a,s.a,String,String,String,String,String,Number,Number,String,String,String,String,String,String,String,String,Boolean,Number,Number,String,String,String,Function,Boolean,Array,Array,Boolean,String,Function,Function,Object,{name:"datetime",mixins:[c.a],components:{Group:l.a,InlineDesc:u.a,Icon:s.a},props:{format:{type:String,default:"YYYY-MM-DD",validator:function(t){return!0}},title:String,value:{type:String,default:""},inlineDesc:String,placeholder:String,minYear:Number,maxYear:Number,confirmText:String,cancelText:String,clearText:String,yearRow:{type:String,default:"{value}"},monthRow:{type:String,default:"{value}"},dayRow:{type:String,default:"{value}"},hourRow:{type:String,default:"{value}"},minuteRow:{type:String,default:"{value}"},required:{type:Boolean,default:!1},minHour:{type:Number,default:0},maxHour:{type:Number,default:23},startDate:{type:String,validator:function(t){return!t||10===t.length}},endDate:{type:String,validator:function(t){return!t||10===t.length}},valueTextAlign:String,displayFormat:Function,readonly:Boolean,hourList:Array,minuteList:Array,show:Boolean,defaultSelectedValue:String,computeHoursFunction:Function,computeDaysFunction:Function,orderMap:Object},created:function(){this.isFirstSetValue=!1,this.currentValue=this.value},data:function(){return{currentShow:!1,currentValue:null,valid:!0,errors:{}}},mounted:function(){var t=this,e=this.uuid;this.$el.setAttribute("id","vux-datetime-"+e),this.readonly||this.$nextTick(function(){t.render(),t.show&&t.$nextTick(function(){t.picker&&t.picker.show(t.currentValue)})})},computed:{styles:function(){return this.$parent?{width:this.$parent.labelWidth,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}:{}},pickerOptions:function(){var t=this,e={trigger:"#vux-datetime-"+this.uuid,format:this.format,value:this.currentValue,output:".vux-datetime-value",confirmText:t.getButtonText("confirm"),cancelText:t.getButtonText("cancel"),clearText:t.clearText,yearRow:this.yearRow,monthRow:this.monthRow,dayRow:this.dayRow,hourRow:this.hourRow,minuteRow:this.minuteRow,minHour:this.minHour,maxHour:this.maxHour,startDate:this.startDate,endDate:this.endDate,hourList:this.hourList,minuteList:this.minuteList,defaultSelectedValue:this.defaultSelectedValue,computeHoursFunction:this.computeHoursFunction,computeDaysFunction:this.computeDaysFunction,orderMap:this.orderMap||{},onSelect:function(e,n,i){t.picker&&t.picker.config.renderInline&&(t.$emit("input",i),t.$emit("on-change",i))},onConfirm:function(e){t.currentValue=e},onClear:function(e){t.$emit("on-clear",e)},onHide:function(e){t.currentShow=!1,t.$emit("update:show",!1),t.validate(),t.$emit("on-hide",e),"cancel"===e&&t.$emit("on-cancel"),"confirm"===e&&setTimeout(function(){t.$nextTick(function(){t.$emit("on-confirm",t.value)})})},onShow:function(){t.currentShow=!0,t.$emit("update:show",!0),t.$emit("on-show")}};return this.minYear&&(e.minYear=this.minYear),this.maxYear&&(e.maxYear=this.maxYear),e},firstError:function(){var t=o()(this.errors)[0];return this.errors[t]},labelClass:function(){return this.$parent?{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}:{}}},methods:{getButtonText:function(t){return"cancel"===t&&this.cancelText?this.cancelText:"confirm"===t&&this.confirmText?this.confirmText:this.$el.getAttribute("data-"+t+"-text")},render:function(){var t=this;this.$nextTick(function(){t.picker&&t.picker.destroy(),t.picker=new r.a(t.pickerOptions)})},validate:function(){if(!this.currentValue&&this.required)return this.valid=!1,void(this.errors.required="必填");this.valid=!0,this.errors={}}},watch:{readonly:function(t){t?this.picker&&this.picker.destroy():this.render()},show:function(t){t!==this.currentShow&&(t?this.picker&&this.picker.show(this.currentValue):this.picker&&this.picker.hide(this.currentValue))},currentValue:function(t,e){this.$emit("input",t),this.isFirstSetValue?this.$emit("on-change",t):(this.isFirstSetValue=!0,e&&this.$emit("on-change",t)),this.validate()},startDate:function(){this.render()},endDate:function(){this.render()},format:function(t){this.currentValue&&(this.currentValue=Object(d.a)(this.currentValue,t)),this.render()},value:function(t){if(this.readonly||this.picker&&this.picker.config.renderInline)return void(this.currentValue=t);this.currentValue!==t&&(this.currentValue=t,this.render())}},beforeDestroy:function(){this.picker&&this.picker.destroy()}}),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"vux-datetime weui-cell",class:{"weui-cell_access":!t.readonly},attrs:{"data-cancel-text":"取消","data-confirm-text":"确定",href:"javascript:"}},[t._t("default",[n("div",[t._t("title",[n("p",{class:t.labelClass,style:t.styles,domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),t.inlineDesc?n("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],2),t._v(" "),n("div",{staticClass:"weui-cell__ft vux-cell-primary vux-datetime-value",style:{textAlign:t.valueTextAlign}},[!t.currentValue&&t.placeholder?n("span",{staticClass:"vux-cell-placeholder"},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.currentValue?n("span",{staticClass:"vux-cell-value"},[t._v(t._s(t.displayFormat?t.displayFormat(t.currentValue):t.currentValue))]):t._e(),t._v(" "),n("icon",{directives:[{name:"show",rawName:"v-show",value:!t.valid,expression:"!valid"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.firstError}})],1)])],2)},p=[],f={render:h,staticRenderFns:p},g=f,v=n("VU/8"),_=i,w=v(m,g,!1,_,null,null);e.a=w.exports},dgEa:function(t,e,n){"use strict";var i=n("piuB"),a=n("D8a4"),o=(a.a,i.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:a.a},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[i.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=c(o,u,!1,null,null,null);e.a=d.exports},kbG3:function(t,e,n){"use strict";function i(t){n("TF5v")}var a={name:"inline-desc"},o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},s=[],r={render:o,staticRenderFns:s},l=r,u=n("VU/8"),c=i,d=u(a,l,!1,c,null,null);e.a=d.exports},mtdz:function(t,e){},mzja:function(t,e,n){"use strict";function i(t){n("mtdz")}var a=n("/kga"),o=(a.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:a.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},oWtu:function(t,e,n){"use strict";function i(t){n("QK03")}var a=(String,Boolean,{name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}),o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},s=[],r={render:o,staticRenderFns:s},l=r,u=n("VU/8"),c=i,d=u(a,l,!1,c,null,null);e.a=d.exports},pPOY:function(t,e){},pnD7:function(t,e){},q27o:function(t,e){},q5Ml:function(t,e){},rHil:function(t,e,n){"use strict";function i(t){n("q27o")}var a=n("wmxo"),o=(a.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:a.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?n("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},rLAy:function(t,e,n){"use strict";function i(t){n("CErO")}var a=n("xNvf"),o=(a.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[a.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},r=[],l={render:s,staticRenderFns:r},u=l,c=n("VU/8"),d=i,m=c(o,u,!1,d,null,null);e.a=m.exports},sirh:function(t,e){}},["NHnr"]);