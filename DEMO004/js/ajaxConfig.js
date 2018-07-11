/*
 * 全局mui配置
 */
//window._baseUri = '';
//mui.ajaxSettings.beforeSend = function(xhr){
//	console.log('do sth beforeSend')
//}
//mui.ajaxSettings.complete = function(xhr){
//	console.log('complete:::')
////	console.log(xhr)
//}
//mui.ajaxSettings.error = function(xhr){
//	console.log('error:::')
////	console.log(xhr)
//}

/*
 * 全局接口集合
 * 页面调用方法：
 * publicApi.funcName({
 * 	success:function(res){}
 * })
 * 回调正常情况下只关注success，因为直接对dom操作过多，写在页面中更直观
 * 其他回调方法特殊处理可自行添加，参数目前和mui.ajax相同
 */
publicApi = (function($, window){
	
	/*
	 * api地址
	 */
	var BASEURI = '';//'/hrapis/hr/'; //'/hrapis/hr/';
	var REQ_INCOME_LIST = BASEURI + '../json/incomelist.json'; 	 	//月收入列表
	var REQ_INCOME_SUMMARIZE = BASEURI + '../json/incomesummary.json';	//月收入入行汇总
	var REQ_INCOME_DETAIL = BASEURI + '../json/incomedetail.json';		//月收入详情
	var REQ_SALARYTAX_LIST = BASEURI + '../json/taxlist.json';		//月税表列表
	var REQ_SALARYTAX_DETAIL = BASEURI + '../json/taxdetail.json'; 	//月税详情
	var REQ_WELFARETAX_LIST = BASEURI + '';		//福利计税项列表
	var REQ_ANNOUCEMENT_LIST = BASEURI + '';	//公告列表获取 
	var REQ_SALARY_PAGE = BASEURI + "";		/*薪酬页数据*/
	var REQ_PERFORMANCE_LIST = BASEURI + '../json/performancelist.json';			//绩效查询
	
	var REQ_APPLICATION_LIST = BASEURI + '';			//申请-我的申请-查询列表
	var REQ_APPLICATION_DETAIL = BASEURI + '';	//申请-我的申请-查看
	var REQ_DEL_APPLICATION = BASEURI + '';			//申请-删除某条
	var REQ_RECALL_APPLICATION = BASEURI + '';		//申请-撤回某条
	
	var REQ_INIT_EMPLOYMENT_CERT = BASEURI + '';		//在职证明申请-初始化
	var REQ_SAVE_EMPLOYMENT_CERT = BASEURI + '';		//在职证明申请-保存
	var REQ_SUBMIT_EMPLOYMENT_CERT = BASEURI + '';	//在职证明申请-提交
	var REQ_CHANGE_EMPLOYMENT_CERT = BASEURI + '';	//我的申请-在职证明-修改
	var REQ_READ_EMPLOYMENT_CERT = BASEURI + '';	   //我的申请-在职证明-查看
	
	var REQ_INIT_INCOME_CERT = BASEURI + '';			//收入证明-初始化
	var REQ_SAVE_INCOME_CERT = BASEURI + '';			//收入证明-保存
	var REQ_SUBMIT_INCOME_CERT = BASEURI + '';		//收入证明-提交
	
	
	var REQ_INIT_FILE_DELIVERY = BASEURI + '';		//档案专递-初始化
	var REQ_SAVE_FILE_DELIVERY = BASEURI + '';		//档案专递-保存
	var REQ_SUBMIT_FILE_DELIVERY = BASEURI + '';	                                        //档案专递-提交
	var REQ_READ_FILE_DELIVERY = BASEURI + '';		//我的申请-档案专递-查看
	var REQ_CHANGE_FILE_DELIVERY = BASEURI + '';		//我的申请-档案专递-修改
	
	var REQ_INIT_GOABRORAD_CERT = BASEURI + '';		//出国在职证明-初始化
	var REQ_SAVE_GOABRORAD_CERT = BASEURI + '';		//出国在职证明-保存-中英文模板
	var REQ_SAVE_GOABRORAD_CERT_FORTW = BASEURI + '';//出国在职证明-保存-台湾模板
	var REQ_SUBMIT_GOABRORAD_CERT = BASEURI + '';	//出国在职证明-提交-中英文模板
	var REQ_SUBMIT_GOABRORAD_CERT_FORTW = BASEURI + '';	//出国在职证明-提交-台湾模板
	
	var REQ_VERSION = BASEURI + '';	//版本查询
	var REQ_USERNAME = BASEURI + '../json/suc.json';	//获取用户名
	var REQ_LOGIN = BASEURI + '../json/suc.json';		//登录
	var REQ_LOGOUT = BASEURI + '';	//登出
	
	var REQ_APPLY_PROOFOFLNCOME_GET = BASEURI + '' //获取收入证明表单
	var REQ_APPLY_PROOFOFLNCOME_SAVE = BASEURI + '' //保存收入证明表单
	var REQ_APPLY_PROOFOFLNCOME_POST = BASEURI + '' //提交收入证明表单
	var REQ_APPLY_PROOFOFLNCOME_EDIT= BASEURI + '' //修改收入证明表单
	
	var REQ_OUTPROVEINJOB = BASEURI + '' //获取出国在职申请证明
	var REQ_SAVEOUTPROVEIN_EN = BASEURI + '' //保存出国在职收入证明
	var REQ_SAVEOUTPROVEIN_CN = BASEURI + '' //保存出国在职收入中文
	var REQ_POSTOUTPROVEIN_EN = BASEURI + '' //提交出国证明收入中英文
	var REQ_POSTOUTPROVEIN_CN = BASEURI + '' //提交出国证明收入中文
	var REQ_POSTOUTPROVEIN_CN_EDIT = BASEURI + '' //修改中文模板
	var REQ_POSTOUTPROVEIN_EN_EDIT= BASEURI + '' //修改中英文模板
	
	//全局遮罩，未提取，只有父子层处理
	$.LoadingMask = function(){
		this.init = function(){
			console.log('init')
			var maskhtml = 
			'<div style="background: rgba(0,0,0,0.5);position: absolute;left: 0;top: 0;right: 0;bottom: 0;z-index: 9999;">'
				+'<div style="position: absolute; left: 50%; top: 50%;margin: -12px 0 0 -12px;">'
			    	+'<i style="vertical-align: middle;" class="mui-spinner mui-spinner-white"></i>'
				+'</div></div>';
			var divdom = document.createElement('div');
			divdom.id = 'LOADINGMASK';
			divdom.innerHTML = maskhtml;
			if(self != top){
				top.document.body.appendChild(divdom);
			}
			else{
				document.body.appendChild(divdom);
			}
		}
		this.show = function(){
			if(self != top){
				doc = top.document;
			}
			else{
				doc = document;
			}
			var maskdom = doc.querySelector('#LOADINGMASK');
			if(maskdom){
				maskdom.style.display = 'block';
				maskdom.style.opacity = 1;
			}
			else{
				this.init()
			}
		}
		this.close = function(){
			if(self != top){
				doc = top.document;
			}
			else{
				doc = document;
			}
			var maskdom = doc.querySelector('#LOADINGMASK');
			if(maskdom){
				maskdom.style.transition = 'all 0.1s';
				maskdom.style.opacity = 0;
				setTimeout(function(){
					maskdom.style.display = 'none';
				},100)
			}
		}
		return this;
	}
	
	var api = function(){}
	
	/*
	 * 统一配置文件
	 * beforeSend和complete：全局遮罩显示/消失，可根据需求重写
	 * */
	var _extendAjax = function(options){
		var opts = $.extend(true, {
			type: 'get',
			dataType: 'json',
			beforeSend:function(xhr){
				$.LoadingMask().show()
			},
			complete: function(xhr){
				console.log('complete:::')
				$.LoadingMask().close()
			},
			error: function(xhr, type, error){
				console.log('error:::')
				console.log(xhr)
				var msg = '请求出错:::error';
				if(type == 'timeout'){
					msg = '请求超时，请检查网络后重试';
				}
				if(xhr.status == 200){
					//捕捉到timeoutTag //Login的Meta信息
					if(xhr.response.indexOf('timeoutTag') != -1){
						//重定向处理
						window.location.href = '/hr'
					}
				}
				mui.toast(msg);
			},
			timeout:30*1000,
		},options);
		$.ajax(opts)
	}
	
	/*
	 * 外部调用接口
	 */
	
	//获取文件
	api.getFile = function(options){
		var opts = $.extend(true, {type:'get'}, options);
		_extendAjax(opts)
	}
	
	//登录
	api.actionLogin = function(options){
		var opts = $.extend(true, {
			url: REQ_LOGIN
		}, options);
		_extendAjax(opts)
	}
	
	//登出
	api.actionLogout = function(options){
		var opts = $.extend(true, {
			type:'get',
			url: REQ_LOGOUT
		}, options);
		_extendAjax(opts)
	}
	
	//获取用户名
	api.getUsername = function(options){
		var opts = $.extend(true, {
			type:'get',
			url: REQ_USERNAME
		}, options);
		_extendAjax(opts)
	}
	
	//获取月收入列表
	api.getIncomeList = function(options){
		var opts = $.extend(true, {
			url: REQ_INCOME_LIST,
			timeout: 5*60*1000
		}, options);
		_extendAjax(opts)
	}
	
	//获取月收入详情
	api.getIncome = function(options){
		var opts = $.extend(true, {
			type:'get',
			url: REQ_INCOME_DETAIL
		}, options);
		_extendAjax(opts)
	}
	
	//获取月收入汇总
	api.getIncomeSummarize = function(options){
		var opts = $.extend(true, {
			url: REQ_INCOME_SUMMARIZE
		}, options);
		_extendAjax(opts)
	}
	
	//获取薪酬页列表
	api.getSalaryPage = function(options){
		var opts = $.extend(true, {
			url: REQ_SALARY_PAGE
		}, options);
		_extendAjax(opts)
	}
	
	//获取月税列表
	api.getSalaryTaxList = function(options){
		var opts = $.extend(true, {
			url: REQ_SALARYTAX_LIST
		}, options);
		_extendAjax(opts)
	}
	
	//获取月税详情
	api.getSalaryTax = function(options){
		var opts = $.extend(true, {
			url: REQ_SALARYTAX_DETAIL
		}, options);
		_extendAjax(opts)
	}
	
	//获取福利计税表
	api.getWelfareTaxList = function(options){
		var opts = $.extend(true, {
			url: REQ_WELFARETAX_LIST
		}, options);
		_extendAjax(opts)
	}
	
	//获取公告列表
	api.getAnnoucementList = function(options){
		var opts = $.extend(true, {
			url: REQ_ANNOUCEMENT_LIST
		}, options);
		_extendAjax(opts)
	}
	
	//获取绩效列表
	api.getPerformanceList = function(options){
		var opts = $.extend(true, {
			url: REQ_PERFORMANCE_LIST
		},options);
		_extendAjax(opts);
	}
	
	//获取版本号
	api.getVersion = function(options){
		var opts = $.extend(true, {
			url: REQ_VERSION
		},options);
		_extendAjax(opts);
	}
	
	//获取申请-我的申请列表
	api.getApplicationList = function(options){
		var opts = $.extend(true, {
			url: REQ_APPLICATION_LIST
		},options);
		_extendAjax(opts);
	}
	//获取申请-申请详情
	api.getApplicationDetail = function(options){
		var opts = $.extend(true, {
			url: REQ_APPLICATION_DETAIL
		},options);
		_extendAjax(opts);
	}
	//我的申请-删除申请
	api.delApplication = function(options){
		var opts = $.extend(true, {
			url: REQ_DEL_APPLICATION
		},options);
		_extendAjax(opts);
	}
	//我的申请-撤回申请
	api.recallApplication = function(options){
		var opts = $.extend(true, {
			url: REQ_RECALL_APPLICATION
		},options);
		_extendAjax(opts);
	}
	
	//获取收入证明
	api.getProofOflncome = {
		
		get:function(options){
			var opts = $.extend(true, {
				url: REQ_APPLY_PROOFOFLNCOME_GET,
				type:'GET'
			},options);
			_extendAjax(opts);
		},
		save:function(options){
			var opts = $.extend(true, {
				url: REQ_APPLY_PROOFOFLNCOME_SAVE
			},options);
			_extendAjax(opts);
		},
		post:function(options){
			var opts = $.extend(true, {
				url: REQ_APPLY_PROOFOFLNCOME_POST
			},options);
			_extendAjax(opts);
		},
		edit:function(options){
			var opts = $.extend(true, {
				url: REQ_APPLY_PROOFOFLNCOME_EDIT,
				type:"GET"
			},options);
			_extendAjax(opts);
		}
		
	}

	// 获取出国在职收入申请表
	api.getOutProveIn = {
		get:function(options){
			var opts = $.extend(true, {
				url:REQ_OUTPROVEINJOB,
				type:'GET'
			},options);
			_extendAjax(opts);
		},
		save_CN:function(options){
			var opts = $.extend(true, {
				url:REQ_SAVEOUTPROVEIN_CN
			},options);
			_extendAjax(opts);
		},
		save_EN:function(options){
			var opts = $.extend(true, {
				url:REQ_SAVEOUTPROVEIN_EN
			},options);
			_extendAjax(opts);
		},
		post_CN:function(options){
			var opts = $.extend(true, {
				url:REQ_POSTOUTPROVEIN_CN
			},options);
			_extendAjax(opts);
		},
		post_EN:function(options){
			var opts = $.extend(true, {
				url:REQ_POSTOUTPROVEIN_EN
			},options);
			_extendAjax(opts);
		},
		edit:function(options){
			var opts = $.extend(true, {
				url:REQ_POSTOUTPROVEIN_EN_EDIT,
				type:"GET"
			},options);
			_extendAjax(opts);
		}	
		
	}
	//获取在职证明申请-在职证明列表保存
	api.getApplyForEC = {
		get: function(options) {
			var opts = $.extend(true, {
				type: 'get',
				url: REQ_INIT_EMPLOYMENT_CERT
			}, options);
			_extendAjax(opts);
		},
		save: function(options) {
			var opts = $.extend(true, {
				url: REQ_SAVE_EMPLOYMENT_CERT
			}, options);
			_extendAjax(opts);
		},
		post: function(options) {
			var opts = $.extend(true, {
				url: REQ_SUBMIT_EMPLOYMENT_CERT
			}, options);
			_extendAjax(opts);
		},
		change:function(options) {
			var opts = $.extend(true, {
				type:'get',
				url: REQ_CHANGE_EMPLOYMENT_CERT
			}, options);
			_extendAjax(opts);
		},
	}
	

    //获取档案专递申请-档案专递列表保存
	api.getApplyForFD = {
		get: function(options) {
			var opts = $.extend(true, {
				type: 'get',
				url: REQ_INIT_FILE_DELIVERY
			}, options);
			_extendAjax(opts);
		},
		save: function(options) {
			var opts = $.extend(true, {
				url: REQ_SAVE_FILE_DELIVERY
			}, options);
			_extendAjax(opts);
		}, 
		post: function(options) {
			var opts = $.extend(true, {
				url: REQ_SUBMIT_FILE_DELIVERY
			}, options);
			_extendAjax(opts);
		},
		change: function(options) {
			var opts = $.extend(true, {
				type:'get',
				url: REQ_CHANGE_FILE_DELIVERY
			}, options);
			_extendAjax(opts);
		},
	}
	
	return api;
}(mui,window))
